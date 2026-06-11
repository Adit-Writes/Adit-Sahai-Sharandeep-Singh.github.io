document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    // Orb definitions — only blues, purples, deep magentas. No green, no brown.
    const ORB_CONFIGS = [
        { size: 72, color: '#1a3a8f', color2: '#0a1f5c', blur: 90,  opacity: 0.85 },
        { size: 62, color: '#3b1d82', color2: '#1a0d48', blur: 85,  opacity: 0.80 },
        { size: 58, color: '#0f3472', color2: '#071c42', blur: 95,  opacity: 0.75 },
        { size: 50, color: '#5a1070', color2: '#2c0838', blur: 80,  opacity: 0.80 },
        { size: 44, color: '#8b1a6b', color2: '#45083a', blur: 88,  opacity: 0.70 },
        { size: 54, color: '#1e2a8a', color2: '#0c1450', blur: 92,  opacity: 0.75 },
    ];

    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Each orb gets its own state machine
    const orbs = ORB_CONFIGS.map((cfg, i) => {
        const el = document.createElement('div');
        el.className = 'bg-orb';

        const sizePx = Math.round(vw * cfg.size / 100);
        el.style.cssText = `
            width:${sizePx}px; height:${sizePx}px;
            background: radial-gradient(circle, ${cfg.color} 0%, ${cfg.color2} 45%, transparent 72%);
            filter: blur(${cfg.blur}px);
            opacity: 0;
            transition: opacity 3s ease;
        `;
        canvas.appendChild(el);

        // Random starting position spread across full viewport
        const startX = Math.random() * (vw + sizePx) - sizePx / 2;
        const startY = Math.random() * (vh + sizePx) - sizePx / 2;

        const state = {
            el,
            sizePx,
            opacity: cfg.opacity,
            // current position (center of orb)
            x: startX,
            y: startY,
            // target position
            tx: 0, ty: 0,
            // velocity
            vx: 0, vy: 0,
            // travel duration and elapsed for this segment (ms)
            duration: 0,
            elapsed: 0,
            // origin of this segment
            ox: startX, oy: startY,
        };

        // Position orb immediately at start
        el.style.left = (state.x - sizePx / 2) + 'px';
        el.style.top  = (state.y - sizePx / 2) + 'px';

        // Staggered fade-in
        setTimeout(() => { el.style.opacity = cfg.opacity; }, i * 300);

        // Pick first target
        pickTarget(state, vw, vh);

        return state;
    });

    function pickTarget(state, vw, vh) {
        // Target can be anywhere — including partially off-screen edges
        state.ox = state.x;
        state.oy = state.y;
        state.tx = Math.random() * (vw  * 1.3) - vw  * 0.15;
        state.ty = Math.random() * (vh  * 1.3) - vh  * 0.15;
        // Travel time: 18–36 seconds so movement feels slow and dreamy
        state.duration = 18000 + Math.random() * 18000;
        state.elapsed  = 0;
    }

    // Smooth ease in-out cubic
    function easeInOut(t) {
        return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    }

    let last = performance.now();

    function tick(now) {
        const dt = now - last;
        last = now;

        orbs.forEach(state => {
            state.elapsed += dt;
            const t = Math.min(state.elapsed / state.duration, 1);
            const e = easeInOut(t);

            state.x = state.ox + (state.tx - state.ox) * e;
            state.y = state.oy + (state.ty - state.oy) * e;

            state.el.style.left = (state.x - state.sizePx / 2) + 'px';
            state.el.style.top  = (state.y - state.sizePx / 2) + 'px';

            // Arrived — pick a new target
            if (t >= 1) {
                pickTarget(state, window.innerWidth, window.innerHeight);
            }
        });

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
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
