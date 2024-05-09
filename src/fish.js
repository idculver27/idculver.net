window.addEventListener("DOMContentLoaded", () => {
    for(let input of [selectLocation,selectSeason,selectWeather,selectBundle]) {
        input.addEventListener("input", () => {
            filter();
        });
    }
});

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
            if(!tr.cells[3].textContent.includes(location)) {
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
            if(tr.cells[4].textContent == "Any") continue;
            if(!tr.cells[4].textContent.includes(season)) {
                tr.setAttribute("hidden",true);
            }
        }
    }

    // weather
    const weather = selectWeather.value;
    if(weather != "Any") {
        for(let tr of fishTable.rows) {
            // skip headers
            if(tr.cells[1].textContent == "Name") continue;
            // hide non-matching seasons
            if(tr.cells[5].textContent == "Any") continue;
            if(!tr.cells[5].textContent.includes(weather)) {
                tr.setAttribute("hidden",true);
            }
        }
    }

    // bundle
    const bundle = selectBundle.value;
    if(bundle != "Any") {
        for(let tr of fishTable.rows) {
            // skip headers
            if(tr.children[1].textContent == "Name") continue;
            // hide non-matching bundles
            if(!tr.children[7].textContent.includes(bundle)) {
                tr.setAttribute("hidden",true);
            }
        }
    }
}