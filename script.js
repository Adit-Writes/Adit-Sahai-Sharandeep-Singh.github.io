document.addEventListener('DOMContentLoaded', () => {
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

/* 1. Mouse Aura Glow */
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

/* 2. Scroll Animations */
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

/* 3. Live Category Filtering Engine */
function initCategoryFilter() {
    const buttons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-feed .article-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active status from all buttons, assign to clicked button
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetFilter = button.getAttribute('data-filter');

            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');

                if (targetFilter === 'all' || articleCategory === targetFilter) {
                    article.classList.remove('hidden');
                } else {
                    article.classList.add('hidden');
                }
            });
        });
    });
}
