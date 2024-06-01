window.addEventListener("DOMContentLoaded", () => {
    buildTable();

    for(let input of [selectLocation,selectSeason,onlyBundles]) {
        input.addEventListener("input", () => {
            filter();
        });
    }
});

function buildTable() {
    fetch("../data/fish.json")
        .then((response) => response.json())
        .then((json) => {
            json.forEach(fish => {
                let tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><img src="images/fish/${fish.name.replace(" ","_")}.png"></td>
                    <td>${fish.name}</td>
                    <td style="max-width: 300px;">${fish.description}</td>
                    <td class="right">
                        ${fish.price}g<br>
                        <img src="images/fish/Silver_Quality.png"> ${Math.floor(fish.price*1.25)}g<br>
                        <img src="images/fish/Gold_Quality.png"> ${Math.floor(fish.price*1.5)}g<br>
                        <img src="images/fish/Iridium_Quality.png"> ${fish.price*2}g
                    </td>
                    <td class="right">
                        ${Math.floor(fish.price*1.25)}g<br>
                        <img src="images/fish/Silver_Quality.png"> ${Math.floor(Math.floor(fish.price*1.25)*1.25)}g<br>
                        <img src="images/fish/Gold_Quality.png"> ${Math.floor(Math.floor(fish.price*1.5)*1.25)}g<br>
                        <img src="images/fish/Iridium_Quality.png"> ${Math.floor(fish.price*2*1.25)}g
                    </td>
                    <td class="right">
                        ${Math.floor(fish.price*1.5)}g<br>
                        <img src="images/fish/Silver_Quality.png"> ${Math.floor(Math.floor(fish.price*1.25)*1.5)}g<br>
                        <img src="images/fish/Gold_Quality.png"> ${Math.floor(Math.floor(fish.price*1.5)*1.5)}g<br>
                        <img src="images/fish/Iridium_Quality.png"> ${Math.floor(fish.price*2*1.5)}g
                    </td>
                    <td>${fish.locations.join("<br>")}</td>
                    <td style="max-width: 180px;">${fish.seasons.join("<br>")}</td>
                    <td>${fish.weathers.join("<br>")}</td>
                    <td>${fish.time}</td>
                    <td>${fish.difficulty}</td>
                    <td>${fish.behavior}</td>
                    <td>${fish.xp}</td>
                    <td>${fish.uses.join("<br>")}</td>
                `
                fishTable.appendChild(tr);
            });
        });
}

function filter() {
    // unhide all rows
    for(let tr of fishTable.rows) {
        tr.removeAttribute("hidden");
    }

    // location // TODO: fix rivers
    const location = selectLocation.value;
    if(location != "Any") {
        for(let tr of fishTable.rows) {
            // skip headers
            if(tr.cells[1].textContent == "Name") continue;
            // hide non-matching locations
            if(!tr.cells[6].textContent.includes(location)) {
                tr.setAttribute("hidden",true);
            }
        }
    }

    // season
    const season = selectSeason.value;
    if(season != "Any") {
        for(let tr of fishTable.rows) {
            // skip headers
            if(tr.cells[1].textContent == "Name") continue;
            // hide non-matching seasons
            if(tr.cells[7].textContent == "Any") continue;
            if(!tr.cells[7].textContent.includes(season)) {
                tr.setAttribute("hidden",true);
            }
        }
    }

    // bundle
    if(onlyBundles.checked) {
        for(let tr of fishTable.rows) {
            // skip headers
            if(tr.children[1].textContent == "Name") continue;
            // hide non-matching bundles
            if(!tr.children[13].textContent.includes("Bundle")) {
                tr.setAttribute("hidden",true);
            }
        }
    }
}