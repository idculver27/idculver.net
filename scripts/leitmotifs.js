import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

var nodes = [];
var links = [];

window.addEventListener("DOMContentLoaded", () => {
	// fetch("https://idculver.net/api/leitmotifs")
	fetch("../databases/temp.json")
		.then((response) => response.json())
		.then((json) => {
			json.forEach(row => {
				buildLinks(row);
			});

			simulate();
		});
});

function buildLinks(row) {
	const leitmotif_id = row.leitmotif_name.replaceAll(/[^\w]/g, "");
	const song_id = `${row.game_short_title}-${row.track_number}`;

	// add link
	const new_link = {
		source: leitmotif_id,
		target: song_id
	}
	links.push(new_link);

	// identify missing nodes
	let leitmotif_already_added = false;
	let song_already_added = false;
	for (let node of nodes) {
		if (node.id === leitmotif_id) leitmotif_already_added = true;
		else if (node.id === song_id) song_already_added = true;
		if (leitmotif_already_added && song_already_added) break;
	}

	// add missing nodes
	if (!leitmotif_already_added) {
		let new_node = {
			id: leitmotif_id,
			class: "leitmotif",
			name: row.leitmotif_name,
		}
		nodes.push(new_node);
	}
	if (!song_already_added) {
		let new_node = {
			id: song_id,
			class: "song",
			name: row.track_title
		}
		nodes.push(new_node);
	}
}

function simulate() {
	// initialize simulation
	const xystrength = 0.15;
	const simulation = d3.forceSimulation(nodes)
		.force("link", d3.forceLink(links).id(d => d.id))
		.force("charge", d3.forceManyBody().strength(-100))
		.force("x", d3.forceX().strength(xystrength))
		.force("y", d3.forceY().strength(xystrength));

	// draw SVG container
	const width = 1800;
	const height = 800;
	const svg = d3.select("#canvas")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [-width / 2, -height / 2, width, height]);

	// draw links
	const link = svg.append("g")
		.attr("id", "links")
		.selectAll()
		.data(links)
		.join("line")
		.attr("class", "link");

	// draw song nodes
	const song = svg.append("g")
		.attr("id", "songs")
		.selectAll()
		.data(nodes.filter(d => d.class === "song"))
		.join("circle")
		.attr("r", 5)
		.attr("class", d => nodeClass(d))
	song.append("title")
		.text(d => d.name);
	song.on("click", event => updateInfoPanel(event));
	song.call(d3.drag()
		.on("start", dragStarted)
		.on("drag", dragged)
		.on("end", dragEnded));

	// draw leitmotif nodes
	const leitmotif = svg.append("g")
		.attr("id", "leitmotifs")
		.selectAll()
		.data(nodes.filter(d => d.class === "leitmotif"))
		.join("image")
		.attr("id", d => `sprite${d.id}`)
		.attr("href", d => `../images/leitmotifs/${d.name.replace("?", "")}.png`)
	leitmotif.append("title")
		.text(d => d.name);
	leitmotif.on("click", event => updateInfoPanel(event));
	leitmotif.call(d3.drag()
		.on("start", dragStarted)
		.on("drag", dragged)
		.on("end", dragEnded));

	// update positions each tick
	simulation.on("tick", () => {
		link
			.attr("x1", d => d.source.x)
			.attr("y1", d => d.source.y)
			.attr("x2", d => d.target.x)
			.attr("y2", d => d.target.y);
		song
			.attr("cx", d => d.x)
			.attr("cy", d => d.y);
		leitmotif
			.attr("x", d => getSpriteX(d)[0])
			.attr("y", d => getSpriteX(d)[1]);
	});

	// reheat the simulation when drag starts
	// fix the position of the subject (the node being dragged)
	function dragStarted(event) {
		if (!event.active) simulation.alphaTarget(0.3).restart();
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	// update the position of the subject
	function dragged(event) {
		event.subject.fx = event.x;
		event.subject.fy = event.y;
	}

	// allow the simulation to cool
	// unfix the position of the subject
	function dragEnded(event) {
		if (!event.active) simulation.alphaTarget(0);
		event.subject.fx = null;
		event.subject.fy = null;
	}
}

function nodeClass(node) {
	if (node.class === "song") return `song ${node.id.substring(0, 2).toLowerCase()}`;
	return node.class;
}

function updateInfoPanel(event) {
	console.log(event);
}

function getSpriteX(node) {
	const sprite = document.getElementById(`sprite${node.id}`);
	const rect = sprite.getBoundingClientRect();
	const x = node.x - (rect.width / 2);
	const y = node.y - (rect.height / 2);
	return [x, y];
}
