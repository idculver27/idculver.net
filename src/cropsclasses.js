export class Crop {
    constructor(name, description, seedCost, baseGrowth, basePrice) {
        this.name = name;
        this.description = description;
        this.seedCost = seedCost;
        this.baseGrowth = baseGrowth;
        this.basePrice = basePrice;
    }

    buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro) {
        let growth = this.#calcGrowth(speedGro, agriculturalist);
        let yieldSeasonal = this.#calcYieldSeasonal(farmingLevel, fertilizer, growth, tiller);
        let yieldDaily = yieldSeasonal / 28;
        
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <img src="images/crops/${this.name.replace(" ", "_")}_Seeds.png">
                <img src="images/crops/${this.name.replace(" ", "_")}.png">
            </td>
            <td>${this.name}</td>
            <td style="max-width: 300px;">${this.description}</td>
            <td style="text-align: right;">${this.seedCost}g</td>
            <td style="text-align: right;">${growth} days</td>
            <td style="text-align: right;">${yieldDaily}g</td>
            <td style="text-align: right;">${yieldSeasonal}g</td>
        `;
        return tr;
    }

    #calcGrowth(speedGro, agriculturalist) {
        return 0;
    }

    #calcYieldSeasonal(farmingLevel, fertilizer, growth, tiller) {
        return 0;
    }
}

export class RegrowingCrop extends Crop {
    constructor(name, description, seedCost, baseGrowth, basePrice, regrowth) {
        super(name, description, seedCost, baseGrowth, basePrice);
        this.regowth = regrowth;
    }

    #calcYieldSeasonal(farmingLevel, fertilizer, growth, tiller, regrowth) {
        return 0;
    }
}