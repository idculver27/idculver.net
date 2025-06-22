import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

var nodes = [];
var links = [];

window.addEventListener("DOMContentLoaded", () => {
	// fetch("https://idculver.net/api/leitmotifs")
	fetch("../databases/temp.json")
		.then((response) => response.json())
		.then((json) => {
			json.forEach(leitmotif => {
				buildNodes(leitmotif);
			});

			simulate();
		});
});

function buildNodes(leitmotif) {
	// create leitmotif node
	let l_node = {
		id: leitmotif.leitmotif_name,
		class: "leitmotif"
	};
	nodes.push(l_node);

	// song nodes
	for (let song of leitmotif.appearances) {
		const new_song_name = `${song.game_short_title}-${song.track_number}. ${song.track_title}`;

		// make sure song node doesn't already exist
		let song_already_added = false;
		for (let node of nodes) {
			if (node.id === new_song_name) {
				song_already_added = true;
				break;
			}
		}

		// create song node
		if (!song_already_added) {
			let s_node = {
				id: new_song_name,
				class: "song"
			};
			nodes.push(s_node);
		}

		// create link
		let link = {
			source: leitmotif.leitmotif_name,
			target: new_song_name
		};
		links.push(link);
	}
}

function simulate() {
	// initialize simulation
	const svg = d3.select("svg");
	const simulation = d3.forceSimulation(nodes)
		.force("link", d3.forceLink(links).id(d => d.id))
		.force("charge", d3.forceManyBody())
		.force("x", d3.forceX())
		.force("y", d3.forceY())
		.force("center", d3.forceCenter(300, 300)) // fix
		.on("tick", ticked);

	// draw links
	const link = svg.append("g")
		.attr("id", "links")
		.selectAll()
		.data(links)
		.join("line")
		.attr("class", "link");

	// draw nodes
	const node = svg.append("g")
		.attr("id", "nodes")
		.selectAll()
		.data(nodes)
		.join("circle")
		.attr("r", 10)
		.attr("class", d => d.class);

	// draw node labels
	const label = svg.append("g")
		.attr("id", "labels")
		.selectAll()
		.data(nodes)
		.join("text")
		.text(d => d.id)
		.attr("class", "label");

	// update positions each tick
	function ticked() {
		link
			.attr("x1", d => d.source.x)
			.attr("y1", d => d.source.y)
			.attr("x2", d => d.target.x)
			.attr("y2", d => d.target.y);
		node
			.attr("cx", d => d.x)
			.attr("cy", d => d.y);
		label
			.attr("x", d => d.x)
			.attr("y", d => d.y);
	}

	// allow dragging nodes
	node.call(d3.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended));

	// reheat the simulation when drag starts
	// fix the position of the subject (the node being dragged)
	function dragstarted(event) {
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
	function dragended(event) {
		if (!event.active) simulation.alphaTarget(0);
		event.subject.fx = null;
		event.subject.fy = null;
	}
}
