window.addEventListener("DOMContentLoaded", () => {    
    const table = document.getElementById("bpDiv");
    fetch("../battlepacks.json")
        .then((response) => response.json())
        .then((json) => {
            json.sets.forEach(set => {
                console.log(set);
                let table = document.createElement("table");

                table.appendChild(tr);
            });
        });
});