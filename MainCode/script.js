document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    // 1. Read theme colors and structural personality tokens
    const styles = getComputedStyle(document.documentElement);
    const accentColor = styles.getPropertyValue('--accent-gold').trim() || '#ffffff';
    const glowLine    = styles.getPropertyValue('--accent-gold-line').trim() || 'rgba(255,255,255,0.4)';
    const baseBg      = styles.getPropertyValue('--bg-base').trim() || '#000000';
    
    // Custom theme behavior modifiers
    const secondaryOrbColor = styles.getPropertyValue('--orb-secondary-color').trim() || glowLine;
    const blurFactor        = parseFloat(styles.getPropertyValue('--orb-blur-factor')) || 1.0;
    const speedMultiplier   = parseFloat(styles.getPropertyValue('--orb-speed-multiplier')) || 1.0;
    const scaleMultiplier   = parseFloat(styles.getPropertyValue('--orb-scale-multiplier')) || 1.0;

    // 2. Build structural configuration using the theme variants
    const ORB_CONFIGS = [
        { size: 75 * scaleMultiplier, color: accentColor,       color2: baseBg,        blur: 110 * blurFactor, opacity: 0.40 },
        { size: 65 * scaleMultiplier, color: secondaryOrbColor, color2: baseBg,        blur: 100 * blurFactor, opacity: 0.55 },
        { size: 55 * scaleMultiplier, color: accentColor,       color2: 'transparent', blur: 90  * blurFactor, opacity: 0.30 },
        { size: 50 * scaleMultiplier, color: secondaryOrbColor, color2: baseBg,        blur: 85  * blurFactor, opacity: 0.45 },
        { size: 48 * scaleMultiplier, color: accentColor,       color2: baseBg,        blur: 80  * blurFactor, opacity: 0.35 },
        { size: 60 * scaleMultiplier, color: secondaryOrbColor, color2: 'transparent', blur: 95  * blurFactor, opacity: 0.50 },
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
            color: cfg.color,
            opacity: cfg.opacity,
            x: startX,
            y: startY,
            tx: 0, ty: 0,
            vx: 0, vy: 0,
            duration: 0,
            elapsed: 0,
            ox: startX, oy: startY,
            speedMultiplier: speedMultiplier // Store speed context
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
        
        // Base timing altered dynamically by the theme speed multiplier
        const baseDuration = (24000 + Math.random() * 24000);
        state.duration = baseDuration / state.speedMultiplier;
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

    // Expose orb state so we can read positions + colors

    // orbStates is populated by initBackground and stored on window

    document.querySelectorAll('.glass-card').forEach(card => {

        const blob = card.querySelector('.glow-blob');

        if (!blob) return;



        card.addEventListener('mouseenter', () => { blob.style.opacity = '1'; });

        card.addEventListener('mouseleave', () => { blob.style.opacity = '0'; });



        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();

            blob.style.left = (e.clientX - rect.left) + 'px';

            blob.style.top  = (e.clientY - rect.top)  + 'px';



            // Find the orb whose center is closest to the cursor

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



            // Parse the orb's primary hex color into rgb

            const hex = closest.color;

            const r = parseInt(hex.slice(1,3), 16);

            const g = parseInt(hex.slice(3,5), 16);

            const b = parseInt(hex.slice(5,7), 16);



            // Weight: closer orb = more color influence

            // Warm colors (high R) get a slight boost since they're darker pigments

            const maxDist = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);

            const weight  = Math.max(0, 1 - (minDist / (maxDist * 0.55)));

            const isWarm  = r > g + 30; // orange/red/gold orbs

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
