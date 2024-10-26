window.addEventListener("DOMContentLoaded", () => {
	fetch("../data/battlepacks.json")
		.then((response) => response.json())
		.then((json) => {
			json.sets.forEach(set => {
				buildListing(set);
			});
		});
});

function buildListing(set) {
	let listing = `
		<hr>
		<div class="listing">
			<h3>${set.number} ${set.name}</h3>
			<div class="info">
				<table>
					<tr>
						<td>Year:</td>
						<td>${set.year}</td>
					</tr>
					<tr>
						<td>Source:</td>
						<td>${set.subtheme}</td>
					</tr>
					<tr>
						<td>Pieces:</td>
						<td>${set.pieces}</td>
					</tr>
					<tr>
						<td>Minifigs:</td>
						<td>${getMinifigTotal(set.minifigs)}</td>
					</tr>
					<tr>
						<td title="Recommended Retail Price">RRP:</td>
						<td>$${set.rrp}</td>
					</tr>
					<tr>
						<td title="Price Per Piece">PPP:</td>
						<td>${Math.round(set.rrp / set.pieces * 1000) / 10}c</td>
					</tr>
				</table>
				<br>
				<a href="https://www.lego.com/en-us/product/${set.name.toLowerCase().replaceAll(" ", "-")}-${set.number.substring(0, set.number.length - 2)}" title="View on LEGO.com (not available for older sets)">
					<img src="https://www.lego.com/favicon-32x32.png" alt="LEGO.com">
				</a>
				<span class="spacer"></span>
				<a href="https://www.bricklink.com/v2/catalog/catalogitem.page?S=${set.number}" title="View on Bricklink">
					<img src="https://static.bricklink.com/renovate/img/favicon/favicon-32x32.png" alt="Bricklink">
				</a>
				<span class="spacer"></span>
				<a href="https://brickset.com/sets/${set.number}/${set.name.replace("& ", "").replace(".", "").replaceAll(" ", "-")}" title="View on Brickset">
					<img src="https://brickset.com/assets/images/icons/favicon-32x32.png" alt="Brickset">
				</a>
			</div>
			<div class="set">
				<img class="set-pic" src="https://www.bricklink.com/SL/${set.number}.jpg" alt="${set.name}">
			</div>
			<div class="minifig">
				<table>
					${buildMinifigTable(set)}
				</table>
			</div>
		</div>
	`;
	catalog.innerHTML += listing;
}

function buildMinifigTable(set) {
	let picsRow = "<tr>";
	let namesRow = "<tr>";

	set.minifigs.forEach(minifig => {
		for (let i = 0; i < minifig.count; i++) {
			picsRow += `<td><img class="minifig-pic" src="https://www.bricklink.com/ML/${minifig.blid}.jpg" alt="${minifig.name}"></td>`;
		}
		namesRow += `<td colspan="${minifig.count}" style="max-width: ${150 * minifig.count}px;"><p${minifig.unique ? ' class="unique" title="Unique to this set"' : ""}>${minifig.name}</p><i>${minifig.spec}</i></td>`;
	});

	picsRow += "</tr>";
	namesRow += "</tr>";
	return picsRow + namesRow;
}

function getMinifigTotal(minifigs) {
	let minifigTotal = 0;
	minifigs.forEach(minifig => {
		minifigTotal += minifig.count;
	});
	return minifigTotal;
}