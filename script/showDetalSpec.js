let allNameSpec = document.querySelectorAll(".nameSpec");
let allMoreSpec = document.querySelectorAll(".moreSpec");

function showDetalSpec(spec) {
	for (let i = 0; i < allMoreSpec.length; i++) {
		allMoreSpec[i].classList.add("hide");
	}
	spec.classList.remove("hide");
}

for (let i = 0; i < allNameSpec.length; i++) {
	allNameSpec[i].addEventListener("click", function (event) {
		showDetalSpec(allMoreSpec[i]);
	});
}