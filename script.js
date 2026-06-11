document.addEventListener('DOMContentLoaded', () => {
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initMouseGlow() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        const blob = card.querySelector('.glow-blob');
        if (!blob) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            blob.style.left = x + 'px';
            blob.style.top = y + 'px';
        });
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => el.classList.remove('active'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

function initCategoryFilter() {
    const buttons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-feed .article-card');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetFilter = button.getAttribute('data-filter');

            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                if (targetFilter === 'all' || articleCategory === targetFilter) {
                    article.style.display = 'block';
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
