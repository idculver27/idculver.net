export default class FlagMaker {
    constructor() {
        this.ns = "http://www.w3.org/2000/svg";
        this.width = 100;
        this.height = 100;
        this.black = "#000000";
        this.white = "#ffffff";
        this.red = "#ff0000";
        this.yellow = "#ffcc00";
        this.blue = "#000080";
    }

    make = (char) => {
        let flag = document.createElementNS(this.ns, "svg");
        flag.setAttribute("width", this.width);
        flag.setAttribute("height", this.height);
        
        switch(char) {
            case "A":

                break;
            case "B":

                break;
            case "C":

                break;
            case "D":

                break;
            case "E":

                break;
            case "F":

                break;
            case "G":

                break;
            case "H":

                break;
            case "I":

                break;
            case "J":

                break;
            case "K":

                break;
            case "L":

                break;
            case "M":

                break;
            case "N":

                break;
            case "O":

                break;
            case "P":

                break;
            case "Q":
                let bg = document.createElementNS(this.ns, "rect");
                bg.setAttribute("width", this.width);
                bg.setAttribute("height", this.height);
                bg.setAttribute("fill", this.yellow);
                flag.appendChild(bg);
                break;
            case "R":

                break;
            case "S":

                break;
            case "T":

                break;
            case "U":

                break;
            case "V":

                break;
            case "W":

                break;
            case "X":

                break;
            case "Y":

                break;
            case "Z":

                break;
            case "0":

                break;
            case "1":

                break;
            case "2":

                break;
            case "3":

                break;
            case "4":

                break;
            case "5":

                break;
            case "6":

                break;
            case "7":

                break;
            case "8":

                break;
            case "9":

                break;
            case "x":

                break;
            case "y":

                break;
            case "z":

                break;
            case "#":

                break;
            default:
                console.log("Invalid flag token: " + char);
        }        

        return flag;
    }
}