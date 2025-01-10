var ham = document.querySelector("#hamburger");
var menu = document.querySelector("#main-menu");
var img=document.querySelector("#logo")
var ex=document.querySelector("#close")

ham.addEventListener("click", () => {
    menu.style.display="flex"
    ham.style.display="none"
    ex.style.display="inline"
});

ex.addEventListener("click", () => {
    menu.style.display="none"
    ham.style.display="inline"
    ex.style.display="none"
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const indicators = document.querySelectorAll('.indicator');

let currentSlideIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex);
    });
}

nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlideIndex = index;
        updateCarousel();
    });
});
