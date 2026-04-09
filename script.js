
function toggle(id, btn) {
    const content = document.getElementById(id);
    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        btn.textContent = "Hide Notes";
    } else {
        btn.textContent = "View Notes";
    }
}


// Scroll to top button
const scroll = document.getElementById('scrollToTop');
if (scroll) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scroll.style.display = 'block';
        } else {
            scroll.style.display = 'none';
        }
    });

    scroll.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = darkModeToggle.querySelector('svg.tabler-icon-sun');
const moonIcon = darkModeToggle.querySelector('svg.icon-moon');

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        darkModeToggle.classList.remove('light');
        darkModeToggle.classList.add('dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        darkModeToggle.classList.remove('dark');
        darkModeToggle.classList.add('light');
    }
}

darkModeToggle.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
