var sizeLvl = null;
var waterLvl = null;
var heatLvl = null;

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
    if(combinedRPM == 1) { // special case so 1 RPM still pumps something
        thruput = 81;
    }
    thruputDisplay.textContent = "Throughput: " + thruput + " mB per Tick";
    waterLvl = clampLvl(Math.floor(combinedRPM / 20));
}

function updateHeat() {
    heatLvl = 0;
    let blazes = document.getElementsByClassName("blaze");
    Array.from(blazes).forEach(blaze => {
        heatLvl += parseInt(blaze.textContent);
    });
    heatDisplay.textContent = "Total heat: " + heatLvl;
}

function clampLvl(lvl) {
    if(lvl > 18) {
        return 18;
    }
    return lvl;
}