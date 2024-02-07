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
    let host = dec2bin(inAddr.value);
    if(!host) {
        warnAddr.removeAttribute("hidden");
        return;
    }

    // calculations
    let cidr = inCIDR.value;
    let netw = host.substring(0,cidr) + "0".repeat(32-cidr);
    let firstUsable = netw.substring(0,31) + "1";
    let broadcast = netw.substring(0,cidr) + "1".repeat(32-cidr);
    let lastUsable = broadcast.substring(0,31) + "0";
    let subnetMask = dec2bin(inMask.value);
    let wildcardMask = "0".repeat(cidr) + "1".repeat(32-cidr);
    let totalHosts = 2 ** (32 - cidr);
    let usableHosts = totalHosts - 2;

    // output
    tdNetwDec.textContent = bin2dec(netw);
    tdNetwBin.textContent = dotted(netw);
    tdFirstUsableDec.textContent = bin2dec(firstUsable);
    tdFirstUsableBin.textContent = dotted(firstUsable);
    tdLastUsableDec.textContent = bin2dec(lastUsable);
    tdLastUsableBin.textContent = dotted(lastUsable);
    tdBroadcastDec.textContent = bin2dec(broadcast);
    tdBroadcastBin.textContent = dotted(broadcast);
    tdCIDR.textContent = "/" + cidr;
    tdSubnetMaskDec.textContent = bin2dec(subnetMask);
    tdSubnetMaskBin.textContent = dotted(subnetMask);
    tdWildcardMaskDec.textContent = bin2dec(wildcardMask);
    tdWildcardMaskBin.textContent = dotted(wildcardMask);
    tdTotalHosts.textContent = totalHosts;
    tdUsableHosts.textContent = usableHosts;

    // special cases
    if(cidr > 30) {
        tdFirstUsableDec.textContent = "";
        tdFirstUsableBin.textContent = "";
        tdLastUsableDec.textContent = "";
        tdLastUsableBin.textContent = "";
        tdUsableHosts.textContent = 0;
    }
}

function updateMask() {
    let maskBin = "1".repeat(inCIDR.value) + "0".repeat(32-inCIDR.value);
    inMask.value = bin2dec(maskBin);
    update()
}

function updateCIDR() {
    warnMask.setAttribute("hidden",true);
    
    let mask = dec2bin(inMask.value);
    if(!mask) {
        warnMask.removeAttribute("hidden");
        return;
    }

    let i = 0;
    while(i < 32) {
        if(mask.charAt(i) != "1") break;
        i++;
    }
    let count1 = i;
    
    i = 31;
    while(i > 0) {
        if(mask.charAt(i) != "0") break;
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

function dec2bin(addrStr) {
    let bin = ""
    addrStr.split(".").forEach(octetStr => {
        let octet = parseInt(octetStr);
        if(octet < 0 || octet > 255) return false;
        bin += octet.toString(2).padStart(8,"0");
    });
    if(bin.length != 32) return false;
    return bin;
}

function bin2dec(bin) {
    let dec = parseInt(bin.substring(0,8),2);
    dec += "." + parseInt(bin.substring(8,16),2);
    dec += "." + parseInt(bin.substring(16,24),2);
    dec += "." + parseInt(bin.substring(24),2);
    return dec;
}

function dotted(str) {
    let out = str.substring(0,8);
    out += "." + str.substring(8,16);
    out += "." + str.substring(16,24);
    out += "." + str.substring(24);
    return out;
}

function clampCIDR() {
    if(inCIDR.value < 0) {
        inCIDR.value = 0;
    } else if (inCIDR.value > 32) {
        inCIDR.value = 32;
    }
}