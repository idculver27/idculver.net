window.addEventListener("DOMContentLoaded", () => {    
    const table = document.getElementById("main");
    fetch("../battlepacks.json")
        .then((response) => response.json())
        .then((json) => {
            json.sets.forEach(set => {
                console.log(set);
                let tr = document.createElement("tr");
                
                table.appendChild(tr);
            });
        });
});