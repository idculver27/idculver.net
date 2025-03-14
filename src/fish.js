window.addEventListener("DOMContentLoaded", () => {
	buildTable();
});

function buildTable() {
	fetch("../data/fish.json")
		.then((response) => response.json())
		.then((json) => {
			json.forEach(fish => {
				if (fish.seasons.includes("Spring")) springTable.appendChild(buildRow(fish));
				if (fish.seasons.includes("Summer")) summerTable.appendChild(buildRow(fish));
				if (fish.seasons.includes("Fall")) fallTable.appendChild(buildRow(fish));
				if (fish.seasons.includes("Winter")) winterTable.appendChild(buildRow(fish));
				if (fish.seasons.includes("Special")) specialTable.appendChild(buildRow(fish, true));
			});
		});
}

function buildRow(fish, special=false) {
	let tr = document.createElement("tr");
	
	// fish
	tr.innerHTML = `<td><img src="images/fish/${fish.name.replace(" ", "_")}.png"> ${fish.name}</td>`;

	// bundle
	if (fish.bundle != "") tr.innerHTML += `<td class="centered"><img src="images/fish/${fish.bundle.replaceAll(" ", "_")}.png" title="${fish.bundle}"></td>`;
	else tr.innerHTML += "<td></td>";
	
	// base price
	tr.innerHTML += `<td style="text-align: right;">${fish.basePrice}g</td>`;

	// locations
	if (special) {
		tr.innerHTML += inLocation(fish.locations, "Mines"); // fix
		tr.innerHTML += inLocation(fish.locations, "Sewer");
		tr.innerHTML += inLocation(fish.locations, "Witch's Swamp");
		tr.innerHTML += inLocation(fish.locations, "Mutant Bug Lair");
		tr.innerHTML += inLocation(fish.locations, "Desert");
		tr.innerHTML += inLocation(fish.locations, "Ginger Island Ocean");
		tr.innerHTML += inLocation(fish.locations, "Ginger Island River");
		tr.innerHTML += inLocation(fish.locations, "Ginger Island Pond");
		tr.innerHTML += inLocation(fish.locations, "Pirate Cove");
		tr.innerHTML += inLocation(fish.locations, "Volcano Caldera");
	} else {
		tr.innerHTML += inLocation(fish.locations, "Ocean");
		tr.innerHTML += inLocation(fish.locations, "Mountain Lake");
		tr.innerHTML += inLocation(fish.locations, "Forest Pond");
		tr.innerHTML += inLocation(fish.locations, "Forest River");
		tr.innerHTML += inLocation(fish.locations, "Town River");
		tr.innerHTML += inLocation(fish.locations, "Forest Waterfalls");
		tr.innerHTML += inLocation(fish.locations, "Secret Woods Pond");
	}
	
	// time and weather
	tr.innerHTML += buildTimeBar(fish.time, fish.weather);
	
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
	if (weather === "") weather = "any";
	let title = "Any weather";
	if (weather === "rain") title = "Rain only";
	else if (weather === "sun") title = "Sun only";
	else if (weather === "sunorwind") title = "Sun or wind only";

	let barLeft = `<td class="barleft ${weather}" title="${title}"></td>`;
	let barMiddle = `<td class="barleft barright ${weather}" title="${title}"></td>`;
	let barRight = `<td class="barright ${weather}" title="${title}"></td>`;
	let barEmpty = "<td></td>";
	let bar = "";

	if (timeRange === "") timeRange = "06-02";
	let rangeStart = timeWrap(parseInt(timeRange.substring(0, 2)) - 6);
	let rangeEnd = timeWrap(parseInt(timeRange.substring(3, 5)) - 7);
	let range2Start = -1;
	let range2End = -1;
	if (timeRange.length === 11) {
		// 2 ranges
		range2Start = timeWrap(parseInt(timeRange.substring(6, 8)) - 6);
		range2End = timeWrap(parseInt(timeRange.substring(9, 11)) - 7);		
	}
	
	for (let i = 0; i < 20; i++) {
		if (i === rangeStart || i === range2Start) bar += barLeft;
		else if ((i > rangeStart && i < rangeEnd) || (i > range2Start && i < range2End)) bar += barMiddle;
		else if (i === rangeEnd || i === range2End) bar += barRight;
		else bar += barEmpty;
	}

	return bar;
}

function timeWrap(hourNumber) {
	if (hourNumber < 0) hourNumber += 24;
	return hourNumber;
}
