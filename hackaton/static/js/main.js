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
    // Check if countdown elements exist on the page
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownElement = document.getElementById('countdown');
    
    // If none of the countdown elements exist, return early
    if (!daysElement && !hoursElement && !minutesElement && !secondsElement && !countdownElement) {
        return;
    }
    
    const registrationDate = new Date('2026-01-15T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = registrationDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Safely update elements if they exist
    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');

    if (distance < 0 && countdownElement) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = '<div class="col-span-4 text-center"><span class="text-2xl font-bold text-[#990033]">Registrácia je otvorená!</span></div>';
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

// Tab functionality for data statistics carousel
function initTabs() {
    // Direct approach for the specific tab structure in sponsors.html
    const tabsSection = document.querySelector('div[id="data-tabs"]');
    
    if (!tabsSection) {
        console.log('No tabs section found');
        return; // No tabs section found
    } else {
        console.log('Tabs section found');
    }
    
    const tabButtons = tabsSection.querySelectorAll('button[role="tab"]');
    const tabPanels = tabsSection.querySelectorAll('div[role="tabpanel"]');
    
    console.log('Found', tabButtons.length, 'tab buttons and', tabPanels.length, 'tab panels');
    
    if (tabButtons.length === 0 || tabPanels.length === 0) {
        return; // No tabs found
    }
    
    // Add click event listeners to each tab button
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            console.log('Tab clicked:', this.textContent.trim(), 'index:', index);
            
            // Deactivate all buttons and hide all panels
            tabButtons.forEach(btn => {
                btn.setAttribute('aria-selected', 'false');
                btn.setAttribute('data-state', 'inactive');
            });
            
            tabPanels.forEach(panel => {
                panel.setAttribute('data-state', 'inactive');
                panel.setAttribute('hidden', '');
            });
            
            // Activate clicked button
            this.setAttribute('aria-selected', 'true');
            this.setAttribute('data-state', 'active');
            
            // Show corresponding panel
            if (tabPanels[index]) {
                tabPanels[index].setAttribute('data-state', 'active');
                tabPanels[index].removeAttribute('hidden');
                console.log('Showing panel at index:', index);
            } else {
                console.error('Panel not found at index:', index);
            }
        });
    });
    
    console.log('Tab functionality initialized with direct approach');
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
    
    // Initialize tabs functionality
    initTabs();
});
