const fs = require("fs");
let dataJSON = fs.readFileSync("../epiclunch.json","utf-8");
var data = JSON.parse(dataJSON);
let today = new Date();
var date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
var todaysArray = data[date];
var user = null;
var code = null;

window.addEventListener("DOMContentLoaded", () => {
    todaysDate.textContent = date;
    loadData();

    // add listeners
    loginButton.addEventListener("click", () => {
        login();
    });
    let cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach(cell => {
        cell.addEventListener("click", () => {
            updateCell(cell);
        });
    });
});

function login() {
    nameWarning.textContent = "";
    if(nameInput.value == "") {
        nameWarning.textContent = "you have to have a name, silly";
        return
    }

    user = nameInput.value;
    prelogin.setAttribute("hidden",true);
    postlogin.removeAttribute("hidden");
    nameHeader.textContent = user;
    leftTable.removeAttribute("style");
}

function updateCell(cell) {
    if(cell.title == "No") {
        cell.title = "Yes";
    } else if (cell.title == "Yes") {
        cell.title = "Maybe";
    } else if (cell.title == "Maybe") {
        cell.title = "No";
    }
    saveData();
}

function saveData() {
    // encode
    let tempCode = "";
    let cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach(cell => {
        tempCode += cell.title.substring(0,1);
    });
    code = tempCode;

    // save to json
    let userData = {
        user: user,
        code: code
    }
    let userJSON = JSON.stringify(userData);
    todaysArray.push(userJSON)
    userJSON = JSON.stringify(data);
    fs.writeFileSync("users.json",usersjson,"utf-8");

    loadData();
}

function loadData() {
    // load from json
}