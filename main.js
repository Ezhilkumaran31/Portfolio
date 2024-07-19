var Typed=new Typed(".text",{
    strings:["Student","Frontend Developer","Fresher"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Function to "refresh" content of a section
    function refreshSection(section) {
        // You can add any custom logic to refresh the section's content here
        // For now, we'll just reinsert the section's inner HTML
        const originalContent = section.innerHTML;
        section.innerHTML = '';
        section.innerHTML = originalContent;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                refreshSection(section);
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
