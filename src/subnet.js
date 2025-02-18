import IpAddress from "./IpAddress.js";

var ip;

window.addEventListener("DOMContentLoaded", () => {
	ip = new IpAddress(inputAddress.value);

	update();

	// subnet calculator inputs
	inputAddress.addEventListener("input", () => {
		update();
	});
	buttonCidrIncr.addEventListener("click", () => {
		cidrInput.stepUp();
		updateMask();
	});
	buttonCidrDecr.addEventListener("click", () => {
		cidrInput.stepDown();
		updateMask();
	});
	buttonPrevious.addEventListener("click", () => {
		previousSubnet();
	});
	buttonNext.addEventListener("click", () => {
		nextSubnet();
	});
});

function update() {
	// warning
	warning.setAttribute("hidden", true);
	try {
		ip.address = inputAddress.value;
	} catch (e) {
		if (e.message !== "Invalid IP address.") throw e;
		warning.removeAttribute("hidden");
		return;
	}

	// output
	tdIpAddress.textContent = ip.address + "/" + ip.cidr;
	tdNetworkAddress.textContent = ip.networkAddress;
	tdUsableRange.textContent = ip.firstUsableHost + " - " + ip.lastUsableHost;
	tdBroadcastAddress.textContent = ip.broadcastAddress;
	tdTotalAddresses.textContent = ip.totalAddresses;
	if (ip.usableHosts) {
		tdTotalAddresses.textContent += " (" + ip.usableHosts + " usable)";
	}
	tdSubnetMask.textContent = ip.subnetMask;
	tdWildcardMask.textContent = ip.wildcardMask;
	tdSubnetType.textContent = ip.subnetType;
	
	// special cases
	if (ip.cidr > 30) {
		tdUsableRange.textContent = "";
	}
	if (ip.cidr === 32) {
		tdBroadcastAddress.textContent = "";
	}
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
