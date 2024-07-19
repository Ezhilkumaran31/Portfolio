// Initialize Typed.js for text animation
var Typed = new Typed(".text", {
    strings: ["Student", "Frontend Developer", "Fresher"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to refresh content of a section
function refreshSection(section) {
    // Example: Simply re-rendering the section's inner HTML
    const originalContent = section.innerHTML;
    section.innerHTML = '';
    section.innerHTML = originalContent;
}

// Initialize IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                refreshSection(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Handle hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    } else {
        console.error("Menu toggle or navbar element not found.");
    }
});
