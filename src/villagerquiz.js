var quizResults = {
    // biomes
    desert: 0,
    jungle: 0,
    plains: 0,
    savanna: 0,
    snowy: 0,
    swamp: 0,
    taiga: 0,
    // professions
    armorer: 0,
    butcher: 0,
    cartographer: 0,
    cleric: 0,
    farmer: 0,
    fisherman: 0,
    fletcher: 0,
    leatherworker: 0,
    librarian: 0,
    nitwit: 0,
    stone_mason: 0,
    shepherd: 0,
    toolsmith: 0,
    unemployed: 0,
    weaponsmith: 0
}

var bank;
var imgs;
fetch("../villagerquiz.json")
    .then((response) => response.json())
    .then((json) => {
        bank = json.bank;
        imgs = json.imgs;
    });

var qIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
    btnStart.addEventListener("click", () => {
        displayQuestion();
    });
});

function displayQuestion() {
    divMain.innerHTML = "";

    let p = newElement("p");
    p.textContent = bank[qIndex].text;
    divMain.appendChild(p);

    let btn;
    for(let answer of ["a","b","c","d"]) {
        btn = newElement("button");
        btn.textContent = bank[qIndex][answer].text;
        btn.addEventListener("click", () => {
            // add score to results
            for(let key of bank[qIndex][answer].score) {
                quizResults[key]++;
            }

            // next question
            qIndex++;
            if(qIndex < bank.length) {
                displayQuestion();
            } else {
                finalResults();
            }
        });
        divMain.appendChild(btn);
    }
}

function finalResults() {
    divMain.innerHTML = "";

    let biome = findWinner(["desert","jungle","plains","savanna","snowy","swamp","taiga"]);
    let profession = findWinner(["armorer","butcher","cartographer","cleric","farmer","fisherman","fletcher","leatherworker","librarian","nitwit","stone_mason","shepherd","toolsmith","unemployed","weaponsmith"]);

    let h2 = newElement("h2");
    h2.textContent = textFormat(biome) + " " + textFormat(profession);
    divMain.appendChild(h2);

    let img = newElement("img");
    img.src = imgs[biome][profession];
    divMain.appendChild(img);
}

function findWinner(keys) {
    // find top score
    let maxScore = 0;
    for(let key of keys) {
        if(quizResults[key] > maxScore) {
            maxScore = quizResults[key];
        }
    }

    // find all keys tied for first place
    let firstPlaceKeys = [];
    for(let key of keys) {
        if(quizResults[key] == maxScore) {
            firstPlaceKeys.push(key);
        }
    }

    // randomly select one of the top keys
    return firstPlaceKeys[Math.floor(Math.random() * firstPlaceKeys.length)];
}

function newElement(childType, className="") {
    let child = document.createElement(childType);
    if(className) {
        child.className = className;
    }
    return child;
}

function textFormat(raw) {
    let words = raw.split("_");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}