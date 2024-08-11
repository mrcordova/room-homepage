let slideIdx = 1;
const arrows = document.querySelectorAll(".arrows > button");
showSlides(slideIdx);

function currentSlide(e) {
  const val = parseInt(e.currentTarget.getAttribute("data-value"));

  showSlides((slideIdx += val));
}

function showSlides(n) {
  let i;

  let slides = document.querySelectorAll(".mySlides");
  let descSlides = document.querySelectorAll(".myDescSlides");

  if (n > slides.length) {
    slideIdx = 1;
  }
  if (n < 1) {
    slideIdx = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.toggle("hide", true);
    descSlides[i].classList.toggle("hide", true);
  }

  slides[slideIdx - 1].classList.toggle("hide", false);
  descSlides[slideIdx - 1].classList.toggle("hide", false);
}

for (const arrow of arrows) {
  arrow.addEventListener("click", currentSlide);
}
