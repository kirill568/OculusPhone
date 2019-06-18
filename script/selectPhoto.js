let allPhotos = document.querySelectorAll(".photo");
let allDots = document.querySelectorAll(".dots");

let number = 1;
let numberGroup = 1;
let groupDots = [];

function showImage (dots) {
	let classNames = dots.className.split(/\s+/);
	let groupName = classNames[1];
	let classNumber = classNames[2];
	let dotsAll = document.querySelectorAll(`.dots.${groupName}`);
	let photos = document.querySelectorAll(`.photo.${groupName}`);
	let photo = document.querySelector(`.photo.${groupName}.${classNumber}`);
	for (let i = 0; i < photos.length; i++) {
		photos[i].classList.remove('show');
		dotsAll[i].classList.remove('selectedDots');
	}
	dots.classList.add('selectedDots');
	photo.classList.add('show');
}

function addListener(dots) {
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", function(event) {
			showImage(dots[i]);
		});
	}
}

for (let i = 0; i <= allPhotos.length; i++) {
	
	if (i % 3 === 0 && i !== 0) {
		addListener(groupDots);
		groupDots = [];
		numberGroup += 1;
		number = 1;
	}
	if (i === allPhotos.length) {
		break;
	}
	allPhotos[i].classList.add(`numberGroup${numberGroup}`);
	allDots[i].classList.add(`numberGroup${numberGroup}`);
	allDots[i].classList.add(`number${number}`);
	allPhotos[i].classList.add(`number${number}`);
	groupDots.push(allDots[i]);
	number +=1
}

