var sizeLvl = 0;
var waterLvl = 0;
var heatLvl = 0;

window.addEventListener("DOMContentLoaded", () => {
    updateSize();
    updateWater();
    updateHeat();
    
    // add listeners

    let sizeInputs = [footprint2x2,footprint3x3,heightRange];
    sizeInputs.forEach(input => {
        input.addEventListener("input", () => {
            updateSize();
        });
    });

    let waterInputs = [pumps1,pumps2,rpmRange];
    waterInputs.forEach(input => {
        input.addEventListener("input", () => {
            updateWater();
        });
    });

    let heatInputs = document.getElementsByClassName("blaze");
    Array.from(heatInputs).forEach(input => {
        input.addEventListener("click", () => {
            input.textContent = parseInt(input.textContent) + 1;
            if(input.textContent == 3) {
                input.textContent = 0;
            }
            updateHeat();
        });
    });

    // implement optimize buttons (should be pretty easy) (hard code - dictionary?)
});


function updateSize() {
    let footprint = 4;
    if(footprint3x3.checked) {
        footprint = 9;
    }

    let height = heightRange.value;
    heightDisplay.textContent = height;

    let volume = footprint * height;
    volumeDisplay.textContent = "Volume: " + volume + " blocks";

    sizeLvl = clampLvl(Math.floor(volume / 4));

    updateStatus();
}

function updateWater() {
    let pumps = 1;
    if(pumps2.checked) {
        pumps = 2;
    }

    let rpm = rpmRange.value;
    rpmDisplay.textContent = rpm;

    let combinedRPM = pumps * rpm;
    combinedRPMdisplay.textContent = "Combined RPM: " + combinedRPM;

    let thruput = Math.floor(combinedRPM / 2) * 81;
    if(combinedRPM == 1) {
        thruput = 81;
    }
    thruputDisplay.textContent = "Throughput: " + thruput + " mB per Tick";

    waterLvl = clampLvl(Math.floor(combinedRPM / 20));

    updateStatus();
}

function updateHeat() {
    heatLvl = 0;

    let blazes = document.getElementsByClassName("blaze");
    Array.from(blazes).forEach(blaze => {
        heatLvl += parseInt(blaze.textContent);
    });
    heatDisplay.textContent = "Total heat: " + heatLvl;
    if(heatLvl == 0) {
        heatDisplay.textContent += " (Passive)"
    }

    updateStatus();
}

function updateStatus() {
    let boilerLvl = Math.min(sizeLvl,waterLvl,heatLvl);
    statusDisplay.textContent = "Boiler Status: Lvl " + boilerLvl;
    if(boilerLvl == 0) {
        statusDisplay.textContent += " (Passive)";
    } else if(boilerLvl == 18) {
        statusDisplay.textContent += " (Max)";
    }

    // implement diagram table later

    let stressCapacity = boilerLvl * 16384;
    let reqEngines = boilerLvl;
    let outputSpeed = 64;
    if(boilerLvl == 0) {
        stressCapacity = 2048;
        reqEngines = 1;
        outputSpeed = 16;
    }
    capacityDisplay.textContent = "Stress capacity: " + stressCapacity + "su";
    enginesDisplay.textContent = "Required engines: " + reqEngines;
    speedDisplay = "Output speed: " + outputSpeed + " RPM";
}

function clampLvl(lvl) {
    if(lvl > 18) {
        return 18;
    }
    return lvl;
}