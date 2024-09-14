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
		addressesList = parseAddresses();
		if (!addressesList) {
			warnAddresses.removeAttribute("hidden");
		}

		// calculations

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
	let addresses = addressesInput.value.trim().split("\n");
	let max = 0;
	console.log(parseInt("11111111111111111111111111111111", 2));

	// find first address
	let min = 4294967295;

	for (let address of addresses) {
		if (dec2bin(address)) pass;

	}

	console.log(rawList);

	return null;
}