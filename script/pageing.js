let allPhones = Array.from(document.querySelectorAll(".phone"));
let prePage = document.querySelector(".prePage");
let nextPage = document.querySelector(".nextPage");

let size = 3;
let slicesPhones = [];
let currentPage = 0;

for (let i = 0; i <Math.ceil(allPhones.length/size); i++) {
	slicesPhones[i] = allPhones.slice((i*size), (i*size) + size);
}

function clearPages() {
	for (let i = 0; i < slicesPhones.length; i++) {
		for (let j = 0; j < slicesPhones[i].length; j++) {
			slicesPhones[i][j].classList.remove("showPhone");
		}
	}
}

function visibleNextPage() {
	if (prePage.classList.contains("lastPage")) {
		prePage.classList.remove("lastPage");
	}
	if (currentPage + 1 > slicesPhones.length - 1) {
		nextPage.classList.add("lastPage");
		console.log('break');
		return;
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	currentPage += 1;
	clearPages();
	for (let i = 0; i < slicesPhones.length; i++) {
		if (i === currentPage) {
			for (let j = 0; j < slicesPhones[i].length; j+=1) {
				slicesPhones[i][j].classList.add("showPhone");
			}
		}
	}
}

function visiblePrePage() {
	if (nextPage.classList.contains("lastPage")) {
		nextPage.classList.remove("lastPage");
	}
	if (currentPage - 1 === -1) {
		prePage.classList.add("lastPage");
		return;
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	currentPage -= 1;
	clearPages();
	for (let i = 0; i < slicesPhones.length; i++) {
		if (i === currentPage) {
			for (let j = 0; j < slicesPhones[i].length; j+=1) {
				slicesPhones[i][j].classList.add("showPhone");
			}
		}
	}
}

nextPage.addEventListener("click", function (event) {
	event.preventDefault();
	visibleNextPage();
});

prePage.addEventListener("click", function (event) {
	event.preventDefault();
	visiblePrePage();
});