// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    try {
        var typed = new Typed(".text", {
            strings: ["Student", "Frontend Developer", "Fresher"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } catch (error) {
        console.error("Typed.js initialization failed:", error);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Target specific sections by class or ID
    const sectionsToRefresh = document.querySelectorAll('.services, .skill'); 

    function refreshSection(section) {
        try {
            // Store original content
            const originalContent = section.innerHTML;

            // Clear and reinsert content
            section.innerHTML = '';
            section.innerHTML = originalContent;
        } catch (error) {
            console.error("Error refreshing section:", error);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                refreshSection(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sectionsToRefresh.forEach(section => {
        observer.observe(section);
    });
});

// Toggle navbar visibility
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
