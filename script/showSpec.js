let allButton = document.querySelectorAll(".showMore");
let allReview = document.querySelectorAll(".review");
let layer = document.querySelector(".bgLayer");

function closeReview (review) {
	review.classList.remove('showReview');
	layer.classList.remove('showLayer');
}

function openReview (review) {
	review.classList.add('showReview');
	layer.classList.add('showLayer');
}

for (let i = 0; i < allButton.length; i++) {
	allButton[i].addEventListener("click", function (event) {
		openReview(allReview[i]);
	});

	allReview[i].querySelector(".close").addEventListener("click", function(event) {
		closeReview(allReview[i]);
	});

	layer.addEventListener("click", function(event) {
		closeReview(allReview[i]);
	});
}
