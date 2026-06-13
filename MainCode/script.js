document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    // 1. Dynamically read colors from your active CSS token palette
    const styles = getComputedStyle(document.documentElement);
    const accentColor = styles.getPropertyValue('--accent-gold').trim() || '#ffffff';
    const glowLine    = styles.getPropertyValue('--accent-gold-line').trim() || 'rgba(255,255,255,0.4)';
    const baseBg      = styles.getPropertyValue('--bg-base').trim() || '#000000';

    // 2. Build a structural configuration using your theme variables
    const ORB_CONFIGS = [
        { size: 72, color: accentColor,   color2: baseBg,   blur: 110, opacity: 0.45 },
        { size: 60, color: glowLine,      color2: baseBg,   blur: 100, opacity: 0.65 },
        { size: 54, color: accentColor,   color2: 'transparent', blur: 90,  opacity: 0.35 },
        { size: 50, color: glowLine,      color2: baseBg,   blur: 85,  opacity: 0.50 },
        { size: 46, color: accentColor,   color2: baseBg,   blur: 80,  opacity: 0.40 },
        { size: 56, color: glowLine,      color2: 'transparent', blur: 95,  opacity: 0.55 },
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
            background: radial-gradient(circle, ${cfg.color} 0%, ${cfg.color2} 60%, transparent 100%);
            filter: blur(${cfg.blur}px);
            opacity: 0;
            transition: opacity 3s ease;
            position: absolute;
            pointer-events: none;
        `;
        canvas.appendChild(el);

        const startX = Math.random() * (vw + sizePx) - sizePx / 2;
        const startY = Math.random() * (vh + sizePx) - sizePx / 2;

        const state = {
            el,
            sizePx,
            color: cfg.color, // Passing dynamic computed color string
            opacity: cfg.opacity,
            x: startX,
            y: startY,
            tx: 0, ty: 0,
            vx: 0, vy: 0,
            duration: 0,
            elapsed: 0,
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
        state.tx = Math.random() * (vw * 1.3) - vw * 0.15;
        state.ty = Math.random() * (vh * 1.3) - vh * 0.15;
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

            // Instead of doing heavy parsing math over changing string formats,
            // we safely feed the CSS Accent glow directly into the card hover container
            blob.style.background = `radial-gradient(circle, var(--accent-gold-line) 0%, transparent 70%)`;
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
