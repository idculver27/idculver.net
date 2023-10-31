export default class ToDoList {
    constructor() {
        this._list = [];
    }

    getList() {
        return this._list;
    }

    clearList() {
        this._list = [];
    }

    addItemToList(itemObj) {
        this._list.push(itemObj);
    }

    removeItemFromList(id) {
        const list = this._list;
        for (let i = 0; i < list.length; i++) {
            if (list[i]._id == id) {
                list.splice(i, 1);
                break;
            }
        }
    }
}


// launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // add listeners

}




// my shit

// chart title
// draw the chart
    // axes
    // labels
    // data points
    // lines between data points
    // scale based on window/chart size
    // animate transition from previous chart?
// callouts
    // e.g. a certain set
    // relevant image, probably can use bricklink's
    // caption
// buttons to progress years
// table at the bottom listing all info
// at the very end zoom out to whole timeline