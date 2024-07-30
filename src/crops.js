window.addEventListener("DOMContentLoaded", () => {
    buildTables();

    for(let input of [fertilizerRadio, speedGroRadio]) {
        input.addEventListener("input", () => {
            buildTables();
        });
    }
});

function buildTables() {
    fetch("../data/crops.json")
        .then((response) => response.json())
        .then((json) => {
            json.spring.forEach(crop => {
                // math
                var growth = calcGrowth(crop.growth, speedGroRadio.checked);
                var yieldDaily = calcYieldDaily(crop, fertilizerRadio.checked, growth);
                var yieldSeasonal = calcYieldSeasonal(crop, fertilizerRadio.checked, growth);

                // build row
                let tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>
                        <img src="images/crops/${crop.name.replace(" ", "_")}_Seeds.png">
                        <img src="images/crops/${crop.name.replace(" ", "_")}.png">
                    </td>
                    <td>${crop.name}</td>
                    <td style="max-width: 400px;">${crop.description}</td>
                    <td style="text-align: right;">${crop.cost}g</td>
                    <td style="text-align: right;">${growth} days</td>
                    <td style="text-align: right;">${yieldDaily}g</td>
                    <td style="text-align: right;">${yieldSeasonal}g</td>
                `;
                springCropsTable.appendChild(tr);
            });
        });
}

function calcGrowth(baseGrowth, speedGro) {
    return 0
}

function calcYieldDaily(crop, farmingLevel, fertilizer, growth, tiller) {
    return 0
}

function calcYieldSeasonal(crop, farmingLevel, fertilizer, growth, tiller) {
    return 0
}