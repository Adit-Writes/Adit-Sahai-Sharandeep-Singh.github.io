// ============================================================
//  CONFIGURATION — edit these values freely
// ============================================================

const ROTATION_INTERVAL_MS  = 5000;   // how often themes rotate (ms)
const ORB_TRANSITION_SECS   = 5.0;    // how long orb color transition takes (seconds)

// ============================================================
//  THEME DEFINITIONS
//  --orb-colors: comma-separated list of 5 hex colors
//  each orb picks one randomly on every theme change
// ============================================================

const MY_FAVORITE_THEMES = [
    {
        name: "Cyberpunk Tox",
        tokens: {
            '--bg-base':            '#040106',
            '--glass-bg':           'rgba(18, 6, 24, 0.65)',
            '--glass-bg-strong':    'rgba(11, 3, 15, 0.88)',
            '--glass-border':       'rgba(255, 0, 127, 0.22)',
            '--glass-border-hover': 'rgba(255, 0, 127, 0.85)',
            '--text-main':          '#fff0f6',
            '--text-muted':         '#c4abb6',
            '--text-dim':           '#73455a',
            '--accent-gold':        '#ff007f',
            '--accent-gold-dim':    'rgba(255, 0, 127, 0.15)',
            '--accent-gold-line':   'rgba(255, 0, 127, 0.40)',
            '--orb-colors':         '#ff007f, #1aff6b, #bf00ff, #ff6600, #00cfff',
            '--orb-blur-factor':    '0.85',
            '--orb-speed-multiplier': '1.6',
            '--orb-scale-multiplier': '0.9'
        }
    },
    {
        name: "Abyssal Flare",
        tokens: {
            '--bg-base':            '#02070d',
            '--glass-bg':           'rgba(6, 18, 33, 0.65)',
            '--glass-bg-strong':    'rgba(3, 10, 20, 0.88)',
            '--glass-border':       'rgba(0, 210, 255, 0.25)',
            '--glass-border-hover': 'rgba(0, 210, 255, 0.85)',
            '--text-main':          '#e6f2fa',
            '--text-muted':         '#8ca6b8',
            '--text-dim':           '#435b6e',
            '--accent-gold':        '#00d2ff',
            '--accent-gold-dim':    'rgba(0, 210, 255, 0.12)',
            '--accent-gold-line':   'rgba(0, 210, 255, 0.35)',
            '--orb-colors':         '#00d2ff, #ff6a00, #0044ff, #ff003c, #00ffaa',
            '--orb-blur-factor':    '1.3',
            '--orb-speed-multiplier': '0.6',
            '--orb-scale-multiplier': '1.4'
        }
    },
    {
        name: "Outrun 1984",
        tokens: {
            '--bg-base':            '#06020c',
            '--glass-bg':           'rgba(21, 9, 36, 0.65)',
            '--glass-bg-strong':    'rgba(13, 5, 23, 0.88)',
            '--glass-border':       'rgba(255, 0, 127, 0.25)',
            '--glass-border-hover': 'rgba(0, 240, 255, 0.9)',
            '--text-main':          '#fff0f8',
            '--text-muted':         '#b9a1cf',
            '--text-dim':           '#724994',
            '--accent-gold':        '#ff007f',
            '--accent-gold-dim':    'rgba(255, 0, 127, 0.15)',
            '--accent-gold-line':   'rgba(255, 0, 127, 0.40)',
            '--orb-colors':         '#ff007f, #00f0ff, #9400ff, #ffcc00, #ff4400',
            '--orb-blur-factor':    '0.8',
            '--orb-speed-multiplier': '1.5',
            '--orb-scale-multiplier': '0.9'
        }
    },
    {
        name: "Solar Fjord",
        tokens: {
            '--bg-base':            '#030706',
            '--glass-bg':           'rgba(9, 24, 20, 0.65)',
            '--glass-bg-strong':    'rgba(5, 15, 12, 0.88)',
            '--glass-border':       'rgba(147, 250, 216, 0.22)',
            '--glass-border-hover': 'rgba(147, 250, 216, 0.85)',
            '--text-main':          '#f2fcf8',
            '--text-muted':         '#a1b8b0',
            '--text-dim':           '#4c665e',
            '--accent-gold':        '#93fad8',
            '--accent-gold-dim':    'rgba(147, 250, 216, 0.12)',
            '--accent-gold-line':   'rgba(147, 250, 216, 0.35)',
            '--orb-colors':         '#93fad8, #d35400, #00c9a7, #f9ca24, #6a5acd',
            '--orb-blur-factor':    '1.5',
            '--orb-speed-multiplier': '0.55',
            '--orb-scale-multiplier': '1.5'
        }
    },
    {
        name: "Plasma Storm",
        tokens: {
            '--bg-base':            '#050103',
            '--glass-bg':           'rgba(24, 8, 14, 0.65)',
            '--glass-bg-strong':    'rgba(15, 4, 8, 0.88)',
            '--glass-border':       'rgba(255, 46, 76, 0.25)',
            '--glass-border-hover': 'rgba(255, 46, 76, 0.90)',
            '--text-main':          '#fff2f4',
            '--text-muted':         '#cca6ab',
            '--text-dim':           '#7a474e',
            '--accent-gold':        '#ff2e4c',
            '--accent-gold-dim':    'rgba(255, 46, 76, 0.15)',
            '--accent-gold-line':   'rgba(255, 46, 76, 0.40)',
            '--orb-colors':         '#ff2e4c, #3f1094, #ff8800, #00d4ff, #cc00ff',
            '--orb-blur-factor':    '1.0',
            '--orb-speed-multiplier': '1.2',
            '--orb-scale-multiplier': '1.1'
        }
    }
];

