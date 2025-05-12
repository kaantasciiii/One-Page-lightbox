document.addEventListener('DOMContentLoaded', function() {
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    let currentImageIndex = 0;
    
    // Open lightbox on image click
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            caption.textContent = this.alt;
            currentImageIndex = index;
        });
    });
    
    // Close lightbox when clicking on X
    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Navigate to previous image
    prev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        caption.textContent = galleryImages[currentImageIndex].alt;
    });
    
    // Navigate to next image
    next.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        caption.textContent = galleryImages[currentImageIndex].alt;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
                lightboxImg.src = galleryImages[currentImageIndex].src;
                caption.textContent = galleryImages[currentImageIndex].alt;
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
                lightboxImg.src = galleryImages[currentImageIndex].src;
                caption.textContent = galleryImages[currentImageIndex].alt;
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });
}); 