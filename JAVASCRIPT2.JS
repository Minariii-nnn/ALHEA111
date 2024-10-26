function filterImages(category) {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        // Show all images if the category is 'ALL'
        if (category.toUpperCase() === 'ALL' || img.getAttribute('data-category').toUpperCase() === category.toUpperCase()) {
            img.style.display = 'block'; // Show the image
        } else {
            img.style.display = 'none'; // Hide the image
        }
    });
}