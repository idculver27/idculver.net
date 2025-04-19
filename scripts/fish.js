window.addEventListener("DOMContentLoaded", () => {
	buildTable();
});

function buildTable() {
	fetch("https://idculver.net/api/fish")
		.then((response) => response.json())
		.then((json) => {
			json.forEach(fish => {
				// determine what season tables this fish should be in
				let in_spring = fish.seasons.spring;
				let in_summer = fish.seasons.spring;
				let in_fall = fish.seasons.fall;
				let in_winter = fish.seasons.winter;
				fish.locations.forEach(location => {
					if (location.ignore_seasons) {
						in_spring, in_summer, in_fall, in_winter = true;
					}
				});

				if (in_spring) springTable.appendChild(buildRow("spring", fish));
				if (in_summer) summerTable.appendChild(buildRow("summer", fish));
				if (in_fall) fallTable.appendChild(buildRow("fall", fish));
				if (in_winter) winterTable.appendChild(buildRow("winter", fish));
			});
		});
}

function buildRow(season, fish) {
	let tr = document.createElement("tr");
	
	// fish
	tr.innerHTML = `<td><img src="images/fish/${fish.fish_name.replace(" ", "_")}.png"> ${fish.fish_name}</td>`;

	// bundle
	if (fish.bundle_name) tr.innerHTML += `<td class="centered"><img src="images/fish/${fish.bundle_name.replaceAll(" ", "_")}.png" title="${fish.bundle_name}"></td>`;
	else tr.innerHTML += "<td></td>";
	
	// base price
	tr.innerHTML += `<td style="text-align: right;">${fish.base_price}g</td>`;

	// locations
	let locationsList = "";
	fish.locations.forEach(location => {
		if (fish.seasons[season] || location.ignore_seasons) {
			locationsList += `${location.location_name}, `;
		}
	});
	tr.innerHTML += `<td>${locationsList.substring(0, locationsList.length - 2)}</td>`;
	
	// time and weather
	tr.innerHTML += buildTimeBar(fish.time_range, fish.weather);
	
	return tr;
}

function inLocation(locations, location) {
	if (location === "Mines") {
		for (let loc of locations) {
			if (loc.startsWith("Mines ")) {
				return `<td class="centered">${loc.substring(6)}</td>`;
			}
		}
		return "<td></td>";
	} else if (locations.includes(location)) {
		return '<td class="centered">X</td>';
	}
	else {
		return "<td></td>";
	}
}

function buildTimeBar(timeRange, weather) {
	// weather indicated by color
	let title = "Any weather";
	let weatherClass = "any";
	if (weather !== "Any") {
		title = weather + " only";
		weatherClass = weather.replaceAll(" ", "").toLowerCase();
	}

	let cellLeft = `<td class="barleft ${weatherClass}" title="${title}"></td>`;
	let cellMiddle = `<td class="barleft barright ${weatherClass}" title="${title}"></td>`;
	let cellRight = `<td class="barright ${weatherClass}" title="${title}"></td>`;
	let cellEmpty = "<td></td>";
	let timeBar = "";

	// time range
	if (!timeRange) timeRange = "06-02";
	let range1Start = timeIndex(timeRange.substring(0, 2));
	let range1End = timeIndex(timeRange.substring(3, 5)) - 1;
	let range2Start = -1;
	let range2End = -1;
	// 2 ranges
	if (timeRange.length === 11) {
		range2Start = timeIndex(timeRange.substring(6, 8));
		range2End = timeIndex(timeRange.substring(9, 11)) - 1;
	}

	for (let i = 0; i < 20; i++) {
		if (i === range1Start || i === range2Start) timeBar += cellLeft;
		else if ((i > range1Start && i < range1End) || (i > range2Start && i < range2End)) timeBar += cellMiddle;
		else if (i === range1End || i === range2End) timeBar += cellRight;
		else timeBar += cellEmpty;
	}

	return timeBar;
}

// convert clock hour (06-02) to time int (0-20)
function timeIndex(clockHour) {
	let timeInt = parseInt(clockHour) - 6;
	if (timeInt < 0) timeInt += 24;
	return timeInt;
}
