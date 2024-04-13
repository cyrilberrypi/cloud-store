document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle visibility of virtual webinar slides
    const toggleSlides = () => {
        const slides = document.querySelector('.slides');
        slides.classList.toggle('show');
    };

    // Event listener for virtual webinar section
    const virtualWebinarSection = document.querySelector('section:nth-of-type(3)');
    virtualWebinarSection.addEventListener('click', toggleSlides);

    // Function to toggle visibility of image slides
    const toggleImageSlides = () => {
        const imageSlides = document.querySelector('.image-slides');
        imageSlides.classList.toggle('show');
    };

    // Event listener for hands-on activity section
    const handsOnActivitySection = document.querySelector('section:nth-of-type(4)');
    handsOnActivitySection.addEventListener('click', toggleImageSlides);
});
