var quizResults = {
    // biomes
    b_desert: 0,
    b_jungle: 0,
    b_plains: 0,
    b_savanna: 0,
    b_snowy: 0,
    b_swamp: 0,
    b_taiga: 0,
    // professions
    p_armorer: 0,
    p_butcher: 0,
    p_cartographer: 0,
    p_cleric: 0,
    p_farmer: 0,
    p_fisherman: 0,
    p_fletcher: 0,
    p_leatherworker: 0,
    p_librarian: 0,
    p_nitwit: 0,
    p_stone_mason: 0,
    p_shepherd: 0,
    p_toolsmith: 0,
    p_unemployed: 0,
    p_weaponsmith: 0
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
    startButton.addEventListener("click", () => {
        startDiv.setAttribute("hidden",true);
        questionDiv.removeAttribute("hidden");
        displayQuestion();
    });
    testButton.addEventListener("click", () => {
        stressTest(10000);
    });
    shareButton.addEventListener("click", () => {
        let copyText = "I'm a " + villagerName.textContent + "!\n" + "https://idculver27.github.io/villagerquiz.html" + "\n\n" + villagerImg.src;
        navigator.clipboard.writeText(copyText);
    });
});

function displayQuestion() {
    questionDiv.innerHTML = "";

    let h2 = newElement("h2");
    h2.textContent = bank[qIndex].text;
    questionDiv.appendChild(h2);
    
    let button;
    for(let answer of ["a","b","c","d"]) {
        button = newElement("button","button");
        button.textContent = bank[qIndex][answer].text;
        button.addEventListener("click", () => {
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
        questionDiv.appendChild(button);
    }
}

function finalResults() {
    questionDiv.setAttribute("hidden",true);
    resultsDiv.removeAttribute("hidden");

    // probably could do this better
    let biome = findWinner(["b_desert","b_jungle","b_plains","b_savanna","b_snowy","b_swamp","b_taiga"]);
    let profession = findWinner(["p_armorer","p_butcher","p_cartographer","p_cleric","p_farmer","p_fisherman","p_fletcher","p_leatherworker","p_librarian","p_nitwit","p_stone_mason","p_shepherd","p_toolsmith","p_unemployed","p_weaponsmith"]);

    villagerName.textContent = textFormat(biome) + " " + textFormat(profession);
    villagerImg.alt = villagerName.textContent + " picture";
    villagerImg.src = imgs[biome][profession];
    
    console.log(quizResults);
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
    let words = raw.substring(2).split("_");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

// simulate X quizes with random answers and print summary of results
function stressTest(runs) {
    let testResults = Object.assign({},quizResults);
    let answers = ["a","b","c","d"];

    for(let i = 0; i < runs; i++) {
        let runResults = Object.assign({},quizResults);

        for(let question of bank) {
            // random answer
            let answer = answers[Math.ceil(Math.random() * 3)];
            // add score to results
            for(let key of question[answer].score) {
                runResults[key]++;
            }
        }

        let biome = findWinner(["b_desert","b_jungle","b_plains","b_savanna","b_snowy","b_swamp","b_taiga"]);
        let profession = findWinner(["p_armorer","p_butcher","p_cartographer","p_cleric","p_farmer","p_fisherman","p_fletcher","p_leatherworker","p_librarian","p_nitwit","p_stone_mason","p_shepherd","p_toolsmith","p_unemployed","p_weaponsmith"]);

        testResults[biome]++;
        testResults[profession]++;
    }

    console.log(testResults);
}