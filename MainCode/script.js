// ============================================================
//  CONFIGURATION — edit these values freely
// ============================================================

const ROTATION_INTERVAL_MS   = 15000;   // how often themes rotate (ms)
const ORB_TRANSITION_SECS    = 10.0;    // how long orb color transition takes (seconds)

// ============================================================
//  THEME DEFINITIONS
// ============================================================

const MY_FAVORITE_THEMES = [
    {
    name: "Crimson Ember",
    tokens: {
        '--bg-base':             '#0a0506',
        '--glass-bg':            'rgba(28, 8, 10, 0.65)',
        '--glass-bg-strong':     'rgba(18, 4, 6, 0.88)',
        '--glass-border':       'rgba(255, 60, 80, 0.25)',
        '--glass-border-hover': 'rgba(255, 60, 80, 0.85)',
        '--text-main':          '#fff1f2',
        '--text-muted':         '#d7a7ad',
        '--text-dim':           '#7a4a50',
        '--accent-gold':        '#ff3b4d',
        '--accent-gold-dim':    'rgba(255, 59, 77, 0.15)',
        '--accent-gold-line':   'rgba(255, 59, 77, 0.35)',
        '--orb-colors':         '#ff2a2a, #ff6b3d, #ff3b8d, #ffb347, #c1121f',
        '--orb-blur-factor':    '1.05',
        '--orb-speed-multiplier':'1.25',
        '--orb-scale-multiplier':'1.05'
    }
},{
    name: "Aurora Ice",
    tokens: {
        '--bg-base':             '#050814',
        '--glass-bg':            'rgba(10, 18, 40, 0.65)',
        '--glass-bg-strong':     'rgba(6, 12, 30, 0.88)',
        '--glass-border':       'rgba(80, 140, 255, 0.25)',
        '--glass-border-hover': 'rgba(80, 140, 255, 0.85)',
        '--text-main':          '#eef4ff',
        '--text-muted':         '#a9b9d6',
        '--text-dim':           '#5a6f93',
        '--accent-gold':        '#4da3ff',
        '--accent-gold-dim':    'rgba(77, 163, 255, 0.15)',
        '--accent-gold-line':   'rgba(77, 163, 255, 0.35)',
        '--orb-colors':         '#1e90ff, #00c2ff, #7a5cff, #00ffd0, #3b82f6',
        '--orb-blur-factor':    '0.95',
        '--orb-speed-multiplier':'1.3',
        '--orb-scale-multiplier':'1.1'
    }
},{
    name: "Sand & Ivory",
    tokens: {
        '--bg-base':             '#0e0b08',
        '--glass-bg':            'rgba(40, 30, 24, 0.6)',
        '--glass-bg-strong':     'rgba(28, 20, 16, 0.88)',
        '--glass-border':       'rgba(210, 190, 160, 0.25)',
        '--glass-border-hover': 'rgba(210, 190, 160, 0.85)',
        '--text-main':          '#f7f1e6',
        '--text-muted':         '#cbbba4',
        '--text-dim':           '#8a7a66',
        '--accent-gold':        '#d6b48a',
        '--accent-gold-dim':    'rgba(214, 180, 138, 0.15)',
        '--accent-gold-line':   'rgba(214, 180, 138, 0.35)',
        '--orb-colors':         '#d6b48a, #f2d2a9, #a68a64, #ffe0b2, #c8a27a',
        '--orb-blur-factor':    '1.0',
        '--orb-speed-multiplier':'0.95',
        '--orb-scale-multiplier':'1.08'
    }
},{
    name: "Neon Forest",
    tokens: {
        '--bg-base':             '#050a07',
        '--glass-bg':            'rgba(10, 26, 18, 0.65)',
        '--glass-bg-strong':     'rgba(6, 18, 12, 0.88)',
        '--glass-border':       'rgba(0, 255, 140, 0.22)',
        '--glass-border-hover': 'rgba(0, 255, 140, 0.85)',
        '--text-main':          '#eafff3',
        '--text-muted':         '#a7d6bc',
        '--text-dim':           '#5a8f73',
        '--accent-gold':        '#00ff9a',
        '--accent-gold-dim':    'rgba(0, 255, 154, 0.15)',
        '--accent-gold-line':   'rgba(0, 255, 154, 0.35)',
        '--orb-colors':         '#00ff9a, #39ff14, #00d4ff, #7cffcb, #2bff88',
        '--orb-blur-factor':    '0.9',
        '--orb-speed-multiplier':'1.45',
        '--orb-scale-multiplier':'1.05'
    }
},{
    name: "Velvet Void",
    tokens: {
        '--bg-base':             '#07040b',
        '--glass-bg':            'rgba(24, 10, 32, 0.65)',
        '--glass-bg-strong':     'rgba(14, 6, 22, 0.88)',
        '--glass-border':       'rgba(170, 90, 255, 0.25)',
        '--glass-border-hover': 'rgba(170, 90, 255, 0.85)',
        '--text-main':          '#f5ecff',
        '--text-muted':         '#c7b3e6',
        '--text-dim':           '#7a5a9a',
        '--accent-gold':        '#b56cff',
        '--accent-gold-dim':    'rgba(181, 108, 255, 0.15)',
        '--accent-gold-line':   'rgba(181, 108, 255, 0.35)',
        '--orb-colors':         '#b56cff, #7c3aed, #00d9ff, #ff4fd8, #9b5cff',
        '--orb-blur-factor':    '1.05',
        '--orb-speed-multiplier':'1.35',
        '--orb-scale-multiplier':'1.1'
    }
},{
    name: "Obsidian Pulse",
    tokens: {
        '--bg-base':             '#030407',
        '--glass-bg':            'rgba(12, 14, 18, 0.7)',
        '--glass-bg-strong':     'rgba(6, 7, 10, 0.9)',
        '--glass-border':       'rgba(120, 120, 120, 0.22)',
        '--glass-border-hover': 'rgba(200, 200, 200, 0.7)',
        '--text-main':          '#f0f4ff',
        '--text-muted':         '#a0a8b8',
        '--text-dim':           '#5a6270',
        '--accent-gold':        '#7dd3fc',
        '--accent-gold-dim':    'rgba(125, 211, 252, 0.12)',
        '--accent-gold-line':   'rgba(125, 211, 252, 0.28)',
        '--orb-colors':         '#7dd3fc, #f97316, #22c55e, #a78bfa, #e5e7eb',
        '--orb-blur-factor':    '0.95',
        '--orb-speed-multiplier':'1.2',
        '--orb-scale-multiplier':'1.08'
    }
},
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

function parseOrbColors(stylesObj) {
    const raw = stylesObj.getPropertyValue('--orb-colors').trim();
    return raw.split(',').map(s => s.trim()).filter(Boolean);
}

function pickRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

// ============================================================
//  TOKEN LERPER — smooth CSS variable interpolation
// ============================================================

function parseColorToken(raw) {
    raw = raw.trim();
    if (raw.startsWith('#')) {
        const rgb = hexToRgb(raw);
        return { ...rgb, a: 1 };
    }
    const m = raw.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
    if (m) return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 };
    return null;
}

