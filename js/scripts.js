    // Toggle mobile menu
    document.querySelector('.hamburger').addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    const themeToggleBtn = document.getElementById('themeToggle');
const rootElement = document.documentElement;

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scroll (Optional if you want extra smoothness for older browsers)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// projects redirect
document.getElementById('projectsRedirect').addEventListener('click', function () {
    window.location.href = 'projects.html'; // Redirect to projects.html
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('projectsRedirect').addEventListener('click', function () {
        window.location.href = 'projects.html'; // Redirect to projects.html
    });
});

// experience redirect
document.getElementById('ExperienceRedirect').addEventListener('click', function () {
    window.location.href = 'experience.html'; // Redirect to experience.html
});

// education redirect
document.getElementById('EducationRedirect').addEventListener('click', function () {
    window.location.href = 'education.html'; // Redirect to education.html
});