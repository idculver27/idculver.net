window.addEventListener("DOMContentLoaded", () => {
	fetch("../data/battlepacks.json")
		.then((response) => response.json())
		.then((json) => {
			json.sets.forEach(set => {
				// build html
				// yes i know this is disgusting
				bpMainDiv.appendChild(newElement("hr"));
				let div = newElement("div","bpdiv");
					let table = newElement("table","bptable");
						let tr = newElement("tr");
							let td = newElement("td","bpheadertd");
								td.setAttribute("colspan","2");
								let h3 = newElement("h3","bph3");
									h3.textContent = set.number + " " + set.name;
										td.appendChild(h3);
								tr.appendChild(td);
							td = newElement("td","bptd");
								td.setAttribute("rowspan","9");
								let img = newElement("img","bpimg");
									img.src = "https://www.bricklink.com/SL/" + set.number + ".jpg"
									td.appendChild(img);
								tr.appendChild(td);
							// minifigs
							set.minifigs.forEach(minifig => {
								td = newElement("td","bptd");
									td.setAttribute("rowspan","9");
									img = newElement("img","bpminifigimg");
										img.src = "https://www.bricklink.com/ML/" + minifig.blid + ".jpg";
										td.appendChild(img);
									td.appendChild(newElement("p"));
									let p = newElement("p","bpp");
										// unique
										if(minifig.unique) {
											p.className = "bppunique";
											p.title = "Unique to this set"
										}
										p.textContent = minifig.name;
										td.appendChild(p);
									p = newElement("p","bpp");
										p.textContent = "x" + minifig.count;
										td.appendChild(p);
									tr.appendChild(td);
							});
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "Year:";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								td.textContent = set.year;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "Source:";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								td.textContent = set.subtheme;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "Pieces:";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								td.textContent = set.pieces;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "Minifigs:";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								// get minifig count
								let minifigCount = 0;
								set.minifigs.forEach(minifig => {
									minifigCount += minifig.count;
								});
								td.textContent = minifigCount;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "RRP:";
								td.title = "Recommended Retail Price";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								td.textContent = "$" + set.rrp;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "PPP:";
								td.title = "Price Per Piece";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								td.textContent = Math.round(set.rrp / set.pieces * 1000) / 10 + "c";
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bplabeltd");
								td.textContent = "Value (Used):";
								tr.appendChild(td);
							td = newElement("td","bpstatstd");
								// get current value
								let value = "N/A";
								if(set.current) {
									value = "~$" + set.current;
								};
								td.textContent = value;
								tr.appendChild(td);
							table.appendChild(tr);
						tr = newElement("tr");
							td = newElement("td","bptd");
								td.setAttribute("colspan","2")
								let a = newElement("a");
									a.href = "https://www.bricklink.com/v2/catalog/catalogitem.page?S=" + set.number;
									a.title = "View on Bricklink";
									img = newElement("img","bpleftlinkimg");
										img.src = "https://static.bricklink.com/renovate/img/favicon/favicon-32x32.png";
										img.alt = "Bricklink";
										a.appendChild(img);
									td.appendChild(a);
								a = newElement("a");
									a.href = "https://brickset.com/sets/" + set.number + "/" + set.name.replace("& ","").replace(".","").replace(/ /g,"-");
									a.title = "View on Brickset";
									img = newElement("img");
										img.src = "https://brickset.com/assets/images/icons/favicon-32x32.png";
										img.alt = "Brickset";
										a.appendChild(img);
									td.appendChild(a);
								tr.appendChild(td);
							table.appendChild(tr);
						div.appendChild(table);
					bpMainDiv.appendChild(div);
			});
		});
});

function newElement(childType, className="") {
	let child = document.createElement(childType);
	if(className) {
		child.className = className;
	}
	return child;
}