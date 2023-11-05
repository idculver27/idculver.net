import FlagMaker from "./flagmaker.js";

const flagMaker = new FlagMaker();

// main
window.addEventListener("DOMContentLoaded", () => {
    const msgInput = document.getElementById("msgInput");
    const wInput = document.getElementById("wInput");
    const hInput = document.getElementById("hInput");
    const subInput = document.getElementById("subInput");
    const bgInput = document.getElementById("bgInput");
    const blackInput = document.getElementById("blackInput");
    const whiteInput = document.getElementById("whiteInput");
    const redInput = document.getElementById("redInput");
    const yellowInput = document.getElementById("yellowInput");
    const blueInput = document.getElementById("blueInput");
    const flagsField = document.getElementById("flagsField");
    msgInput.focus();

    /*msgInput.addEventListener("input", (event) => {
        refreshFlags();
    });*/
    // add event listeners to all inputs
    let inputs = [msgInput, wInput, hInput, subInput, bgInput, blackInput, whiteInput, redInput, yellowInput, blueInput];
    inputs.forEach(input => {
        input.addEventListener("input", (event) => {
            refreshFlags();
        });
    });
});

function refreshFlags() {
    getAndSetSettings();
    clearField();
    let msg = parseMsg(msgInput.value.trim());
    drawFlags(msg);
}

function getAndSetSettings() {
    flagMaker.w = wInput.value;
    flagMaker.h = hInput.value;
    // TODO: use subs
    // TODO: bg color
    flagMaker.black = blackInput.value;
    flagMaker.white = whiteInput.value;
    flagMaker.red = redInput.value;
    flagMaker.yellow = yellowInput.value;
    flagMaker.blue = blueInput.value;
}

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

    // substitutes
    for (let i = 0; i < msgArray.length; i++) {
        for (let j = 1; j < msgArray[i].length; j++) {
            if (msgArray[i][j] == msgArray[i][0] && msgArray[i][j] != "") {
                msgArray[i][j] = "x" // first substitute
            }
        }
        for (let j = 2; j < msgArray[i].length; j++) {
            if (msgArray[i][j] == msgArray[i][1] && msgArray[i][j] != "") {
                msgArray[i][j] = "y" // second substitute
            }
        }
        for (let j = 3; j < msgArray[i].length; j++) {
            if (msgArray[i][j] == msgArray[i][2] && msgArray[i][j] != "") {
                msgArray[i][j] = "z" // third substitute
            }
        }
    }

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
   
    //console.log(finalMsg);
    return finalMsg;
}

function drawFlags(msgArray) {
    msgArray.forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(char => {
            let td = document.createElement("td");
            let flag = flagMaker.make(char);
            td.appendChild(flag);
            tr.appendChild(td);
            
            // padding
            let pad = document.createElement("td");
            pad.className = "padcol";
            tr.appendChild(pad);
        });
        tr.lastChild.remove(); // delete last pad
        flagsField.appendChild(tr);
    });
}
