window.addEventListener("DOMContentLoaded", () => {
    buildTable();
});

function buildTable() {
    fetch("../data/fish.json")
        .then((response) => response.json())
        .then((json) => {
            json.forEach(fish => {
                if (fish.seasons.includes("Spring")) {
                    springTable.appendChild(buildRow(fish));
                } else if (fish.seasons.includes("Summer")) {
                    summerTable.appendChild(buildRow(fish));
                } else if (fish.seasons.includes("Fall")) {
                    fallTable.appendChild(buildRow(fish));
                } else if (fish.seasons.includes("Winter")) {
                    winterTable.appendChild(buildRow(fish));
                } else if (fish.seasons.includes("Special")) {
                    specialTable.appendChild(buildRow(fish, true));
                }
            });
        });
}

function buildRow(fish, special=false) {
    let tr = document.createElement("tr");
    
    // fish
    tr.innerHTML = `<td><img src="images/fish/${fish.name.replace(" ", "_")}.png"> ${fish.name}</td>`;

    // bundle
    if (fish.bundle != "") tr.innerHTML += `<td style="text-align: center;"><img src="images/fish/${fish.bundle.replaceAll(" ", "_")}.png"></td>`;
    else tr.innerHTML += "<td></td>";
    
    // base price
    tr.innerHTML += `<td style="text-align: right;">${fish.basePrice}g</td>`;

    // locations
    if (special) {
        tr.innerHTML += inLocation(fish.locations, "Ginger Island Ocean");
        tr.innerHTML += inLocation(fish.locations, "Ginger Island River");
        tr.innerHTML += inLocation(fish.locations, "Ginger Island Pond");
        tr.innerHTML += inLocation(fish.locations, "Mines"); // fix
        tr.innerHTML += inLocation(fish.locations, "Sewer");
        tr.innerHTML += inLocation(fish.locations, "Witch's Swamp");
        tr.innerHTML += inLocation(fish.locations, "Volcano Caldera");
        tr.innerHTML += inLocation(fish.locations, "Desert");
        tr.innerHTML += inLocation(fish.locations, "Mutant Bug Lair");
        tr.innerHTML += inLocation(fish.locations, "Pirate Cove");
    } else {
        tr.innerHTML += inLocation(fish.locations, "Ocean");
        tr.innerHTML += inLocation(fish.locations, "Forest River");
        tr.innerHTML += inLocation(fish.locations, "Town River");
        tr.innerHTML += inLocation(fish.locations, "Forest Pond");
        tr.innerHTML += inLocation(fish.locations, "Mountain Lake");
        tr.innerHTML += inLocation(fish.locations, "Secret Woods Pond");
        tr.innerHTML += inLocation(fish.locations, "Forest Waterfalls");
    }
    
    // time
    if (fish.time === "") {
        // fill whole row
    } else if (fish.time.length === 5) {
        // one bar
    } else if (fish.time.length === 11) {
        // two bars
    }
    if (fish.weather != "") {
        // add weather
    }
    
    return tr;
}

function inLocation(locations, location) {
    if (locations.includes(location)) return '<td style="text-align: center;">X</td>';
    else return "<td></td>";
}