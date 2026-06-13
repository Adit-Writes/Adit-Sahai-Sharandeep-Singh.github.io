// ============================================================
//  CONFIGURATION — edit these values freely
// ============================================================

const ROTATION_INTERVAL_MS  = 20000;   // how often themes rotate (ms)
const ORB_TRANSITION_SECS   = 10;    // how long orb color/size transition takes (seconds)

// ============================================================
//  THEME DEFINITIONS
// ============================================================

const MY_FAVORITE_THEMES = [
    {
    name: "Arctic Aurora",
    tokens: {
        '--bg-base':             '#020611',
        '--glass-bg':            'rgba(8, 18, 38, 0.65)',
        '--glass-bg-strong':     'rgba(4, 10, 24, 0.88)',
        '--glass-border':        'rgba(120, 220, 255, 0.22)',
        '--glass-border-hover':  'rgba(120, 220, 255, 0.85)',
        '--text-main':           '#f5fcff',
        '--text-muted':          '#b7d2de',
        '--text-dim':            '#6d8da0',
        '--accent-gold':         '#7cf3ff',
        '--accent-gold-dim':     'rgba(124, 243, 255, 0.15)',
        '--accent-gold-line':    'rgba(124, 243, 255, 0.40)',
        '--orb-secondary-color': '#6a7dff',
        '--orb-blur-factor':     '1.15',
        '--orb-speed-multiplier':'1.1',
        '--orb-scale-multiplier':'1.2'
    }
},{
    name: "Crimson Ember",
    tokens: {
        '--bg-base':             '#0a0203',
        '--glass-bg':            'rgba(28, 8, 10, 0.65)',
        '--glass-bg-strong':     'rgba(18, 4, 6, 0.88)',
        '--glass-border':        'rgba(255, 60, 80, 0.22)',
        '--glass-border-hover':  'rgba(255, 80, 95, 0.85)',
        '--text-main':           '#fff1f2',
        '--text-muted':          '#e2b6bb',
        '--text-dim':            '#8a4a52',
        '--accent-gold':         '#ff3b4d',
        '--accent-gold-dim':     'rgba(255, 59, 77, 0.15)',
        '--accent-gold-line':    'rgba(255, 59, 77, 0.42)',
        '--orb-secondary-color': '#ff8a3b',
        '--orb-blur-factor':     '1.05',
        '--orb-speed-multiplier':'1.35',
        '--orb-scale-multiplier':'1.15'
    }
},{
    name: "Sandstone Ivory",
    tokens: {
        '--bg-base':             '#120f0b',
        '--glass-bg':            'rgba(34, 28, 22, 0.62)',
        '--glass-bg-strong':     'rgba(20, 16, 12, 0.88)',
        '--glass-border':        'rgba(210, 190, 160, 0.25)',
        '--glass-border-hover':  'rgba(240, 220, 190, 0.85)',
        '--text-main':           '#fff7ed',
        '--text-muted':          '#d6c6b3',
        '--text-dim':            '#9a8977',
        '--accent-gold':         '#e6c7a2',
        '--accent-gold-dim':     'rgba(230, 199, 162, 0.15)',
        '--accent-gold-line':    'rgba(230, 199, 162, 0.40)',
        '--orb-secondary-color': '#c8a46a',
        '--orb-blur-factor':     '1.1',
        '--orb-speed-multiplier':'0.95',
        '--orb-scale-multiplier':'1.2'
    }
},
];

// ============================================================
//  HELPERS — color parsing & lerping
// ============================================================

// Parse any hex color (#rgb or #rrggbb) into { r, g, b }
function hexToRgb(hex) {
    hex = hex.trim().replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
    };
}

// Linear interpolate between two { r, g, b } objects
function lerpColor(a, b, t) {
    return {
        r: Math.round(a.r + (b.r - a.r) * t),
        g: Math.round(a.g + (b.g - a.g) * t),
        b: Math.round(a.b + (b.b - a.b) * t)
    };
}

// Smooth ease in-out curve so the transition accelerates and decelerates
function easeInOut(t) {
    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
}

// Build the radial-gradient string from an { r, g, b } object
function orbGradient(rgb) {
    return `radial-gradient(circle, rgb(${rgb.r},${rgb.g},${rgb.b}) 0%, rgba(0,0,0,0) 70%)`;
}

