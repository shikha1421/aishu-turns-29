// Slideshow: Show one image at a time and change every 5 seconds
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';  // Hide all slides
    });
    currentSlide = (currentSlide + 1) % totalSlides;  // Increment the slide
    slides[currentSlide].style.display = 'block';  // Show the current slide
}

setInterval(changeSlide, 5000);  // Change slide every 5 seconds
changeSlide();  // Show first slide initially
