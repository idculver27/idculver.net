var quizResults = {
    // biomes
    desert: 0,
    jungle: 0,
    plains: 0,
    savanna: 0,
    snowy: 0,
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

window.addEventListener("DOMContentLoaded", () => {
    btnStart.addEventListener("click", () => {
        startQuiz();
    });
});

function startQuiz() {
    btnStart.remove();
}

function loadQuestion() {
    //
}