// ============================================================
//  HELPERS
// ============================================================

function hexToRgb(hex) {
    hex = hex.trim().replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
    };
}

function lerpColor(a, b, t) {
    return {
        r: Math.round(a.r + (b.r - a.r) * t),
        g: Math.round(a.g + (b.g - a.g) * t),
        b: Math.round(a.b + (b.b - a.b) * t)
    };
}

function easeInOut(t) {
    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
}

function orbGradient(rgb) {
    return `radial-gradient(circle, rgb(${rgb.r},${rgb.g},${rgb.b}) 0%, rgba(0,0,0,0) 70%)`;
}

// Parse "--orb-colors" CSS variable into an array of hex strings
function parseOrbColors(stylesObj) {
    const raw = stylesObj.getPropertyValue('--orb-colors').trim();
    return raw.split(',').map(s => s.trim()).filter(Boolean);
}

function pickRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
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
//  BACKGROUND — orb canvas + tick loop
// ============================================================

function initBackground() {
    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const BASE_CONFIGS = [
        { sizePercent: 38, isSecondary: false, blurBase: 110, opacity: 0.40 },
        { sizePercent: 32, isSecondary: true,  blurBase: 100, opacity: 0.55 },
        { sizePercent: 28, isSecondary: false, blurBase:  90, opacity: 0.30 },
        { sizePercent: 25, isSecondary: true,  blurBase:  85, opacity: 0.45 },
        { sizePercent: 24, isSecondary: false, blurBase:  80, opacity: 0.35 },
        { sizePercent: 30, isSecondary: true,  blurBase:  95, opacity: 0.50 }
    ];

    const orbs = BASE_CONFIGS.map((cfg, i) => {
        const el = document.createElement('div');
        el.className = 'bg-orb';
        canvas.appendChild(el);

        const startX = Math.random() * vw;
        const startY = Math.random() * vh;

        const state = {
            el,
            sizePercent:    cfg.sizePercent,
            sizePx:         0,
            blurBase:       cfg.blurBase,
            opacity:        cfg.opacity,
            x: startX,  y: startY,
            tx: 0,       ty: 0,
            ox: startX,  oy: startY,
            duration: 1, elapsed: 0,
            currentRgb:    { r: 80, g: 0, b: 80 },
            targetRgb:     { r: 80, g: 0, b: 80 },
            colorT:        1,
            colorDuration: ORB_TRANSITION_SECS * 1000
        };

        el.style.position      = 'absolute';
        el.style.pointerEvents = 'none';
        el.style.opacity       = '0';
        el.style.transition    = [
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
            // Position
            state.elapsed += dt;
            const t = Math.min(state.elapsed / state.duration, 1);
            const e = easeInOut(t);
            state.x = state.ox + (state.tx - state.ox) * e;
            state.y = state.oy + (state.ty - state.oy) * e;

            const computed = parseFloat(getComputedStyle(state.el).width);
            if (!isNaN(computed)) state.sizePx = computed;

            state.el.style.left = (state.x - state.sizePx / 2) + 'px';
            state.el.style.top  = (state.y - state.sizePx / 2) + 'px';

            if (t >= 1) pickTarget(state, window.innerWidth, window.innerHeight);

            // Color lerp
            if (state.colorT < 1) {
                state.colorT     = Math.min(state.colorT + dt / state.colorDuration, 1);
                const easedT     = easeInOut(state.colorT);
                state.currentRgb = lerpColor(state.currentRgb, state.targetRgb, easedT);
                state.el.style.background = orbGradient(state.currentRgb);
            }
        });

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

// ============================================================
//  ORB SKIN UPDATE — each orb picks a random color from the list
// ============================================================

function updateActiveOrbSkins() {
    const states = window._orbStates;
    if (!states || !states.length) return;

    const styles          = getComputedStyle(document.documentElement);
    const orbColors       = parseOrbColors(styles);
    const blurFactor      = parseFloat(styles.getPropertyValue('--orb-blur-factor'))     || 1.0;
    const scaleMultiplier = parseFloat(styles.getPropertyValue('--orb-scale-multiplier'))|| 1.0;
    const vw              = window.innerWidth;

    // Fallback if --orb-colors isn't set yet
    const fallback = styles.getPropertyValue('--accent-gold').trim() || '#ffffff';
    const colorPool = orbColors.length >= 1 ? orbColors : [fallback];

    states.forEach(state => {
        // Each orb independently picks a random color from the pool
        const rawTarget  = pickRandomColor(colorPool);
        const targetRgb  = hexToRgb(rawTarget);
        const targetSize = Math.round(vw * (state.sizePercent * scaleMultiplier) / 100);
        const targetBlur = state.blurBase * blurFactor;

        // Kick off color lerp from current position
        state.targetRgb     = targetRgb;
        state.colorT        = 0;
        state.colorDuration = ORB_TRANSITION_SECS * 1000;
        state.color         = rawTarget;

        state.el.style.transition = [
            `opacity ${ORB_TRANSITION_SECS}s ease`,
            `width   ${ORB_TRANSITION_SECS}s ease-in-out`,
            `height  ${ORB_TRANSITION_SECS}s ease-in-out`,
            `filter  ${ORB_TRANSITION_SECS}s ease-in-out`
        ].join(', ');

        state.el.style.width  = `${targetSize}px`;
        state.el.style.height = `${targetSize}px`;
        state.el.style.filter = `blur(${targetBlur}px)`;
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
