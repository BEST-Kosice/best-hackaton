// Fade in elements when they come into view
function handleScroll() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
        }
    });
}

// Countdown Timer
function updateCountdown() {
    const registrationDate = new Date('2026-01-15T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = registrationDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<div class="col-span-4 text-center"><span class="text-2xl font-bold text-[#990033]">Registrácia je otvorená!</span></div>';
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            if (!targetId) return; // Ignore empty hashes
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                // Calculate target position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll with easing
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Handle initial hash in URL
function handleInitialHash() {
    const hash = window.location.hash;
    if (hash && hash !== '#' && hash.length > 1) { // Проверяем, что хэш не пустой и не просто #
        const targetId = hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Небольшая задержка, чтобы дать странице полностью загрузиться
            setTimeout(() => {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll handler
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Initialize countdown
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Initialize smooth scroll
    initSmoothScroll();
    
    // Handle initial hash only if it exists and is not empty
    handleInitialHash();
});
