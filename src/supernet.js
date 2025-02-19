import IpAddress from "./IpAddress.js";

var ip;

window.addEventListener("DOMContentLoaded", () => {
	ip = new IpAddress(addressInput.value, cidrInput.value);

	update();

	// mode buttons
	subnetModeButton.addEventListener("click", () => {
		activateSubnetMode();
	});
	supernetModeButton.addEventListener("click", () => {
		activateSupernetMode();
	});

	// subnet calculator inputs
	addressInput.addEventListener("input", () => {
		update();
	});
	cidrInput.addEventListener("input", () => {
		updateMask();
	});
	maskInput.addEventListener("input", () => {
		updateCidr();
	});
	incrementCidrButton.addEventListener("click", () => {
		cidrInput.stepUp();
		updateMask();
	});
	decrementCidrButton.addEventListener("click", () => {
		cidrInput.stepDown();
		updateMask();
	});
	previousButton.addEventListener("click", () => {
		previousSubnet();
	});
	nextButton.addEventListener("click", () => {
		nextSubnet();
	});

	// supernet calculator input
	addressesInput.addEventListener("input", () => {
		update();
	});
});

function update() {
	// subnet
	if (subnetModeButton.className === "mode-activated") {
		// warning
		warnAddress.setAttribute("hidden", true);
		try {
			ip.address = addressInput.value;
			ip.cidr = cidrInput.value;
		} catch (e) {
			if (e.message !== "Invalid IP address.") throw e;
			warnAddress.removeAttribute("hidden");
			return;
		}
	}
	// supernet
	else if (supernetModeButton.className === "mode-activated") {
		// warning
		warnAddresses.setAttribute("hidden", true);
		try {
			ip = parseAddresses();
		} catch (e) {
			if (e.message in ["Invalid IP address.", "Invalid CIDR.", "Invalid subnet mask."]) throw e;
			warnAddresses.removeAttribute("hidden");
			return;
		}
	}

	// output
	tdNetworkAddressDec.textContent = IpAddress.bin2dec(ip.networkAddress);
	tdNetworkAddressBin.textContent = IpAddress.spaceOutBin(ip.networkAddress);
	tdFirstUsableHostDec.textContent = IpAddress.bin2dec(ip.firstUsableHost);
	tdFirstUsableHostBin.textContent = IpAddress.spaceOutBin(ip.firstUsableHost);
	tdLastUsableHostDec.textContent = IpAddress.bin2dec(ip.lastUsableHost);
	tdLastUsableHostBin.textContent = IpAddress.spaceOutBin(ip.lastUsableHost);
	tdBroadcastAddressDec.textContent = IpAddress.bin2dec(ip.broadcastAddress);
	tdBroadcastAddressBin.textContent = IpAddress.spaceOutBin(ip.broadcastAddress);
	tdCidr.textContent = "/" + ip.cidr;
	tdSubnetMaskDec.textContent = IpAddress.bin2dec(ip.subnetMask);
	tdSubnetMaskBin.textContent = IpAddress.spaceOutBin(ip.subnetMask);
	tdWildcardMaskDec.textContent = IpAddress.bin2dec(ip.wildcardMask);
	tdWildcardMaskBin.textContent = IpAddress.spaceOutBin(ip.wildcardMask);
	tdTotalAddresses.textContent = ip.totalAddresses;
	tdUsableHosts.textContent = ip.usableHosts;

	// special cases
	if (ip.cidr > 30) {
		tdFirstUsableHostDec.textContent = "";
		tdFirstUsableHostBin.textContent = "";
		tdLastUsableHostDec.textContent = "";
		tdLastUsableHostBin.textContent = "";
	}
	if (ip.cidr === 32) {
		tdBroadcastAddressDec.textContent = "";
		tdBroadcastAddressBin.textContent = "";
	}
}

function activateSubnetMode() {
	if (subnetModeButton.className === "mode-activated") return;
	subnetModeButton.className = "mode-activated";
	supernetModeButton.className = "";
	subnetModeInputs.removeAttribute("hidden");
	supernetModeInputs.setAttribute("hidden", true);
	update();
}

function activateSupernetMode() {
	if (supernetModeButton.className === "mode-activated") return;
	subnetModeButton.className = "";
	supernetModeButton.className = "mode-activated";
	subnetModeInputs.setAttribute("hidden", true);
	supernetModeInputs.removeAttribute("hidden");
	update();
}

function updateMask() {
	// clamp
	if (cidrInput.value < 0) {
		cidrInput.value = 0;
	} else if (cidrInput.value > 32) {
		cidrInput.value = 32;
	}
	ip.cidr = cidrInput.value;
	maskInput.value = IpAddress.bin2dec(ip.subnetMask);
	update();
}

function updateCidr() {
	warnMask.setAttribute("hidden", true);
	try {
		ip.subnetMask = maskInput.value;
	} catch (e) {
		if (e.message !== "Invalid subnet mask.") throw e;
		warnMask.removeAttribute("hidden");
		return;
	}
	cidrInput.value = ip.cidr;
	update();
}

function previousSubnet() {
	let networkBits = ip.address.substring(0, ip.cidr);
	if (!networkBits.includes("1")) return; // already lowest
	networkBits = (parseInt(networkBits, 2) - 1).toString(2).padStart(ip.cidr, "0"); // decrement network bits
	addressInput.value = IpAddress.bin2dec(networkBits + ip.address.substring(ip.cidr));
	update();
}

function nextSubnet() {
	let networkBits = ip.address.substring(0, ip.cidr);
	if (!networkBits.includes("0")) return; // already highest
	networkBits = (parseInt(networkBits, 2) + 1).toString(2).padStart(ip.cidr, "0"); // increment network bits
	addressInput.value = IpAddress.bin2dec(networkBits + ip.address.substring(ip.cidr));
	update();
}

function parseAddresses() {
	// build list of IpAddresses
	let addressStrings = addressesInput.value.trim().split("\n");
	let addresses = [];
	for (let addressString of addressStrings) {
		let address;
		let cidr = 0;
		let subnetMask;
		let split;

		if (addressString.includes("/")) { // cidr
			split = addressString.indexOf("/");
			cidr = parseInt(addressString.substring(split + 1));
		} else if (addressString.includes(" ")) { // subnet mask
			split = addressString.indexOf(" ");
			subnetMask = addressString.substring(split);
		} else {
			throw new Error("Invalid IP address.");
		}

		address = addressString.substring(0, split);
		let newIp = new IpAddress(address, cidr);
		if (subnetMask) newIp.subnetMask = subnetMask;

		addresses.push(newIp);
	}

	// find first and last addresses
	let first = 2 ** 32 - 1;
	let last = 0;
	for (let ip of addresses) {
		if (parseInt(ip.networkAddress, 2) < first) first = parseInt(ip.networkAddress, 2);
		if (parseInt(ip.broadcastAddress, 2) > last) last = parseInt(ip.broadcastAddress, 2);
	}
	first = first.toString(2).padStart(32, "0");
	last = last.toString(2).padStart(32, "0");

	// find common prefix
	let summaryCidr = 0;
	while (summaryCidr < 32) {
		if (first.charAt(summaryCidr) !== last.charAt(summaryCidr)) break;
		summaryCidr++;
	}

	return new IpAddress(IpAddress.bin2dec(first), summaryCidr);
}