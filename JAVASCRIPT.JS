let currentSlide = 0;
const slides = document.querySelectorAll(".slider-images img");
const totalSlides = slides.length;

function showSlide(slideIndex) {
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);