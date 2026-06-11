document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    for (let i = 0; i < 6; i++) {
        const orb = document.createElement('div');
        orb.className = 'bg-orb';
        canvas.appendChild(orb);
    }
    document.body.prepend(canvas);

    // Subtle scroll parallax — each orb drifts at a different rate
    const orbs = canvas.querySelectorAll('.bg-orb');
    const rates = [0.04, -0.03, 0.06, -0.05, 0.03, -0.04];
    window.addEventListener('scroll', () => {
        const sy = window.scrollY;
        orbs.forEach((orb, i) => {
            orb.style.marginTop = (sy * rates[i]) + 'px';
        });
    }, { passive: true });
}

function initMouseGlow() {
    document.querySelectorAll('.glass-card').forEach(card => {
        const blob = card.querySelector('.glow-blob');
        if (!blob) return;

        card.addEventListener('mouseenter', () => {
            blob.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            blob.style.opacity = '0';
        });
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            blob.style.left = (e.clientX - rect.left) + 'px';
            blob.style.top  = (e.clientY - rect.top)  + 'px';
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
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(el => observer.observe(el));
}

function initCategoryFilter() {
    const buttons  = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-feed .article-card');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetFilter = button.getAttribute('data-filter');
            articles.forEach(article => {
                const cat = article.getAttribute('data-category');
                if (targetFilter === 'all' || cat === targetFilter) {
                    article.style.display = 'block';
                    setTimeout(() => {
                        article.style.opacity   = '1';
                        article.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}
