document.addEventListener('DOMContentLoaded', () => {
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

/* 1. Interactive Card Aura Tracking */
function initMouseGlow() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        const blob = card.querySelector('.glow-blob');
        if (!blob) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blob.style.left = `${x}px`;
            blob.style.top = `${y}px`;
        });
    });
}

/* 2. Premium Viewport Lift Transitions */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

/* 3. Article Category Filter Matrix (Robust Fix) */
function initCategoryFilter() {
    const buttons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-feed .article-card');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Handle active styling
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetFilter = button.getAttribute('data-filter');

            // Handle visibility directly via block display overrides
            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');

                if (targetFilter === 'all' || articleCategory === targetFilter) {
                    article.style.display = 'block';
                    // Re-trigger visual fade alignment
                    setTimeout(() => {
                        article.style.opacity = '1';
                        article.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}
