document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    const ORB_CONFIGS = [
        { size: 72, color: '#1a2d8f', color2: '#090f3a', blur: 100, opacity: 0.90 },
        { size: 60, color: '#0e3080', color2: '#06152e', blur: 95,  opacity: 0.85 },
        { size: 54, color: '#3a1278', color2: '#160840', blur: 90,  opacity: 0.85 },
        { size: 50, color: '#8a5a00', color2: '#3a2000', blur: 88,  opacity: 0.80 },
        { size: 46, color: '#8a2e00', color2: '#3a1000', blur: 85,  opacity: 0.75 },
        { size: 56, color: '#7a0a20', color2: '#300008', blur: 92,  opacity: 0.80 },
    ];

    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

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

        const startX = Math.random() * (vw + sizePx) - sizePx / 2;
        const startY = Math.random() * (vh + sizePx) - sizePx / 2;

        const state = {
            el, sizePx, opacity: cfg.opacity,
            x: startX, y: startY,
            tx: 0, ty: 0,
            vx: 0, vy: 0,
            duration: 0, elapsed: 0,
            ox: startX, oy: startY,
        };

        el.style.left = (state.x - sizePx / 2) + 'px';
        el.style.top  = (state.y - sizePx / 2) + 'px';

        setTimeout(() => { el.style.opacity = cfg.opacity; }, i * 300);
        pickTarget(state, vw, vh);
        return state;
    });

    window._orbStates = orbs;

    function pickTarget(state, vw, vh) {
        state.ox = state.x;
        state.oy = state.y;
        state.tx = Math.random() * (vw  * 1.3) - vw  * 0.15;
        state.ty = Math.random() * (vh  * 1.3) - vh  * 0.15;
        state.duration = 24000 + Math.random() * 24000;
        state.elapsed  = 0;
    }

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

        card.addEventListener('mouseenter', () => { blob.style.opacity = '1'; });
        card.addEventListener('mouseleave', () => { blob.style.opacity = '0'; });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            blob.style.left = (e.clientX - rect.left) + 'px';
            blob.style.top  = (e.clientY - rect.top)  + 'px';

            const states = window._orbStates;
            if (!states || !states.length) return;

            let closest = null;
            let minDist = Infinity;
            states.forEach(s => {
                const dx = s.x - e.clientX;
                const dy = s.y - e.clientY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) { minDist = dist; closest = s; }
            });

            if (!closest) return;

            const hex = closest.color;
            const r = parseInt(hex.slice(1,3), 16);
            const g = parseInt(hex.slice(3,5), 16);
            const b = parseInt(hex.slice(5,7), 16);

            const maxDist = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);
            const weight  = Math.max(0, 1 - (minDist / (maxDist * 0.55)));
            const isWarm  = r > g + 30;
            const peak    = isWarm ? 0.14 : 0.12;
            const alpha   = 0.06 + weight * peak;

            blob.style.background =
                `radial-gradient(circle, rgba(${r},${g},${b},${alpha.toFixed(3)}) 0%, transparent 65%)`;
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
