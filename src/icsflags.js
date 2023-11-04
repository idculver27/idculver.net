import FlagMaker from "./flagmaker.js";

const flagMaker = new FlagMaker();

// main
window.addEventListener("DOMContentLoaded", () => {
    const msgInput = document.getElementById("msgInput");
    const flagsField = document.getElementById("flagsField");
    msgInput.focus();

    msgInput.addEventListener("input", (event) => {
        clearField();
        let msg = parseMsg(event.target.value.trim());
        drawFlags(msg);
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
    msg = msg.split(" "); // split into array of words

    // find longest word
    let longest = 0;
    msg.forEach(word => {
        if (word.length > longest) {
            longest = word.length;
        }
    });

    // split each word into array of chars
    let msgArray = [];
    msg.forEach(word => {
        let wordArray = [];
        for (let i = 0; i < longest; i++) {
            wordArray.push(word.charAt(i));
        }
        msgArray.push(wordArray);
    });

    // substitutes // TODO
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

    // swap the dimensions
    let finalMsg = [];
    for (let i = 0; i < msgArray.length; i++) {
        for (let j = 0; j < msgArray[i].length; j++) {
            if (finalMsg[j] == null) {
                finalMsg[j] = [];
            }
            finalMsg[j][i] = msgArray[i][j];
        }
    }
   
    console.log(finalMsg);
    return finalMsg;
}

function drawFlags(msgArray) {
    msgArray.forEach(row => {
        row.forEach(char => {
            buildFlag(char);
        })
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

