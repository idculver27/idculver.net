window.addEventListener("DOMContentLoaded", () => {
    let attributeInputs = [lengthInput,numbersInput,lowercaseInput,uppercaseInput,specialInput];
    attributeInputs.forEach(input => {
        input.addEventListener("input", () => {
            validateAttributes();
        });
    });
    generateButton.addEventListener("click", () => {
        generatePassword();
    });
    loginButton.addEventListener("click", () => {
        //
    });
});

function validateAttributes() {
    lengthWarning.setAttribute("hidden",true);
    generateWarning.setAttribute("hidden",true);
    generateButton.removeAttribute("disabled");

    if(lengthInput.value < 3 || lengthInput.value > 30) {
        lengthWarning.removeAttribute("hidden");
        generateButton.setAttribute("disabled",true);
    }
    if(!(numbersInput.checked || lowercaseInput.checked || uppercaseInput.checked || specialInput.checked)) {
        generateWarning.removeAttribute("hidden");
        generateButton.setAttribute("disabled",true);
    }
}

function generatePassword() {
    // build pool of possible chars
    let pool = "";
    if(numbersInput.checked) {
        pool += "0123456789";
    }
    if(lowercaseInput.checked) {
        pool += "abcdefghijklmnopqrtsuvwxyz";
    }
    if(uppercaseInput.checked) {
        pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(specialInput.checked) {
        pool += "!\"#$%&'()*+,-./:;<=>?@{|}~";
    }

    // build password
    let password = "";
    let randomIndex = 0;
    while(password.length < lengthInput.value) {
        randomIndex = Math.floor(Math.random() * (pool.length + 1));
        password += pool.substring(randomIndex,randomIndex + 1);
    }

    console.log(password);
}