function serializeColor(rgba, originalRaw) {
    const { r, g, b, a } = rgba;
    const isHex = originalRaw.trim().startsWith('#') && a === 1;
    if (isHex) {
        return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
    }
    return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a.toFixed(4)})`;
}

function lerpRgba(a, b, t) {
    return {
        r: a.r + (b.r - a.r) * t,
        g: a.g + (b.g - a.g) * t,
        b: a.b + (b.b - a.b) * t,
        a: a.a + (b.a - a.a) * t,
    };
}

// One entry per CSS variable currently being lerped
const _tokenLerps = new Map();
let _tokenLerpRunning = false;

function startTokenLerpLoop() {
    if (_tokenLerpRunning) return;
    _tokenLerpRunning = true;

    let last = performance.now();

    function tick(now) {
        const dt = now - last;
        last = now;

        const root = document.documentElement;

        _tokenLerps.forEach((state, variable) => {
            state.elapsed = Math.min(state.elapsed + dt, state.duration);
            const t   = easeInOut(state.elapsed / state.duration);
            const cur = lerpRgba(state.fromColor, state.toColor, t);
            root.style.setProperty(variable, serializeColor(cur, state.rawTarget));
            if (state.elapsed >= state.duration) _tokenLerps.delete(variable);
        });

        if (_tokenLerps.size > 0) {
            requestAnimationFrame(tick);
        } else {
            _tokenLerpRunning = false;
        }
    }

    requestAnimationFrame(tick);
}

// Tokens that are numbers/lists — can't lerp, apply instantly
const INSTANT_TOKENS = new Set([
    '--orb-blur-factor',
    '--orb-speed-multiplier',
    '--orb-scale-multiplier',
    '--orb-colors',
]);

function applyThemeTokensSmooth(tokens, durationMs) {
    const root   = document.documentElement;
    const styles = getComputedStyle(root);

    Object.entries(tokens).forEach(([variable, rawTarget]) => {
        if (INSTANT_TOKENS.has(variable)) {
            root.style.setProperty(variable, rawTarget);
            return;
        }

        const toColor = parseColorToken(rawTarget);
        if (!toColor) {
            root.style.setProperty(variable, rawTarget);
            return;
        }

        const currentRaw = styles.getPropertyValue(variable).trim();
        const fromColor  = parseColorToken(currentRaw) || toColor;

        _tokenLerps.set(variable, {
            variable,
            fromColor,
            toColor,
            rawTarget,
            elapsed:  0,
            duration: durationMs,
        });
    });

    startTokenLerpLoop();
}

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

    const durationMs = ORB_TRANSITION_SECS * 1000;

    requestAnimationFrame(() => {
        applyThemeTokensSmooth(randomTheme.tokens, durationMs);
        updateActiveOrbSkins(randomTheme.tokens, durationMs);
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
            blurBase:       cfg.blurBase,
            opacity:        cfg.opacity,
            x: startX,  y: startY,
            tx: 0,       ty: 0,
            ox: startX,  oy: startY,
            duration: 1, elapsed: 0,

            // Color lerp — fromRgb is snapshot at transition start, never mutated mid-lerp
            fromRgb:       { r: 80, g: 0, b: 80 },
            currentRgb:    { r: 80, g: 0, b: 80 },
            targetRgb:     { r: 80, g: 0, b: 80 },
            colorT:        1,
            colorDuration: ORB_TRANSITION_SECS * 1000,

            // Size lerp (in px) — fromSizePx is snapshot at transition start
            fromSizePx:    0,
            currentSizePx: 0,
            targetSizePx:  0,
            sizeT:         1,
            sizeDuration:  ORB_TRANSITION_SECS * 1000,

            // Blur lerp (in px) — fromBlurPx is snapshot at transition start
            fromBlurPx:    cfg.blurBase,
            currentBlurPx: cfg.blurBase,
            targetBlurPx:  cfg.blurBase,
            blurT:         1,
            blurDuration:  ORB_TRANSITION_SECS * 1000,
        };

        el.style.position      = 'absolute';
        el.style.pointerEvents = 'none';
        el.style.opacity       = '0';
        // No CSS transition on size/filter — we drive them from JS every frame
        el.style.transition    = `opacity ${ORB_TRANSITION_SECS}s ease`;

        // Seed actual size so first lerp starts from a real value
        const initialStyles    = getComputedStyle(document.documentElement);
        const initScale        = parseFloat(initialStyles.getPropertyValue('--orb-scale-multiplier')) || 1.0;
        const initBlurFactor   = parseFloat(initialStyles.getPropertyValue('--orb-blur-factor'))      || 1.0;
        state.currentSizePx    = Math.round(vw * (cfg.sizePercent * initScale) / 100);
        state.fromSizePx       = state.currentSizePx;
        state.targetSizePx     = state.currentSizePx;
        state.currentBlurPx    = cfg.blurBase * initBlurFactor;
        state.fromBlurPx       = state.currentBlurPx;
        state.targetBlurPx     = state.currentBlurPx;

        el.style.width  = `${state.currentSizePx}px`;
        el.style.height = `${state.currentSizePx}px`;
        el.style.filter = `blur(${state.currentBlurPx}px)`;

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
            // ---- Position ----
            state.elapsed += dt;
            const t = Math.min(state.elapsed / state.duration, 1);
            const e = easeInOut(t);
            state.x = state.ox + (state.tx - state.ox) * e;
            state.y = state.oy + (state.ty - state.oy) * e;

            if (t >= 1) pickTarget(state, window.innerWidth, window.innerHeight);

            // ---- Color lerp ----
            if (state.colorT < 1) {
                state.colorT     = Math.min(state.colorT + dt / state.colorDuration, 1);
                const easedColor = easeInOut(state.colorT);
                state.currentRgb = lerpColor(state.fromRgb, state.targetRgb, easedColor);
                state.el.style.background = orbGradient(state.currentRgb);
            }

            // ---- Size lerp ----
            if (state.sizeT < 1) {
                state.sizeT = Math.min(state.sizeT + dt / state.sizeDuration, 1);
                const easedSize = easeInOut(state.sizeT);
                state.currentSizePx = state.fromSizePx + (state.targetSizePx - state.fromSizePx) * easedSize;
            }

            // ---- Blur lerp ----
            if (state.blurT < 1) {
                state.blurT = Math.min(state.blurT + dt / state.blurDuration, 1);
                const easedBlur = easeInOut(state.blurT);
                state.currentBlurPx = state.fromBlurPx + (state.targetBlurPx - state.fromBlurPx) * easedBlur;
            }

            // ---- Write to DOM ----
            const sizePx = Math.round(state.currentSizePx);
            state.el.style.left   = (state.x - sizePx / 2) + 'px';
            state.el.style.top    = (state.y - sizePx / 2) + 'px';
            state.el.style.width  = `${sizePx}px`;
            state.el.style.height = `${sizePx}px`;
            state.el.style.filter = `blur(${state.currentBlurPx.toFixed(1)}px)`;
        });

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

// ============================================================
//  ORB SKIN UPDATE — kick off lerps for color, size, blur
// ============================================================

function updateActiveOrbSkins(themeTokens, durationMs) {
    const states = window._orbStates;
    if (!states || !states.length) return;

    const styles          = getComputedStyle(document.documentElement);
    const orbColors       = parseOrbColors(styles);
    const blurFactor      = parseFloat(styles.getPropertyValue('--orb-blur-factor'))      || 1.0;
    const scaleMultiplier = parseFloat(styles.getPropertyValue('--orb-scale-multiplier')) || 1.0;
    const vw              = window.innerWidth;

    const fallback  = styles.getPropertyValue('--accent-gold').trim() || '#ffffff';
    const colorPool = orbColors.length >= 1 ? orbColors : [fallback];

    const transitionMs = durationMs || ORB_TRANSITION_SECS * 1000;

    states.forEach(state => {
        // Snapshot current values as lerp start points — must happen before T resets
        state.fromRgb      = { ...state.currentRgb };
        state.fromSizePx   = state.currentSizePx;
        state.fromBlurPx   = state.currentBlurPx;

        // Color
        const rawTarget = pickRandomColor(colorPool);
        state.targetRgb     = hexToRgb(rawTarget);
        state.colorT        = 0;
        state.colorDuration = transitionMs;

        // Size
        state.targetSizePx  = Math.round(vw * (state.sizePercent * scaleMultiplier) / 100);
        state.sizeT         = 0;
        state.sizeDuration  = transitionMs;

        // Blur
        state.targetBlurPx  = state.blurBase * blurFactor;
        state.blurT         = 0;
        state.blurDuration  = transitionMs;
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

            blob.style.background = `radial-gradient(circle, rgba(${r},${g},${b},${alpha}) 0%, transparent 90%)`;
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
