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
        this.flag = null;
    }

    make(char) {
        let w = this.width;
        let h = this.height;
        let black = this.black;
        let white = this.white
        let red = this.red;
        let yellow = this.yellow;
        let blue = this.blue;
        
        this.flag = document.createElementNS(this.ns, "svg");
        this.flag.setAttribute("width", w);
        this.flag.setAttribute("height", h);
        
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
                this.drawRect(0, 0, w/2, h, white);
                this.drawRect(w/2, 0, w/2, h, red);
                break;
            case "I":
                this.drawBG(yellow);
                this.drawCircle(w/2, h/2, w/4, black);
                break;
            case "J":
                this.drawBG(blue);
                this.drawRect(0, h/3, w, h/3, white);
                break;
            case "K":
                this.drawRect(0, 0, w/2, h, yellow);
                this.drawRect(w/2, 0, w/2, h, blue);
                break;
            case "L":
                this.drawBG(yellow);
                this.drawRect(w/2, 0, w/2, h/2, black);
                this.drawRect(0, h/2, w/2, h/2, black);
                break;
            case "M":
                this.drawBG(blue);
                this.drawSaltire(white);
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
                this.drawBG(blue);
                this.drawRect(w/3, h/3, w/3, h/3, white);
                break;
            case "Q":
                this.drawBG(yellow);
                break;
            case "R":
                this.drawBG(red);
                this.drawRect(w*2/5, 0, w/5, h, yellow);
                this.drawRect(0, h*2/5, w, h/5, yellow);
                break;
            case "S":
                this.drawBG(white);
                this.drawRect(w/3, h/3, w/3, h/3, blue);
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
                this.drawBG(white);
                this.drawSaltire(red);
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
                this.drawPolygon([0,0, w,0, w/2,h/2], yellow);
                this.drawPolygon([w,0, w,h, w/2,h/2], blue);
                this.drawPolygon([w,h, 0,h, w/2,h/2], red);
                this.drawPolygon([0,h, 0,0, w/2,h/2], black);
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

        return this.flag;
    }

    drawBG(fill) {
        let bg = document.createElementNS(this.ns, "rect");
        bg.setAttribute("width", this.width);
        bg.setAttribute("height", this.height);
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

    drawCircle(cx, cy, r, fill) {
        let circle = document.createElementNS(this.ns, "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", r);
        circle.setAttribute("fill", fill);
        this.flag.appendChild(circle);
    }

    drawSaltire(fill) {
        let w = this.width;
        let h = this.height;
        this.drawPolygon([0,h/8, 0,0, w/8,0, w,h*7/8, w,h, w*7/8,h], fill);
        this.drawPolygon([w*7/8,0, w,0, w,h/8, w/8,h, 0,h, 0,h*7/8], fill);
    }

    drawNumFlagBG(fill) {
        let w = this.width*1.75;
        let h = this.height;
        
    }
}