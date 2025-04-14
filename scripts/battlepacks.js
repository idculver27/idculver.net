window.addEventListener("DOMContentLoaded", () => {
	fetch("../databases/battlepacks.json")
		.then((response) => response.json())
		.then((json) => {
			json.forEach(set => {
				buildListing(set);
			});
		});
});

function buildListing(set) {
	let listing = `
		<hr>
		<div class="listing">
			<h3>${set.set_id} ${set.set_name}</h3>
			<div class="info">
				<table>
					<tr>
						<td>Year:</td>
						<td>${set.release_year}</td>
					</tr>
					<tr>
						<td>Source:</td>
						<td>${set.source_short_title}</td>
					</tr>
					<tr>
						<td>Pieces:</td>
						<td>${set.piece_count}</td>
					</tr>
					<tr>
						<td>Minifigs:</td>
						<td>${getMinifigTotal(set.minifigs)}</td>
					</tr>
					<tr>
						<td title="Manufacturer's Suggested Retail Price">MSRP:</td>
						<td>$${set.msrp}</td>
					</tr>
					<tr>
						<td title="Price Per Piece">PPP:</td>
						<td>${Math.round(set.msrp / set.piece_count * 1000) / 10}c</td>
					</tr>
				</table>
				<br>
				<a href="https://www.lego.com/en-us/product/${set.set_name.toLowerCase().replaceAll(" ", "-")}-${set.set_id}" title="View on LEGO.com (not available for older sets)">
					<img src="https://www.lego.com/favicon-32x32.png" alt="LEGO.com">
				</a>
				<span class="spacer"></span>
				<a href="https://www.bricklink.com/v2/catalog/catalogitem.page?S=${set.set_id}-1" title="View on Bricklink">
					<img src="https://static.bricklink.com/renovate/img/favicon/favicon-32x32.png" alt="Bricklink">
				</a>
				<span class="spacer"></span>
				<a href="https://brickset.com/sets/${set.set_id}-1/${set.set_name.replace("& ", "").replace(".", "").replaceAll(" ", "-")}" title="View on Brickset">
					<img src="https://brickset.com/assets/images/icons/favicon-32x32.png" alt="Brickset">
				</a>
			</div>
			<div class="set">
				<img class="set-pic" src="https://img.bricklink.com/ItemImage/ON/0/${set.set_id}-1.png" alt="Box">
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
			picsRow += `<td><img class="minifig-pic" src="https://www.bricklink.com/ML/${minifig.bl_id}.jpg" alt="${minifig.minifig_name}"></td>`;
		}
		namesRow += `<td colspan="${minifig.count}" style="max-width: ${150 * minifig.count}px;"><p${minifig.is_unique ? ' class="unique" title="Unique to this set!"' : ""}>${minifig.minifig_name}</p><i>${minifig.specification ? minifig.specification : ""}</i></td>`;
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
