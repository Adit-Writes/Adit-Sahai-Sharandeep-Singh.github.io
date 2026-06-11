// 1. Scroll Reveal Animation
// This watches elements as you scroll down and fades them in smoothly
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed so it doesn't animate out and back in
        observer.unobserve(entry.target); 
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// 2. Dynamic Mouse Glow Effect on Cards
// This tracks your cursor and moves a soft gold glow underneath the glass
const glowCards = document.querySelectorAll('.glow-effect');

glowCards.forEach(card => {
    const blob = card.querySelector('.glow-blob');
    
    card.addEventListener('mousemove', (e) => {
        // Get the bounding rectangle of target
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update the blob's position
        blob.style.left = `${x}px`;
        blob.style.top = `${y}px`;
    });
});
