import FlagMaker from "./flagmaker.js";

const flagMaker = new FlagMaker();

// main
window.addEventListener("DOMContentLoaded", () => {
    const msgInput = document.getElementById("msgInput");
    const flagsField = document.getElementById("flagsField");
    msgInput.focus();

    msgInput.addEventListener("input", (event) => {
        clearField();
        let msgArray = parseMsg(event.target.value.trim());
        drawFlags(msgArray);
    });
});

function clearField() {
    let child = flagsField.lastElementChild;
    while (child) {
        flagsField.removeChild(child);
        child = flagsField.lastElementChild;
    }
}

function parseMsg(msg) {
    msg = msg.toUpperCase();
    msg = msg.replace(/[^A-Z0-9#\s]/g, ""); // remove everything except letters, numbers, #, and space
    msg = msg.replace(/\s+/g, " "); // squish spaces
    let msgArray = msg.split(" "); // split into array of words
    
    // substitutes
    // TODO
    // apparently strings are immutable in js
    /*msgArray.forEach(word => {
        if (word.length >= 4) {
            if (word[3] == word[2]) {
                word[3] = "z";
            } else if (word[3] == word[1]) {
                word[3] = "y";
            } else if (word[3] == word[0]) {
                word[3] = "x";
            }
        }
        if (word.length >= 3) {
            if (word[2] == word[1]) {
                word[2] = "y";
            } else if (word[2] == word[0]) {
                word[2] = "x";
            }
        }
        if (word.length >= 2) {
            if (word[1] == word[0]) {
                word[1] = "x";
            }
        }
    });*/

    return msgArray;
}

// somewhere in these to functions, padding between flags
// words vertical
// words next to each other
// bg should be there before the flags are made

function drawFlags(msgArray) {
    // for each letter of each word, buildFlag()
    msgArray.forEach(word => {
        word.split("").forEach(char => {
            buildFlag(char);
        });
    });
}

function buildFlag(char) {
    let div = document.createElement("div");
    let flag = flagMaker.make(char);
    div.className = "flag";
    div.id = char;
    div.appendChild(flag);
    flagsField.appendChild(div);
}

