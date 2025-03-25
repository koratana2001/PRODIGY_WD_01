window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) { // Change 50 to the height where you want the change to occur
        nav.style.backgroundColor = 'rgba(0, 0, 255, 0.8)'; // New background color when scrolled
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Initial background color when not scrolled
    }
});
