document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the orb canvas immediately
    initBackground();
    
    // 2. Load the initial theme and set interval
    applyRandomTheme();
    setInterval(applyRandomTheme, 20000); 

    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

function initBackground() {
    // Ensure we don't double-initialize
    if (document.getElementById('bg-canvas')) return;

    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    // Ensure it is at the very top of the body
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const BASE_CONFIGS = [
        { sizePercent: 75, isSecondary: false, blurBase: 110, opacity: 0.40 },
        { sizePercent: 65, isSecondary: true,  blurBase: 100, opacity: 0.55 },
        { sizePercent: 55, isSecondary: false, blurBase: 90,  opacity: 0.30 },
        { sizePercent: 50, isSecondary: true,  blurBase: 85,  opacity: 0.45 },
        { sizePercent: 48, isSecondary: false, blurBase: 80,  opacity: 0.35 },
        { sizePercent: 60, isSecondary: true,  blurBase: 95,  opacity: 0.50 }
    ];

    const orbs = BASE_CONFIGS.map((cfg) => {
        const el = document.createElement('div');
        el.className = 'bg-orb';
        // Force immediate visibility
        el.style.opacity = cfg.opacity; 
        canvas.appendChild(el);

        const state = {
            el,
            sizePercent: cfg.sizePercent,
            blurBase: cfg.blurBase,
            isSecondary: cfg.isSecondary,
            x: Math.random() * vw, 
            y: Math.random() * vh,
            tx: 0, ty: 0, ox: 0, oy: 0,
            duration: 0, elapsed: 0
        };
        
        pickTarget(state, vw, vh);
        return state;
    });

    window._orbStates = orbs;
    updateActiveOrbSkins();

    function pickTarget(state, width, height) {
        state.ox = state.x;
        state.oy = state.y;
        state.tx = Math.random() * width;
        state.ty = Math.random() * height;
        state.duration = 20000 + Math.random() * 20000;
        state.elapsed = 0;
    }

    function tick(now) {
        if (!window._lastTime) window._lastTime = now;
        const dt = now - window._lastTime;
        window._lastTime = now;

        orbs.forEach(state => {
            state.elapsed += dt;
            const t = Math.min(state.elapsed / state.duration, 1);
            const e = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;

            state.x = state.ox + (state.tx - state.ox) * e;
            state.y = state.oy + (state.ty - state.oy) * e;

            const size = (window.innerWidth * state.sizePercent) / 100;
            state.el.style.left = (state.x - size / 2) + 'px';
            state.el.style.top  = (state.y - size / 2) + 'px';

            if (t >= 1) pickTarget(state, window.innerWidth, window.innerHeight);
        });
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function updateActiveOrbSkins() {
    const states = window._orbStates;
    if (!states) return;
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--accent-gold').trim();
    const secondary = styles.getPropertyValue('--orb-secondary-color').trim();
    
    states.forEach((state) => {
        state.color = state.isSecondary ? secondary : accent;
        state.el.style.background = `radial-gradient(circle, ${state.color} 0%, transparent 70%)`;
    });
}

// ... (Keep your existing applyRandomTheme, initMouseGlow, etc., below here)
