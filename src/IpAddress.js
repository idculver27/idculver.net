export default class IpAddress {
	/**
	 * IP Address
	 * @param {string} address
	 * Dotted decimal IP address.  
	 * Optionally followed by a CIDR (separated by /) or subnet or wildcard mask (separated by space).
	 */
	constructor(address) {
		this.address = address;
	}

	get address() {
		return this._address;
	}

	/**
	 * @param {string} newAddress
	 * Dotted decimal IP address.  
	 * Optionally followed by a CIDR (separated by /) or subnet or wildcard mask (separated by space).
	 */
	set address(input) {
		try {
			let regex = input.trim().match(/^(?<address>\d{1,3}(\.\d{1,3}){3})(?<cidr>\/\d{1,2})?(?<mask> \d{1,3}(\.\d{1,3}){3})?$/);
			let newAddress = regex.groups.address;
			let newCidr = regex.groups.cidr;
			let newMask = regex.groups.mask;
			
			// validate IP address
			newAddress.split(".").forEach((octet) => {
				let octetInt = parseInt(octet);
				if (octetInt < 0 || octetInt > 255) {
					throw new Error();
				}
			});
			
			// validate CIDR
			if (newCidr && newMask) throw new Error();
			if (!newCidr && !newMask) newCidr = "/32";
			newCidr = parseInt(newCidr.substring(1));

			// validate mask
			if (newMask) {
				let binaryMask = "";
				newMask.split(".").forEach((octet) => {
					let octetInt = parseInt(octet);
					if (octetInt < 0 || octetInt > 255) {
						throw new Error();
					}
					binaryMask += octet.toString(2).padStart(8, "0");
				});

				// convert wildcard mask to subnet mask
				if (binaryMask.startsWith("0")) {
					let oldMask = binaryMask.split("");
					binaryMask = "";
					oldMask.forEach((digit) => {
						if (digit === "0") binaryMask += "1";
						else binaryMask += "0";
					});
				}

				// convert subnet mask to CIDR
				let countOf1 = 0;
				while (countOf1 < 32) {
					if (binaryMask.charAt(countOf1) !== "1") break;
					countOf1++;
				}

				let countOf0 = 31;
				while (countOf0 > -1) {
					if (binaryMask.charAt(countOf0) !== "0") break;
					countOf0--;
				}
				countOf0 = 31 - countOf0;

				if (countOf1 + countOf0 !== 32) throw new Error();
				newCidr = countOf1;
			}

			this._address = newAddress;
			this.cidr = newCidr;
		} catch {
			throw new Error("Error while parsing IP address.");
		}
	}

	get cidr() {
		return this._cidr;
	}

	/**
	 * @param {number} newCidr 0-32.
	 */
	set cidr(newCidr) {
		newCidr = parseInt(newCidr);
		if (newCidr < 0 || newCidr > 32) throw new Error("Invalid CIDR.");
		this._cidr = newCidr;
	}

	get addressBin() {
		return IpAddress.dec2bin(this.address);
	}

	get networkAddress() {
		return IpAddress.bin2dec(this.addressBin.substring(0, this.cidr) + "0".repeat(32 - this.cidr));
	}

	get firstUsableHost() {
		return IpAddress.bin2dec(IpAddress.dec2bin(this.networkAddress).substring(0, 31) + "1");
	}

	get lastUsableHost() {
		return IpAddress.bin2dec(IpAddress.dec2bin(this.broadcastAddress).substring(0, 31) + "0");
	}

	get broadcastAddress() {
		return IpAddress.bin2dec(this.addressBin.substring(0, this.cidr) + "1".repeat(32 - this.cidr));
	}

	get totalAddresses() {
		return 2 ** (32 - this.cidr);
	}

	get usableHosts() {
		return this.cidr > 30 ? 0 : 2 ** (32 - this.cidr) - 2;
	}

	get subnetMask() {
		return IpAddress.bin2dec("1".repeat(this.cidr) + "0".repeat(32 - this.cidr));
	}

	get wildcardMask() {
		return IpAddress.bin2dec("0".repeat(this.cidr) + "1".repeat(32 - this.cidr));
	}

	get subnetType() { // WIP
		let binAddress = IpAddress.dec2bin(this.address);
		let firstOctet = parseInt(this.address.split(".")[0]);
		let types = [];

		if (binAddress.startsWith("00001010") || binAddress.startsWith("101011000001") || binAddress.startsWith("1100000010101000")) {
			types.push("Private");
		} else if (firstOctet == 127) {
			types.push("Loopback");
		} else if (this.address.startsWith("169.254.")) {
			types.push("APIPA");
		} else if (firstOctet >= 224 && firstOctet <= 239) {
			types.push("Multicast");
		} else if (firstOctet >= 240) {
			types.push("Reserved");
		} else {
			types.push("Public");
		}

		if (types.length === 1) return types[0];
		else return;
	}

	/**
	 * Convert a dotted decimal IP address to a binary string.
	 * @param {string} dec e.g. "192.168.1.1"
	 * @returns {string} e.g. "11000000101010000000000100000001"
	 */
	static dec2bin(dec) {
		let bin = "";
		dec.split(".").forEach((octet) => {
			bin += parseInt(octet).toString(2).padStart(8, "0");
		});
		return bin;
	}

	/**
	 * Convert a binary string to a dotted decimal IP address.
	 * @param {string} bin e.g. "11000000101010000000000100000001"
	 * @returns {string} e.g. "192.168.1.1"
	 */
	static bin2dec(bin) {
		return `${parseInt(bin.substring(0, 8), 2)}.${parseInt(bin.substring(8, 16), 2)}.${parseInt(bin.substring(16, 24), 2)}.${parseInt(bin.substring(24), 2)}`;
	}
}
