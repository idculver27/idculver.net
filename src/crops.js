import { Crop, RegrowingCrop } from "./cropsclasses.js";

window.addEventListener("DOMContentLoaded", () => {
    buildTables();

    for(let input of [levelInput, tillerInput, agriculturalistInput, fertilizerInput]) {
        input.addEventListener("input", () => {
            buildTables();
        });
    }
});

function buildTables() {
    // farming level
    let farmingLevel = Math.floor(levelInput.value);
    if (farmingLevel < 0) farmingLevel = 0;
    else if (farmingLevel > 10) farmingLevel = 10;
    levelInput.value = farmingLevel;

    // tiller profession
    let tiller = false;
    if (farmingLevel < 5) tillerInput.setAttribute("disabled", "disabled");
    else {
        tillerInput.removeAttribute("disabled");
        tiller = tillerInput.checked;
    }

    // agriculturalist profession
    let agriculturalist = false;
    if (farmingLevel === 10 && tiller) {
        agriculturalistInput.removeAttribute("disabled");
        agriculturalist = agriculturalistInput.checked;
    }
    else agriculturalistInput.setAttribute("disabled", "disabled");

    // fertilizer
    let fertilizer = 0;
    let speedGro = 0;
    if (fertilizerInput.value.substring(0, 1) === "f") fertilizer = fertilizerInput.value.substring(1);
    else if (fertilizerInput.value.substring(0, 1) === "s") speedGro = fertilizerInput.value.substring(1);
    
    //console.log(`farmingLevel=${farmingLevel}\ttiller=${tiller}\tagriculturalist=${agriculturalist}\tfertilizer=${fertilizer}\tspeedGro=${speedGro}`);
    
    let springCrops = [
        new Crop("Blue Jazz", "The flower grows in a sphere to invite as many butterflies as possible.", 30, 7, 50),
        new Crop("Carrot", "A fast-growing, colorful tuber that makes for a great snack.", 0, 3, 35),
        //Cauliflower
        //Coffee Bean
        new Crop("Garlic", "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.", 40, 4, 60),
        new RegrowingCrop("Green Bean", "A juicy little bean with a cool, crisp snap.", 60, 10, 40, 3),
        new Crop("Kale", "The waxy leaves are great in soups and stir fries.", 70, 6, 110),
        new Crop("Parsnip", "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.", 20, 4, 35),
        //Potato
        new Crop("Rhubarb", "The stalks are extremely tart, but make a great dessert when sweetened.", 100, 13, 220),
        //Strawberry
        new Crop("Tulip", "The most popular spring flower. Has a very faint sweet smell.", 20, 6, 30)
        //Unmilled Rice
    ];
    let summerCrops = [
        //Blueberry
        new RegrowingCrop("Corn", "One of the most popular grains. The sweet, fresh cobs are a summer favorite.", 150, 14, 50, 4),
        new RegrowingCrop("Hops", "A bitter, tangy flower used to flavor beer.", 60, 11, 25, 1),
        //Hot Pepper
        //Melon
        new Crop("Poppy", "In addition to its colorful flower, the Poppy has culinary and medicinal uses.", 100, 7, 140),
        new Crop("Radish", "A crisp and refreshing root vegetable with hints of pepper when eaten raw.", 40, 6, 90),
        new Crop("Red Cabbage", "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.", 100, 9, 260),
        new Crop("Starfruit", "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone.", 400, 13, 750),
        new Crop("Summer Spangle", "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.", 50, 8, 90),
        new RegrowingCrop("Summer Squash", "A curved yellow squash that is harvested while immature, and still tender.", 0, 6, 45, 3),
        //Sunflower
        //Tomato
        new Crop("Wheat", "One of the most widely cultivated grains. Makes a great flour for breads and cakes.", 10, 4, 25)
    ];
    let fallCrops = [
        new Crop("Amaranth", "A purple grain cultivated by an ancient civilization.", 70, 7, 150),
        new Crop("Artichoke", "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.", 30, 8, 160),
        new Crop("Beet", "A sweet and earthy root vegetable. As a bonus, the leaves make a great salad.", 20, 6, 100),
        new Crop("Bok Choy", "The leafy greens and fibrous stalks are healthy and delicious.", 50, 4, 80),
        new RegrowingCrop("Broccoli", "The flowering head of a broccoli plant. The tiny buds give it a unique texture.", 0, 8, 70, 4),
        //Corn
        //Cranberries
        //Eggplant
        new Crop("Fairy Rose", "An old folk legend suggests that the sweet smell of this flower attracts fairies.", 200, 12, 290),
        new RegrowingCrop("Grape", "A sweet cluster of fruit.", 60, 10, 80, 3),
        //Pumpkin
        //Sunflower
        //Wheat
        new Crop("Yam", "A starchy tuber with a lot of culinary versatility.", 60, 10, 160)
    ];
    let winterCrops = [
        //Powdermelon
    ];
    let specialCrops = [
        //Ancient Fruit
        //Cactus Fruit
        //Fiber
        //Pineapple
        //Taro Root
        //Sweet Gem Berry
        //Tea Leaves
    ];

    for (let crop of springCrops) {
        springCropsTable.appendChild(crop.buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro));
    }
    for (let crop of summerCrops) {
        summerCropsTable.appendChild(crop.buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro));
    }
    for (let crop of fallCrops) {
        fallCropsTable.appendChild(crop.buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro));
    }
    for (let crop of winterCrops) {
        winterCropsTable.appendChild(crop.buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro));
    }
    for (let crop of specialCrops) {
        specialCropsTable.appendChild(crop.buildRow(farmingLevel, tiller, agriculturalist, fertilizer, speedGro));
    }
}