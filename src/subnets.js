window.addEventListener("DOMContentLoaded", () => {
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
		clampCidr();
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

	// supernet calculator inputs
});

function update() {
	warnAddress.setAttribute("hidden", true);
	const host = dec2bin(addressInput.value);
	if (!host) {
		warnAddress.removeAttribute("hidden");
		return;
	}

	// calculations
	const cidr = cidrInput.value;
	const networkAddress = host.substring(0, cidr) + "0".repeat(32 - cidr);
	const firstUsable = networkAddress.substring(0, 31) + "1";
	const broadcast = networkAddress.substring(0, cidr) + "1".repeat(32 - cidr);
	const lastUsable = broadcast.substring(0, 31) + "0";
	const subnetMask = dec2bin(maskInput.value);
	const wildcardMask = "0".repeat(cidr) + "1".repeat(32 - cidr);
	const totalAddresses = 2 ** (32 - cidr);
	const usableHosts = totalAddresses - 2;

	// output
	tdNetwDec.textContent = bin2dec(networkAddress);
	tdNetwBin.textContent = spaceOutBin(networkAddress);
	tdFirstUsableDec.textContent = bin2dec(firstUsable);
	tdFirstUsableBin.textContent = spaceOutBin(firstUsable);
	tdLastUsableDec.textContent = bin2dec(lastUsable);
	tdLastUsableBin.textContent = spaceOutBin(lastUsable);
	tdBroadcastDec.textContent = bin2dec(broadcast);
	tdBroadcastBin.textContent = spaceOutBin(broadcast);
	tdCidr.textContent = "/" + cidr;
	tdSubnetMaskDec.textContent = bin2dec(subnetMask);
	tdSubnetMaskBin.textContent = spaceOutBin(subnetMask);
	tdWildcardMaskDec.textContent = bin2dec(wildcardMask);
	tdWildcardMaskBin.textContent = spaceOutBin(wildcardMask);
	tdTotalAddresses.textContent = totalAddresses;
	tdUsableHosts.textContent = usableHosts;

	// special cases
	if (cidr > 30) {
		tdFirstUsableDec.textContent = "";
		tdFirstUsableBin.textContent = "";
		tdLastUsableDec.textContent = "";
		tdLastUsableBin.textContent = "";
		tdUsableHosts.textContent = 0;
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
	let maskBin = "1".repeat(cidrInput.value) + "0".repeat(32 - cidrInput.value);
	maskInput.value = bin2dec(maskBin);
	update();
}

function updateCidr() {
	warnMask.setAttribute("hidden", true);

	let mask = dec2bin(inMask.value);
	if (!mask) {
		warnMask.removeAttribute("hidden");
		return;
	}

	let i = 0;
	while (i < 32) {
		if (mask.charAt(i) != "1") break;
		i++;
	}
	let count1 = i;

	i = 31;
	while (i > -1) {
		if (mask.charAt(i) != "0") break;
		i--;
	}
	let count0 = 31 - i;

	console.log(count1 + " " + count0);

	if (count1 + count0 != 32) {
		warnMask.removeAttribute("hidden");
		return;
	}

	cidrInput.value = count1;

	update();
}

function previousSubnet() {
	const currentNetworkAddress = dec2bin(addressInput.value);
	const cidr = cidrInput.value;
	let networkBits = currentNetworkAddress.substring(0, cidr);
	if (!networkBits.includes("1")) return; // already lowest
	networkBits = (parseInt(networkBits, 2) - 1).toString(2); // decrement network bits 
	addressInput.value = bin2dec(networkBits + currentNetworkAddress.substring(cidr));
	update();
}

function nextSubnet() {
	const currentNetworkAddress = dec2bin(addressInput.value);
	const cidr = cidrInput.value;
	let networkBits = currentNetworkAddress.substring(0, cidr);
	if (!networkBits.includes("0")) return; // already highest
	networkBits = (parseInt(networkBits, 2) + 1).toString(2); // increment network bits
	addressInput.value = bin2dec(networkBits + currentNetworkAddress.substring(cidr));
	update();
}

function dec2bin(addressStr) {
	let bin = ""
	addressStr.split(".").forEach(octetStr => {
		let octet = parseInt(octetStr);
		if (octet < 0 || octet > 255) return false;
		if (isNaN(octet)) octet = 0;
		bin += octet.toString(2).padStart(8, "0");
	});
	if (bin.length != 32) return false;
	return bin;
}

function bin2dec(bin) {
	let dec = parseInt(bin.substring(0, 8), 2);
	dec += "." + parseInt(bin.substring(8, 16), 2);
	dec += "." + parseInt(bin.substring(16, 24), 2);
	dec += "." + parseInt(bin.substring(24), 2);
	return dec;
}

function spaceOutBin(bin) {
	let out = bin.substring(0, 8);
	out += " " + bin.substring(8, 16);
	out += " " + bin.substring(16, 24);
	out += " " + bin.substring(24);
	return out;
}

function clampCidr() {
	if (inCIDR.value < 0) {
		inCIDR.value = 0;
	} else if (inCIDR.value > 32) {
		inCIDR.value = 32;
	}
}