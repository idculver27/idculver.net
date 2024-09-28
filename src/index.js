var firstClick = true;
var nameIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
	isaacDiv.addEventListener("click", () => {
		if(firstClick) {
			firstClick = false;
		} else {
			randomName();
		}
	});
});

function randomName() {
	// new random number
	let newIndex;
	while(true) {
		newIndex = Math.floor(Math.random() * isaacDiv.children.length);
		if(newIndex != nameIndex) {
			break;
		}
	}

	isaacDiv.children[nameIndex].setAttribute("hidden",true);
	isaacDiv.children[newIndex].removeAttribute("hidden");
	
	nameIndex = newIndex;
}