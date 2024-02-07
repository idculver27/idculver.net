window.addEventListener("DOMContentLoaded", () => {
    update();

    inAddr.addEventListener("input", () => {
        update();
    });
    inCIDR.addEventListener("input", () => {
        clampCIDR();
        updateMask();
    });
    inMask.addEventListener("input", () => {
        updateCIDR();
    });
});

function update() {
    warnAddr.setAttribute("hidden",true);

    let addrDec = validateAddr(inAddr.value);
    if(!addrDec) {
        warnAddr.removeAttribute("hidden");
        return;
    }
    
    //let addrBin = dec2bin(addrDec);
}

function updateMask() {
    let maskBin = ""
    for(let i = 0; i < inCIDR.value; i++) {
        maskBin += "1";
    }
    for(let i = 0; i < 32 - inCIDR.value; i++) {
        maskBin += "0";
    }

    inMask.value = bin2dec(maskBin);

    update()
}

function updateCIDR() {
    warnMask.setAttribute("hidden",true);
    
    let maskDec = validateAddr(inMask.value);
    if(!maskDec) {
        warnMask.removeAttribute("hidden");
        return;
    }

    let bin = dec2bin(maskDec);

    let i = 0;
    while(i < 32) {
        if(bin.substring(i,i+1) != "1") break;
        i++;
    }
    let count1 = i;
    
    i = 31;
    while(i > 0) {
        if(bin.substring(i,i+1) != "0") break;
        i--;
    }
    let count0 = 31 - i;
    
    if(count1 + count0 != 32) {
        warnMask.removeAttribute("hidden");
        return;
    }
    
    inCIDR.value = count1;

    update();
}

function validateAddr(addrStr) {
    let addr = [];
    addrStr.split(".").forEach(octetStr => {
        let octet = parseInt(octetStr);
        if(octet < 0 || octet > 255) return false;
        addr.push(octet);
    });
    if(addr.length != 4) return false;
    return addr;
}

function clampCIDR() {
    if(inCIDR.value < 0) {
        inCIDR.value = 0;
    } else if (inCIDR.value > 32) {
        inCIDR.value = 32;
    }
}

function bin2dec(bin) {
    let dec = "";
    dec += parseInt(bin.substring(0,8),2);
    dec += ".";
    dec += parseInt(bin.substring(8,16),2);
    dec += ".";
    dec += parseInt(bin.substring(16,24),2);
    dec += ".";
    dec += parseInt(bin.substring(24,32),2);
    return dec;
}

function bin2hex(bin) {

}

function bin2str(bin) {

}

function dec2bin(dec) {
    let bin = "";
    dec.forEach(octet => {
        bin += octet.toString(2).padStart(8,"0");
    });
    return bin;
}

function dec2str(dec) {

}