export default class IpAddress {
	/**
	 * IP address
	 * @param {string} address - Dotted decimal string, e.g. "192.168.1.1". 
	 * @param {number} cidr - Number, 0-32.
	 */
	constructor(address, cidr) {
		this.address = address;
		this.cidr = cidr;
	}

	get address() {
		return this._address;
	}

	/**
	 * @param {string} dec - Dotted decimal string, e.g. "192.168.1.1".
	 */
	set address(dec) {
		const newAddress = IpAddress.dec2bin(dec);
		if (!newAddress) throw new Error("Invalid IP address.");
		this._address = newAddress;
	}

	get cidr() {
		return this._cidr;
	}

	/**
	 * @param {number} newCidr - 0-32.
	 */
	set cidr(newCidr) {
		newCidr = parseInt(newCidr);
		if (newCidr < 0 || newCidr > 32) throw new Error("Invalid CIDR.");
		this._cidr = newCidr;
	}

	get subnetMask() {
		return "1".repeat(this._cidr) + "0".repeat(32 - this._cidr);
	}

	/**
	 * @param {string} dec - Dotted decimal string, e.g. "255.255.255.0".
	 */
	set subnetMask(dec) {
		let e = new Error("Invalid subnet mask.");
		
		const subnetMask = IpAddress.dec2bin(dec);
		if (!subnetMask) throw e;
		
		// parse subnet mask into cidr

		let countOf1 = 0;
		while (countOf1 < 32) {
			if (subnetMask.charAt(countOf1) !== "1") break;
			countOf1++;
		}

		let countOf0 = 31;
		while (countOf0 > -1) {
			if (subnetMask.charAt(countOf0) !== "0") break;
			countOf0--;
		}
		countOf0 = 31 - countOf0;

		if (countOf1 + countOf0 !== 32) throw e;
		this._cidr = countOf1;
	}

	get networkAddress() {
		return this._address.substring(0, this._cidr) + "0".repeat(32 - this._cidr);
	}

	get firstUsableHost() {
		return this.networkAddress.substring(0, 31) + "1";
	}

	get lastUsableHost() {
		return this.broadcastAddress.substring(0, 31) + "0";
	}

	get broadcastAddress() {
		return this._address.substring(0, this._cidr) + "1".repeat(32 - this._cidr);
	}

	get wildcardMask() {
		return "0".repeat(this._cidr) + "1".repeat(32 - this._cidr);
	}

	get totalAddresses() {
		return 2 ** (32 - this._cidr);
	}

	get usableHosts() {
		return this._cidr > 30 ? 0 : 2 ** (32 - this._cidr) - 2;
	}

	/**
	 * Convert a dotted decimal string to a binary string.
	 * @param {string} dec - Dotted decimal string, e.g. "192.168.1.1" or "255.255.255.0".
	 */
	static dec2bin(dec) {
		let bin = "";
		dec.split(".").forEach(octetDec => {
			let octet = parseInt(octetDec);
			if (octet < 0 || octet > 255) return null;
			if (isNaN(octet)) octet = 0;
			bin += octet.toString(2).padStart(8, "0");
		});
		if (bin.length !== 32) return null;
		return bin;
	}

	/**
	 * Convert a binary string to dotted decimal.
	 * @param {string} bin - 32-bit binary string. 
	 */
	static bin2dec(bin) {
		return `${parseInt(bin.substring(0, 8), 2)}.${parseInt(bin.substring(8, 16), 2)}.${parseInt(bin.substring(16, 24), 2)}.${parseInt(bin.substring(24), 2)}`;
	}

	/**
	 * Insert spaces between every byte of a 64-bit binary string for readability.
	 * @param {string} bin - 32-bit binary string. 
	 */
	static spaceOutBin(bin) {
		return `${bin.substring(0, 8)} ${bin.substring(8, 16)} ${bin.substring(16, 24)} ${bin.substring(24)} `;
	}
}