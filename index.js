//modal
window.onload = function () {
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

// slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.contentSlide');
let counter = 0;

const slideShow = () => {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	counter++;

	if (counter > slides.length) {
		counter = 1;
	}
	slides[counter - 1].style.display = 'block';
	setTimeout(slideShow, 3000);
}

slideShow();

