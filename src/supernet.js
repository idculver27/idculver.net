import IpAddress from "./IpAddress.js";

var ips;

window.addEventListener("DOMContentLoaded", () => {
	ips = [new IpAddress("192.168.0.0/22")];
	update();

	// input
	inputAddresses.addEventListener("input", () => {
		update();
	});
	checkboxStrict.addEventListener("input", () => {
		update();
	});
});

function update() {
	try {
		warning.setAttribute("hidden", true);
		ips = parseAddresses();
	} catch (e) {
		if (e.message !== "Error while parsing IP address.") throw e;
		warning.removeAttribute("hidden");
		return;
	}

	// clear output
	outputAddresses.textContent = "";
	Array.from(document.getElementsByTagName("tr")).forEach((tr) => {
		while (tr.childElementCount > 1) {
			tr.removeChild(tr.lastChild);
		}
	});

	// output
	ips.forEach((ip) => {
		outputAddresses.textContent += `${ip.networkAddress}/${ip.cidr}\n`;

		trNetworkAddress.innerHTML += `<td>${ip.networkAddress}/${ip.cidr}</td>`;
		trUsableRange.innerHTML += ip.cidr === 32 ? `<td>${ip.address}</td>` : `<td>${ip.firstUsableHost} - ${ip.lastUsableHost}</td>`;
		trBroadcastAddress.innerHTML += ip.cidr <= 30 ? `<td>${ip.broadcastAddress}</td>` : "<td></td>";
		trTotalAddresses.innerHTML += `<td>${ip.totalAddresses}` + (ip.usableHosts ? ` (${ip.usableHosts} usable)</td>` : "</td>");
		trSubnetMask.innerHTML += `<td>${ip.subnetMask}</td>`;
		trWildcardMask.innerHTML += `<td>${ip.wildcardMask}</td>`;
		trSubnetType.innerHTML += `<td>${ip.subnetType.toString().replaceAll(",", "<br>")}</td>`;
	});
}

function parseAddresses() {
	// build list of IpAddresses
	let inputIps = [];
	inputAddresses.value.trim().split("\n").forEach((addressString) => {
		inputIps.push(new IpAddress(addressString));
	});

	// loose mode
	if (!checkboxStrict.checked) {
		// find first and last addresses
		let first = parseInt(IpAddress.dec2bin("255.255.255.255"), 2);
		let last = 0;
		inputIps.forEach((ip) => {
			let networkAddressInt = parseInt(IpAddress.dec2bin(ip.networkAddress), 2);
			let broadcastAddressInt = parseInt(IpAddress.dec2bin(ip.broadcastAddress), 2);
			if (networkAddressInt < first) first = networkAddressInt;
			if (broadcastAddressInt > last) last = broadcastAddressInt;
		});

		// find common prefix
		first = first.toString(2).padStart(32, "0");
		last = last.toString(2).padStart(32, "0");
		let summaryCidr = 0;
		while (summaryCidr < 32) {
			if (first.charAt(summaryCidr) !== last.charAt(summaryCidr)) break;
			summaryCidr++;
		}

		return [new IpAddress(`${IpAddress.bin2dec(first)}/${summaryCidr}`)];
	}

	// strict mode
	else {
		// build list of ranges
		let ranges = [];
		inputIps.forEach((ip) => {
			let rangeStart = parseInt(IpAddress.dec2bin(ip.networkAddress), 2);
			let rangeEnd = parseInt(IpAddress.dec2bin(ip.broadcastAddress), 2);
			ranges.push([rangeStart, rangeEnd]);
		});

		// sort ranges
		ranges.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
		
		// merge contiguous/overlapping ranges
		let rangesMerged = [];
		ranges.forEach((range) => {
			if (rangesMerged.length === 0 || rangesMerged[rangesMerged.length - 1][1] < range[0] - 1) {
				rangesMerged.push(range);
			} else {
				rangesMerged[rangesMerged.length - 1][1] = Math.max(rangesMerged[rangesMerged.length - 1][1], range[1]);
			}
		});

		// convert ranges to IpAddresses
		// TODO

		return [new IpAddress("192.168.0.1/24")];
	}

	// build ranges like in the subnettype method
	// for each range, do the non-strict mode method
}