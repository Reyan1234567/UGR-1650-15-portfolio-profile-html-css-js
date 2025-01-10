var ham = document.querySelector("#hamburger");
var menu = document.querySelector("#main-menu");
var img = document.querySelector("#logo");
var ex = document.querySelector("#close");

ham.addEventListener("click", () => {
  menu.style.display = "flex";
  ham.style.display = "none";
  ex.style.display = "inline";
});

ex.addEventListener("click", () => {
  menu.style.display = "none";
  ham.style.display = "inline";
  ex.style.display = "none";
});

const videoFigures = document.querySelectorAll(".video-list figure");
const prevButton = document.querySelector(".nav-button.prev");
const nextButton = document.querySelector(".nav-button.next");
let currentIndex = 0;

function updateCarousel() {
    videoFigures.forEach((figure, index) => {
        figure.style.display = index === currentIndex ? "block" : "none";
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + videoFigures.length) % videoFigures.length;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % videoFigures.length;
    updateCarousel();
});

updateCarousel();