// ============================================================
//  BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    applyRandomTheme();
    setInterval(applyRandomTheme, ROTATION_INTERVAL_MS);
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

// ============================================================
//  THEME ROTATOR
// ============================================================

let currentThemeName = null;

function applyRandomTheme() {
    if (!MY_FAVORITE_THEMES.length) return;

    const available   = MY_FAVORITE_THEMES.filter(t => t.name !== currentThemeName);
    const pool        = available.length > 0 ? available : MY_FAVORITE_THEMES;
    const randomTheme = pool[Math.floor(Math.random() * pool.length)];
    currentThemeName  = randomTheme.name;

    console.log(`🎨 Theme: "${randomTheme.name}"`);

    const root = document.documentElement;
    requestAnimationFrame(() => {
        Object.entries(randomTheme.tokens).forEach(([variable, value]) => {
            root.style.setProperty(variable, value);
        });
        updateActiveOrbSkins();
    });
}

// ============================================================
//  BACKGROUND — orb canvas + animation loop
// ============================================================

function initBackground() {
    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const BASE_CONFIGS = [
        { sizePercent: 75, isSecondary: false, blurBase: 110, opacity: 0.40 },
        { sizePercent: 65, isSecondary: true,  blurBase: 100, opacity: 0.55 },
        { sizePercent: 55, isSecondary: false, blurBase:  90, opacity: 0.30 },
        { sizePercent: 50, isSecondary: true,  blurBase:  85, opacity: 0.45 },
        { sizePercent: 48, isSecondary: false, blurBase:  80, opacity: 0.35 },
        { sizePercent: 60, isSecondary: true,  blurBase:  95, opacity: 0.50 }
    ];

    const orbs = BASE_CONFIGS.map((cfg, i) => {
        const el = document.createElement('div');
        el.className = 'bg-orb';
        canvas.appendChild(el);

        const startX = Math.random() * vw;
        const startY = Math.random() * vh;

        // currentRgb — what the orb is showing RIGHT NOW (used as lerp start)
        // targetRgb  — where it's heading
        // colorT     — 0..1 progress through the color transition
        // colorDuration — how many ms the color transition lasts
        const state = {
            el,
            sizePercent:    cfg.sizePercent,
            sizePx:         0,
            blurBase:       cfg.blurBase,
            isSecondary:    cfg.isSecondary,
            opacity:        cfg.opacity,
            x: startX,  y: startY,
            tx: 0,       ty: 0,
            ox: startX,  oy: startY,
            duration: 1, elapsed: 0,
            // color lerp state
            currentRgb:    { r: 80, g: 0, b: 80 },   // neutral start
            targetRgb:     { r: 80, g: 0, b: 80 },
            colorT:        1,                          // 1 = already at target, no lerp needed
            colorDuration: ORB_TRANSITION_SECS * 1000
        };

        el.style.position      = 'absolute';
        el.style.pointerEvents = 'none';
        el.style.opacity       = '0';

        // Size and blur still use CSS transition — only background is JS-lerped
        el.style.transition = [
            `opacity ${ORB_TRANSITION_SECS}s ease`,
            `width   ${ORB_TRANSITION_SECS}s ease-in-out`,
            `height  ${ORB_TRANSITION_SECS}s ease-in-out`,
            `filter  ${ORB_TRANSITION_SECS}s ease-in-out`
        ].join(', ');

        setTimeout(() => { el.style.opacity = cfg.opacity; }, i * 200);

        pickTarget(state, vw, vh);
        return state;
    });

    window._orbStates = orbs;

    function pickTarget(state, width, height) {
        const styles          = getComputedStyle(document.documentElement);
        const speedMultiplier = parseFloat(styles.getPropertyValue('--orb-speed-multiplier')) || 1.0;
        state.ox       = state.x;
        state.oy       = state.y;
        state.tx       = Math.random() * (width  * 1.3) - width  * 0.15;
        state.ty       = Math.random() * (height * 1.3) - height * 0.15;
        const base     = 24000 + Math.random() * 24000;
        state.duration = base / speedMultiplier;
        state.elapsed  = 0;
    }

    let last = performance.now();

    function tick(now) {
        const dt = now - last;
        last = now;

        orbs.forEach(state => {
            // ── Position animation ──────────────────────────
            state.elapsed += dt;
            const t  = Math.min(state.elapsed / state.duration, 1);
            const e  = easeInOut(t);
            state.x  = state.ox + (state.tx - state.ox) * e;
            state.y  = state.oy + (state.ty - state.oy) * e;

            const computed = parseFloat(getComputedStyle(state.el).width);
            if (!isNaN(computed)) state.sizePx = computed;

            state.el.style.left = (state.x - state.sizePx / 2) + 'px';
            state.el.style.top  = (state.y - state.sizePx / 2) + 'px';

            if (t >= 1) pickTarget(state, window.innerWidth, window.innerHeight);

            // ── Color lerp ──────────────────────────────────
            // Advance colorT only if transition is still in progress
            if (state.colorT < 1) {
                state.colorT = Math.min(state.colorT + dt / state.colorDuration, 1);
                const easedT       = easeInOut(state.colorT);
                state.currentRgb   = lerpColor(state.currentRgb, state.targetRgb, easedT);
                state.el.style.background = orbGradient(state.currentRgb);
            }
        });

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

// ============================================================
//  ORB SKIN UPDATE — kicks off the JS color lerp
// ============================================================

function updateActiveOrbSkins() {
    const states = window._orbStates;
    if (!states || !states.length) return;

    const styles          = getComputedStyle(document.documentElement);
    const accentColor     = styles.getPropertyValue('--accent-gold').trim()         || '#ffffff';
    const secondaryColor  = styles.getPropertyValue('--orb-secondary-color').trim() || accentColor;
    const blurFactor      = parseFloat(styles.getPropertyValue('--orb-blur-factor'))     || 1.0;
    const scaleMultiplier = parseFloat(styles.getPropertyValue('--orb-scale-multiplier'))|| 1.0;
    const vw              = window.innerWidth;

    states.forEach(state => {
        const rawTarget  = state.isSecondary ? secondaryColor : accentColor;
        const targetRgb  = hexToRgb(rawTarget);
        const targetSize = Math.round(vw * (state.sizePercent * scaleMultiplier) / 100);
        const targetBlur = state.blurBase * blurFactor;

        // Snapshot where the orb's color currently is, then start lerping to new target
        // colorT resets to 0 so the tick loop drives the transition from this frame onward
        state.currentRgb    = { ...state.currentRgb };  // keep current as lerp start
        state.targetRgb     = targetRgb;
        state.colorT        = 0;
        state.colorDuration = ORB_TRANSITION_SECS * 1000;

        // Size and blur can still use CSS transition — they're not gradients
        state.el.style.transition = [
            `opacity ${ORB_TRANSITION_SECS}s ease`,
            `width   ${ORB_TRANSITION_SECS}s ease-in-out`,
            `height  ${ORB_TRANSITION_SECS}s ease-in-out`,
            `filter  ${ORB_TRANSITION_SECS}s ease-in-out`
        ].join(', ');

        state.el.style.width  = `${targetSize}px`;
        state.el.style.height = `${targetSize}px`;
        state.el.style.filter = `blur(${targetBlur}px)`;

        // Store the resolved color string for mouse glow to read
        state.color = rawTarget;
    });
}

// ============================================================
//  MOUSE GLOW
// ============================================================

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
                const dx   = s.x - e.clientX;
                const dy   = s.y - e.clientY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) { minDist = dist; closest = s; }
            });

            if (!closest || !closest.currentRgb) return;

            const { r, g, b } = closest.currentRgb;
            const maxDist = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);
            const weight  = Math.max(0, 1 - (minDist / (maxDist * 0.55)));
            const isWarm  = r > g + 30;
            const peak    = isWarm ? 0.14 : 0.12;
            const alpha   = (0.06 + weight * peak).toFixed(3);

            blob.style.background = `radial-gradient(circle, rgba(${r},${g},${b},${alpha}) 0%, transparent 65%)`;
        });
    });
}

// ============================================================
//  SCROLL REVEAL
// ============================================================

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

// ============================================================
//  CATEGORY FILTER
// ============================================================

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
