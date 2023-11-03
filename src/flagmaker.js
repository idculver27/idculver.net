// https://en.wikipedia.org/wiki/International_Code_of_Signals#Single-flag_signals
export default class FlagMaker {
    constructor() {
        this.ns = "http://www.w3.org/2000/svg";
        this.w = 100;
        this.subW = this.w*1.5;
        this.penW = this.w*1.75;
        this.h = 100;
        this.black = "#000000";
        this.white = "#ffffff";
        this.red = "#ff0000";
        this.yellow = "#ffcc00";
        this.blue = "#000080";
        this.flag = null;
    } // eventually make w, h, colors controlled by html inputs

    make(char) {
        // I hate "this"
        let w = this.w;
        let subW = this.subW;
        let penW = this.penW;
        let h = this.h;
        let black = this.black;
        let white = this.white;
        let red = this.red;
        let yellow = this.yellow;
        let blue = this.blue;

        this.flag = document.createElementNS(this.ns, "svg");
        this.flag.setAttribute("height", h);
        // determine width
        if (/[A-Z]/.test(char)) {
            this.flag.setAttribute("width", w);
        } else if (/[xyz]/.test(char)) {
            this.flag.setAttribute("width", subW);
        } else if (/[#0-9]/.test(char)) {
            this.flag.setAttribute("width", penW);
        } else {
            console.log("Invalid flag token: " + char);
        }
        
        // draw flag
        switch(char) {
            case "A":
                this.drawRect(0, 0, w/2, h, white);
                this.drawPolygon([w/2,0, w,0, w*3/4,h/2, w,h, w/2,h], blue);
                break;
            case "B":
                this.drawPolygon([0,0, w,0, w*3/4,h/2, w,h, 0,h], red);
                break;
            case "C":
                this.drawBG(blue);
                this.drawRect(0, h/5, w, h*3/5, white);
                this.drawRect(0, h*2/5, w, h/5, red);
                break;
            case "D":
                this.drawBG(yellow);
                this.drawRect(0, h/5, w, h*3/5, blue);
                break;
            case "E":
                this.drawRect(0, 0, w, h/2, blue);
                this.drawRect(0, h/2, w, h/2, red);
                break;
            case "F":
                this.drawBG(white);
                this.drawPolygon([w/2,0, w,h/2, w/2,h, 0,h/2], red);
                break;
            case "G":
                this.drawBG(yellow);
                this.drawRect(w/6, 0, w/6, h, blue);
                this.drawRect(w*3/6, 0, w/6, h, blue);
                this.drawRect(w*5/6, 0, w/6, h, blue);
                break;
            case "H":
                this.drawPerPale(white, red);
                break;
            case "I":
                this.drawBG(yellow);
                this.drawCircle(black);
                break;
            case "J":
                this.drawBG(blue);
                this.drawRect(0, h/3, w, h/3, white);
                break;
            case "K":
                this.drawPerPale(yellow, blue);
                break;
            case "L":
                this.drawQuarterly(yellow, black);
                break;
            case "M":
                this.drawSaltire(blue, white);
                break;
            case "N":
                this.drawBG(blue);
                this.drawRect(w/4, 0, w/4, h/4, white);
                this.drawRect(w*3/4, 0, w/4, h/4, white);
                this.drawRect(0, h/4, w/4, h/4, white);
                this.drawRect(w/2, h/4, w/4, h/4, white);
                this.drawRect(w/4, h/2, w/4, h/4, white);
                this.drawRect(w*3/4, h/2, w/4, h/4, white);
                this.drawRect(0, h*3/4, w/4, h/4, white);
                this.drawRect(w/2, h*3/4, w/4, h/4, white);
                break;
            case "O":
                this.drawBG(red);
                this.drawPolygon([0,0, w,h, 0,h], yellow);
                break;
            case "P":
                this.drawInescutcheon(blue, white);
                break;
            case "Q":
                this.drawBG(yellow);
                break;
            case "R":
                this.drawCross(red, yellow);
                break;
            case "S":
                this.drawInescutcheon(white, blue);
                break;
            case "T":
                this.drawRect(0, 0, w/3, h, red);
                this.drawRect(w/3, 0, w/3, h, white);
                this.drawRect(w*2/3, 0, w/3, h, blue);
                break;
            case "U":
                this.drawBG(red);
                this.drawRect(w/2, 0, w/2, h/2, white);
                this.drawRect(0, h/2, w/2, h/2, white);
                break;
            case "V":
                this.drawSaltire(white, red);
                break;
            case "W":
                this.drawBG(blue);
                this.drawRect(w/5, h/5, w*3/5, h*3/5, white);
                this.drawRect(w*2/5, h*2/5, w/5, h/5, red);
                break;
            case "X":
                this.drawBG(white);
                this.drawRect(w*2/5, 0, w/5, h, blue);
                this.drawRect(0, h*2/5, w, h/5, blue);
                break;
            case "Y":
                this.drawBG(yellow);
                this.drawPolygon([w/5,0, w*2/5,0, 0,h*2/5, 0,h/5], red);
                this.drawPolygon([w*3/5,0, w*4/5,0, 0,h*4/5, 0,h*3/5], red);
                this.drawPolygon([w,0, w,h/5, w/5,h, 0,h], red);
                this.drawPolygon([w,h*2/5, w,h*3/5, w*3/5,h, w*2/5,h], red);
                this.drawPolygon([w,h*4/5, w,h, w*4/5,h], red);
                break;
            case "Z":
                this.drawPerPale(black, blue);
                this.drawPolygon([0,0, w,0, w/2,h/2], yellow);
                this.drawPolygon([w,h, 0,h, w/2,h/2], red);
                break;
            case "x": // first substitute
                this.drawPolygon([0,0, subW,h/2, 0,h], blue);
                this.drawPolygon([0,h/6, subW*2/3,h/2, 0,h*5/6], yellow);
                break;
            case "y": // second subsitute
                this.drawPolygon([0,0, subW/2,h/4, subW/2,h*3/4, 0,h], blue);
                this.drawPolygon([subW/2,h/4, subW,h/2, subW/2,h*3/4], white);
                break;
            case "z": // third substitute
                this.drawPolygon([0,0, subW*3/2,h/3, 0,h/3], white);
                this.drawPolygon([0,h/3, subW*3/2,h/3, subW,h/2, subW*3/2,h*2/3, 0,h*2/3], black);
                this.drawPolygon([0,h*2/3, subW*3/2,h*2/3, 0,h], white);
                break;
            case "#": // code
                this.drawPolygon([0,0, penW/5,h/20, penW/5,h*19/20, 0,h], red);
                this.drawPolygon([penW/5,h/20, penW*2/5,h/10, penW*2/5,h*9/10, penW/5,h*19/20], white);
                this.drawPolygon([penW*2/5,h/10, penW*3/5,h*3/20, penW*3/5,h*17/20, penW*2/5,h*9/10], red);
                this.drawPolygon([penW*3/5,h*3/20, penW*4/5,h/5, penW*4/5,h*4/5, penW*3/5,h*17/20], white);
                this.drawPolygon([penW*4/5,h/5, penW,h/4, penW,h*3/4, penW*4/5,h*4/5], red);
                break;
            case "1":
                this.drawBGPen(white);
                this.drawCircle(red);
                break;
            case "2":
                this.drawBGPen(blue);
                this.drawCircle(white);
                break;
            case "3":
                this.drawTiercedPen(red, white, blue);
                break;
            case "4":
                this.drawSaltirePen(red, white);
                break;
            case "5":
                this.drawPolygon([0,0, penW/2,h/8, penW/2,h*7/8, 0,h], yellow);
                this.drawPolygon([penW/2,h/8, penW,h/4, penW,h*3/4, penW/2,h*7/8], blue);
                break;
            case "6":
                this.drawPerFessPen(black, white);
                break;
            case "7":
               this.drawPerFessPen(yellow, red);
                break;
            case "8":
                this.drawSaltirePen(white, red);
                break;
            case "9":
                this.drawPolygon([0,0, penW/2,h/8, penW/2,h/2, 0,h/2], white);
                this.drawPolygon([0,h/2, penW/2,h/2, penW/2,h*7/8, 0,h], red);
                this.drawPolygon([penW/2,h/8, penW,h/4, penW,h/2, penW/2,h/2], black);
                this.drawPolygon([penW/2,h/2, penW,h/2, penW,h*3/4, penW/2,h*7/8], yellow);
                break;
            case "0":
                this.drawTiercedPen(yellow, red, yellow);
                break;
            default:
                console.log("Invalid flag token: " + char);
        }        

        return this.flag;
    }

    drawBG(fill) {
        let bg = document.createElementNS(this.ns, "rect");
        bg.setAttribute("width", this.w);
        bg.setAttribute("height", this.h);
        bg.setAttribute("fill", fill);
        this.flag.appendChild(bg);
    }

    drawRect(x, y, width, height, fill) {
        let rect = document.createElementNS(this.ns, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", fill);
        this.flag.appendChild(rect);
    }

    arrayToPoints(pointsArray) {
        // input: [x1,y1,x2,y2,x3,y3]
        // output: "x1,y1 x2,y2 x3,y3"
        let points = "";
        for (let i = 0; i < pointsArray.length; i += 2) {
            points += pointsArray[i] + "," + pointsArray[i+1] + " ";
        }
        points = points.slice(0,-1);
        return points;
    }

    drawPolygon(pointsArray, fill) {
        let polygon = document.createElementNS(this.ns, "polygon");
        polygon.setAttribute("points", this.arrayToPoints(pointsArray));
        polygon.setAttribute("fill", fill);
        this.flag.appendChild(polygon);
    }

    drawCircle(fill) {
        let circle = document.createElementNS(this.ns, "circle");
        circle.setAttribute("cx", this.w/2);
        circle.setAttribute("cy", this.h/2);
        circle.setAttribute("r", this.w/4);
        circle.setAttribute("fill", fill);
        this.flag.appendChild(circle);
    }

    drawPerPale(fill1, fill2) {
        this.drawRect(0, 0, this.w/2, this.h, fill1);
        this.drawRect(this.w/2, 0, this.w/2, this.h, fill2);
    }

    drawQuarterly(fill1, fill2) {
        this.drawBG(fill1);
        this.drawRect(this.w/2, 0, this.w/2, this.h/2, fill2);
        this.drawRect(0, this.h/2, this.w/2, this.h/2, fill2);
    }

    drawSaltire(bgFill, fill) {
        this.drawBG(bgFill);
        this.drawPolygon([0,this.h/8, 0,0, this.w/8,0, this.w,this.h*7/8, this.w,this.h, this.w*7/8,this.h], fill);
        this.drawPolygon([this.w*7/8,0, this.w,0, this.w,this.h/8, this.w/8,this.h, 0,this.h, 0,this.h*7/8], fill);
    }

    drawInescutcheon(bgFill, fill) {
        this.drawBG(bgFill);
        this.drawRect(this.w/3, this.h/3, this.w/3, this.h/3, fill);
    }

    drawCross(bgFill, fill) {
        this.drawBG(bgFill);
        this.drawRect(this.w*2/5, 0, this.w/5, this.h, fill);
        this.drawRect(0, this.h*2/5, this.w, this.h/5, fill);
    }

    drawBGPen(fill) {
        this.drawPolygon([0,0, this.penW,this.h/4, this.penW,this.h*3/4, 0,this.h], fill);
    }

    drawTiercedPen(fill1, fill2, fill3) {
        this.drawPolygon([0,0, this.penW/3,this.h/12, this.penW/3,this.h*11/12, 0,this.h], fill1);
        this.drawPolygon([this.penW/3,this.h/12, this.penW*2/3,this.h/6, this.penW*2/3,this.h*5/6, this.penW/3,this.h*11/12], fill2);
        this.drawPolygon([this.penW*2/3,this.h/6, this.penW,this.h/4, this.penW,this.h*3/4, this.penW*2/3,this.h*5/6], fill3);
    }

    drawSaltirePen(bgFill, fill) {
        this.drawPolygon([0,0, this.penW*2/7,this.h/14, this.penW*2/7,this.h*13/14, 0,this.h], bgFill);
        this.drawPolygon([this.penW*2/7,this.h/14, this.penW*3/7,this.h*3/28, this.penW*3/7,this.h*25/28, this.penW*2/7,this.h*13/14], fill);
        this.drawPolygon([this.penW*3/7,this.h*3/28, this.penW,this.h/4, this.penW,this.h*3/4, this.penW*3/7,this.h*25/28], bgFill);
        this.drawRect(0, this.h*3/8, this.penW, this.h/4, fill);
    }

    drawPerFessPen(fill1, fill2) {
        this.drawPolygon([0,0, this.penW,this.h/4, this.penW,this.h/2, 0,this.h/2], fill1);
        this.drawPolygon([0,this.h/2, this.penW,this.h/2, this.penW,this.h*3/4, 0,this.h], fill2);
    }
}