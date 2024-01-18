window.addEventListener("DOMContentLoaded", () => {
    update();

    let normalInputs = [footprint2x2,footprint3x3,heightRange,pumps1,pumps2,rpmRange];
    normalInputs.forEach(input => {
        input.addEventListener("input", () => {
            update();
        });
    });

    let heatInputs = document.getElementsByClassName("blaze");
    Array.from(heatInputs).forEach(input => {
        input.addEventListener("click", () => {
            input.textContent = parseInt(input.textContent) + 1;
            if(input.textContent == 3) {
                input.textContent = 0;
            }
            update();
        });
    });

    let optimizeButtons = document.getElementsByClassName("optimizeButtons");
    Array.from(optimizeButtons).forEach(button => {
        button.addEventListener("click", () => {
            optimizeForLvl(button.textContent);
        });
    });
});

function update() {
    // size

    let footprint = 4;
    if(footprint3x3.checked) {
        footprint = 9;
    }

    let height = heightRange.value;
    heightDisplay.textContent = "Height: " + height + " blocks";

    let volume = footprint * height;
    volumeDisplay.textContent = "Volume: " + volume + " blocks";

    let sizeLvl = clampLvl(Math.floor(volume / 4));

    // water

    let pumps = 1;
    if(pumps2.checked) {
        pumps = 2;
    }

    let rpm = rpmRange.value;
    rpmDisplay.textContent = "Pump speed: " + rpm + " RPM";

    let combinedRPM = pumps * rpm;
    combinedRPMdisplay.textContent = "Combined RPM: " + combinedRPM;

    let thruput = Math.floor(combinedRPM / 2) * 81;
    if(combinedRPM == 1) {
        thruput = 81;
    }
    thruputDisplay.textContent = "Throughput: " + thruput + " mB per Tick";

    let waterLvl = clampLvl(Math.floor(combinedRPM / 20));
    if(thruput < 810) {
        waterLvl = -1;
    }

    // heat

    updateBlazeGrid(footprint);

    let heatLvl = 0;
    let blazes = document.getElementsByClassName("blaze");
    Array.from(blazes).forEach(blaze => {
        if(!blaze.getAttribute("hidden")) {
            heatLvl += parseInt(blaze.textContent);
        }
    });
    heatDisplay.textContent = "Total heat: " + heatLvl;
    if(heatLvl == 0) {
        heatDisplay.textContent += " (Passive)"
    }

    // status
    
    let boilerLvl = Math.min(sizeLvl,waterLvl,heatLvl);
    statusDisplay.textContent = "Boiler Status: Lvl " + boilerLvl;
    if(boilerLvl == -1) {
        statusDisplay.textContent = "Boiler Status: Idle";
    } else if(boilerLvl == 0) {
        statusDisplay.textContent += " (Passive)";
    } else if(boilerLvl == 18) {
        statusDisplay.textContent += " (Max)";
    }

    // TODO: implement diagram table later

    let stressCapacity = boilerLvl * 16384;
    let enginesReq = boilerLvl;
    let outputSpeed = 64;
    if(boilerLvl == -1) {
        stressCapacity = 0;
        enginesReq = 0;
        outputSpeed = 0;
    } else if(boilerLvl == 0) {
        stressCapacity = 2048;
        enginesReq = 1;
        outputSpeed = 16;
    }
    capacityDisplay.textContent = "Stress capacity: " + stressCapacity + "su";
    enginesDisplay.textContent = "Engines required: " + enginesReq;
    speedDisplay.textContent = "Output speed: " + outputSpeed + " RPM";
}

function optimizeForLvl(lvl) {
    // size
    if(lvl < 9) {
        footprint2x2.checked = true;
        heightRange.value = lvl;
    } else {
        footprint3x3.checked = true;
        heightRange.value = Math.ceil(lvl * 4 / 9);
    }

    // water
    let combinedRPM = lvl * 20;
    if(combinedRPM < 257) {
        pumps1.checked = true;
        rpmRange.value = combinedRPM;
    } else {
        pumps2.checked = true;
        rpmRange.value = combinedRPM / 2;
    }

    // heat
    updateBlazeGrid();
    let blazes = document.getElementsByClassName("blaze");
    // reset
    Array.from(blazes).forEach(blaze => {
        blaze.textContent = 0;
    });
    // set 1s
    Array.from(blazes).forEach(blaze => {
        if(!blaze.getAttribute("hidden") && lvl > 0) {
            blaze.textContent = 1;
            lvl -= 1;
        }
    });
    // set 2s
    if(lvl > 0) {
        Array.from(blazes).forEach(blaze => {
            if(!blaze.getAttribute("hidden") && lvl > 0) {
                blaze.textContent = 2;
                lvl -= 1;
            }
        });
    }

    update();
}

function updateBlazeGrid(size) {
    let blaze3onlys = document.getElementsByClassName("3only");
    if(size == 4) {
        Array.from(blaze3onlys).forEach(blaze3only => {
            blaze3only.setAttribute("hidden",true);
        });
    } else {
        Array.from(blaze3onlys).forEach(blaze3only => {
            blaze3only.removeAttribute("hidden");
        });
    }
}

function clampLvl(lvl) {
    if(lvl > 18) {
        return 18;
    }
    return lvl;
}