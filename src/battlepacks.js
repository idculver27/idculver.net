window.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("bpDiv");
    fetch("../battlepacks.json")
        .then((response) => response.json())
        .then((json) => {
            json.sets.forEach(set => {
                // build html
                // yes i know this is disgusting
                bpDiv.appendChild(document.createElement("hr"));
                let table = document.createElement("table");
                table.className = "bptable";
                    let tr = document.createElement("tr");
                        let td = document.createElement("td");
                        td.className = "bpheadertd";
                        td.setAttribute("colspan","2");
                            let h3 = document.createElement("h3");
                            h3.className = "bph3";
                            h3.textContent = set.number + " " + set.name;
                            td.appendChild(h3);
                        tr.appendChild(td);
                        td = document.createElement("td");
                        td.className = "bptd";
                        td.setAttribute("rowspan","3");
                            let img = document.createElement("img");
                            img.className = "bpimg";
                            img.src = "https://www.bricklink.com/SL/" + set.number + ".jpg"
                            td.appendChild(img);
                        tr.appendChild(td);
                        // minifigs
                        set.minifigs.forEach(minifig => {
                            td = document.createElement("td");
                            td.className = "bptd";
                            td.setAttribute("rowspan","3");
                                img = document.createElement("img");
                                img.className = "bpminifigimg";
                                img.src = "https://www.bricklink.com/ML/" + minifig.blid + ".jpg";
                                td.appendChild(img);
                                td.appendChild(document.createElement("p"));
                                let p = document.createElement("p");
                                p.className = "bpp";
                                // unique
                                if(minifig.unique) {
                                    p.className = "bppunique";
                                    p.title = "Unique to this set"
                                }
                                p.textContent = minifig.name;
                                td.appendChild(p);
                                p = document.createElement("p");
                                p.className = "bpp";
                                p.textContent = "x" + minifig.count;
                                td.appendChild(p);
                            tr.appendChild(td);
                        });
                    table.appendChild(tr);
                    tr = document.createElement("tr");
                        td = document.createElement("td");
                        td.className = "bplabeltd";
                            let labels = ["Year","Source","Pieces","Minifigs","RRP","PPP","Value (used)"];
                            labels.forEach(label => {
                                let p = document.createElement("p");
                                p.className = "bpp";
                                p.textContent = label + ":";
                                td.appendChild(p);
                            });
                        tr.appendChild(td);
                        td = document.createElement("td");
                        td.className = "bpstatstd";
                            // get minifig count
                            let minifigCount = 0;
                            set.minifigs.forEach(minifig => {
                                minifigCount += minifig.count;
                            });
                            // get current value
                            let value = "N/A";
                            if(set.current) {
                                value = "~$" + set.current;
                            };
                            let stats = [
                                set.year,
                                set.subtheme,
                                set.pieces,
                                minifigCount,
                                "$" + set.rrp,
                                Math.round(set.rrp / set.pieces * 1000) / 10 + "c",
                                value
                            ];
                            stats.forEach(stat => {
                                let p = document.createElement("p");
                                p.className = "bpp";
                                p.textContent = stat;
                                td.appendChild(p);
                            });
                        tr.appendChild(td);
                    table.appendChild(tr);
                    tr = document.createElement("tr");
                        td = document.createElement("td");
                        td.className = "bptd";
                        td.setAttribute("colspan","2")
                            let a = document.createElement("a");
                            a.href = "https://www.bricklink.com/v2/catalog/catalogitem.page?S=" + set.number;
                            a.title = "View on Bricklink";
                                img = document.createElement("img");
                                img.className = "bplinkimg";
                                img.src = "https://static.bricklink.com/renovate/img/favicon/favicon-32x32.png";
                                img.alt = "Bricklink";
                                a.appendChild(img);
                            td.appendChild(a);
                            a = document.createElement("a");
                            a.href = "https://brickset.com/sets/" + set.number + "/" + set.name.replace("& ","").replace(" ","-");
                            a.title = "View on Brickset";
                                img = document.createElement("img");
                                img.className = "bplinkimg";
                                img.src = "https://brickset.com/assets/images/icons/favicon-32x32.png";
                                img.alt = "Brickset";
                                a.appendChild(img);
                            td.appendChild(a);
                        tr.appendChild(td);
                    table.appendChild(tr);
                bpDiv.appendChild(table);
            });
        });
});