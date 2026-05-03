/* Global JavaScript for Portfolio Website */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const sunIconMobile = document.getElementById('theme-icon-sun-mobile');
    const moonIconMobile = document.getElementById('theme-icon-moon-mobile');

    if (savedTheme === 'light') {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
        sunIconMobile?.classList.remove('hidden');
        moonIconMobile?.classList.add('hidden');
    } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
        sunIconMobile?.classList.add('hidden');
        moonIconMobile?.classList.remove('hidden');
    }

    window.currentTheme = savedTheme;
}

function toggleTheme() {
    const body = document.body;
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const sunIconMobile = document.getElementById('theme-icon-sun-mobile');
    const moonIconMobile = document.getElementById('theme-icon-moon-mobile');

    if (window.currentTheme === 'dark') {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
        sunIconMobile?.classList.remove('hidden');
        moonIconMobile?.classList.add('hidden');
        window.currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
        sunIconMobile?.classList.add('hidden');
        moonIconMobile?.classList.remove('hidden');
        window.currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}

function toggleTOC() {
    const tocContent = document.getElementById('toc-content');
    const chevron = document.getElementById('toc-chevron');
    if (tocContent && chevron) {
        tocContent.classList.toggle('open');
        chevron.classList.toggle('rotate');
    }
}

function initTOCScroll() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const tocLinks = document.querySelectorAll('.toc-link');

        if (sections.length === 0 || tocLinks.length === 0) return;

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function copyCode(button) {
    const codeBlock = button.nextElementSibling.querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTOCScroll();
});
