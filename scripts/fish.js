window.addEventListener("DOMContentLoaded", () => {
	buildTableOcean();
});

function buildTableOcean() {
	fetch("../databases/fish.json")
		.then((response) => response.json())
		.then((json) => {
			json["Ocean"].forEach(fish => {
				let tr = document.createElement("tr");
				tr.innerHTML = `<td><img src="images/fish/${fish.fish_name.replace(" ", "_")}.png"><span>${fish.fish_name}</span></td>`;
				tr.innerHTML += `<td style="text-align: right;">${fish.base_price}g</td>`;
				tr.innerHTML += `<td>${fish.season}</td>`
				tr.innerHTML += `<td>${fish.weather}</td>`
				tr.innerHTML += `<td>${fish.time}</td>`
				if (fish.bundle_name) tr.innerHTML += `<td class="centered"><img src="images/fish/${fish.bundle_name.replaceAll(" ", "_")}.png" title="${fish.bundle_name}"></td>`;
				else tr.innerHTML += "<td></td>";
				tableOcean.appendChild(tr);
			});
		});
}
