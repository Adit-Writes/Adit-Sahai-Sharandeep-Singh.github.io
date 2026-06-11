/**
 * THE SAHAI ANALOGY - ENGINE SCRIPT
 * Handles UI interactions, mouse aura tracking, and scroll reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMouseGlow();
    initScrollReveal();
    initDynamicArticles();
});

/* ==========================================================================
   1. INTERACTIVE MOUSE GLOW
   Tracks cursor coordinates to move the gold ambient glow inside glass cards.
   ========================================================================== */
function initMouseGlow() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        const blob = card.querySelector('.glow-blob');
        if (!blob) return; // Skip if card doesn't have a glow element

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card boundaries
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Smoothly update the blob position
            blob.style.left = `${x}px`;
            blob.style.top = `${y}px`;
        });
    });
}

/* ==========================================================================
   2. SCROLL REVEAL ANIMATION
   Triggers a premium fade-in lift effect as elements enter the viewport.
   ========================================================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 80; // Pixels from bottom before triggering

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Listen to scroll events and run once immediately to catch items already on screen
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/* ==========================================================================
   3. PAGES CMS INTEGRATION PLACEHOLDER
   Since your site runs on a pure static architecture (.nojekyll), Pages CMS 
   works best by writing your posts to a structured JSON data file.
   ========================================================================== */
function initDynamicArticles() {
    // This is where your asynchronous fetch architecture will go to read 
    // your Pages CMS collection folder (e.g., fetching a generated articles.json)
    console.log("The Sahai Analogy Core Engine Initialized Successfully.");
}
