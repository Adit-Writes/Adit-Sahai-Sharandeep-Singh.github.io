document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize background canvas first so orbs exist in the memory array
    initBackground();
    
    // 2. Apply initial theme immediately
    applyRandomTheme();
    
    // 3. Set up the automated loop using milliseconds
    setInterval(applyRandomTheme, ROTATION_INTERVAL_MS); 

    // 4. Initialize interactive mechanics
    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

// ── Theme Rotator Configuration ───────────────────────────
// SET YOUR INTERVAL IN MILLISECONDS HERE (e.g., 20000 = 20 seconds)
const ROTATION_INTERVAL_MS = 5000; 

const MY_FAVORITE_THEMES = [
    {
        name: "Cyberpunk Tox",
        tokens: {
            '--bg-base': '#040106', '--glass-bg': 'rgba(18, 6, 24, 0.65)', '--glass-bg-strong': 'rgba(11, 3, 15, 0.88)',
            '--glass-border': 'rgba(255, 0, 127, 0.22)', '--glass-border-hover': 'rgba(255, 0, 127, 0.85)',
            '--text-main': '#fff0f6', '--text-muted': '#c4abb6', '--text-dim': '#73455a',
            '--accent-gold': '#ff007f', '--accent-gold-dim': 'rgba(255, 0, 127, 0.15)', '--accent-gold-line': 'rgba(255, 0, 127, 0.40)',
            '--orb-secondary-color': '#1aff6b', '--orb-blur-factor': '0.85', '--orb-speed-multiplier': '1.6', '--orb-scale-multiplier': '0.9'
        }
    },
    {
        name: "Abyssal Flare",
        tokens: {
            '--bg-base': '#02070d', '--glass-bg': 'rgba(6, 18, 33, 0.65)', '--glass-bg-strong': 'rgba(3, 10, 20, 0.88)',
            '--glass-border': 'rgba(0, 210, 255, 0.25)', '--glass-border-hover': 'rgba(0, 210, 255, 0.85)',
            '--text-main': '#e6f2fa', '--text-muted': '#8ca6b8', '--text-dim': '#435b6e',
            '--accent-gold': '#00d2ff', '--accent-gold-dim': 'rgba(0, 210, 255, 0.12)', '--accent-gold-line': 'rgba(0, 210, 255, 0.35)',
            '--orb-secondary-color': '#ff6a00', '--orb-blur-factor': '1.3', '--orb-speed-multiplier': '0.6', '--orb-scale-multiplier': '1.4'
        }
    },
    {
        name: "Outrun 1984",
        tokens: {
            '--bg-base': '#06020c', '--glass-bg': 'rgba(21, 9, 36, 0.65)', '--glass-bg-strong': 'rgba(13, 5, 23, 0.88)',
            '--glass-border': 'rgba(255, 0, 127, 0.25)', '--glass-border-hover': 'rgba(0, 240, 255, 0.9)',
            '--text-main': '#fff0f8', '--text-muted': '#b9a1cf', '--text-dim': '#724994',
            '--accent-gold': '#ff007f', '--accent-gold-dim': 'rgba(255, 0, 127, 0.15)', '--accent-gold-line': 'rgba(255, 0, 127, 0.40)',
            '--orb-secondary-color': '#00f0ff', '--orb-blur-factor': '0.8', '--orb-speed-multiplier': '1.5', '--orb-scale-multiplier': '0.9'
        }
    },
    {
        name: "Solar Fjord",
        tokens: {
            '--bg-base': '#030706', '--glass-bg': 'rgba(9, 24, 20, 0.65)', '--glass-bg-strong': 'rgba(5, 15, 12, 0.88)',
            '--glass-border': 'rgba(147, 250, 216, 0.22)', '--glass-border-hover': 'rgba(147, 250, 216, 0.85)',
            '--text-main': '#f2fcf8', '--text-muted': '#a1b8b0', '--text-dim': '#4c665e',
            '--accent-gold': '#93fad8', '--accent-gold-dim': 'rgba(147, 250, 216, 0.12)', '--accent-gold-line': 'rgba(147, 250, 216, 0.35)',
            '--orb-secondary-color': '#d35400', '--orb-blur-factor': '1.5', '--orb-speed-multiplier': '0.55', '--orb-scale-multiplier': '1.5'
        }
    },
    {
        name: "Plasma Storm",
        tokens: {
            '--bg-base': '#050103', '--glass-bg': 'rgba(24, 8, 14, 0.65)', '--glass-bg-strong': 'rgba(15, 4, 8, 0.88)',
            '--glass-border': 'rgba(255, 46, 76, 0.25)', '--glass-border-hover': 'rgba(255, 46, 76, 0.90)',
            '--text-main': '#fff2f4', '--text-muted': '#cca6ab', '--text-dim': '#7a474e',
            '--accent-gold': '#ff2e4c', '--accent-gold-dim': 'rgba(255, 46, 76, 0.15)', '--accent-gold-line': 'rgba(255, 46, 76, 0.40)',
            '--orb-secondary-color': '#3f1094', '--orb-blur-factor': '1.0', '--orb-speed-multiplier': '1.2', '--orb-scale-multiplier': '1.1'
        }
    }
];

let currentThemeName = null;

function applyRandomTheme() {
    if (!MY_FAVORITE_THEMES.length) return;

    const availableThemes = MY_FAVORITE_THEMES.filter(t => t.name !== currentThemeName);
    const pool = availableThemes.length > 0 ? availableThemes : MY_FAVORITE_THEMES;

    const randomTheme = pool[Math.floor(Math.random() * pool.length)];
    currentThemeName = randomTheme.name;

    console.log(`🎨 Theme Rotator: Switching to "${randomTheme.name}"`);

    const root = document.documentElement;
    
    // Use requestAnimationFrame to ensure the browser processes the style changes in a single frame
    requestAnimationFrame(() => {
        Object.entries(randomTheme.tokens).forEach(
        ([variable, value]) => {
            root.style.setProperty(variable, value);
        });
        
        updateActiveOrbSkins();
        
        setTimeout(() => {
            document.body.classList.remove(
                'theme-transitioning'
            );
        }, 4500);
}
function initBackground() {
    state.layerA.style.background =
    `radial-gradient(
        circle,
        var(--accent-gold) 0%,
        transparent 70%
    )`;

state.layerA.style.opacity = '1';

state.layerB.style.opacity = '0';
    const canvas = document.createElement('div');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Fixed base configuration map
    const BASE_CONFIGS = [
        { sizePercent: 75, isSecondary: false, blurBase: 110, opacity: 0.40 },
        { sizePercent: 65, isSecondary: true,  blurBase: 100, opacity: 0.55 },
        { sizePercent: 55, isSecondary: false, blurBase: 90,  opacity: 0.30 },
        { sizePercent: 50, isSecondary: true,  blurBase: 85,  opacity: 0.45 },
        { sizePercent: 48, isSecondary: false, blurBase: 80,  opacity: 0.35 },
        { sizePercent: 60, isSecondary: true,  blurBase: 95,  opacity: 0.50 }
    ];

    const orbs = BASE_CONFIGS.map((cfg, i) => {
        const el = document.createElement('div');
        el.className = 'bg-orb';
        canvas.appendChild(el);

        const startX = Math.random() * vw;
        const startY = Math.random() * vh;

        const state = {
            el,
            sizePercent: cfg.sizePercent,
            sizePx: 0, 
            blurBase: cfg.blurBase,
            isSecondary: cfg.isSecondary,
            opacity: cfg.opacity,
            x: startX, y: startY,
            tx: 0, ty: 0, ox: startX, oy: startY,
            duration: 1, elapsed: 0, speedMultiplier: 1.0
        };

        // Base structural styling
        el.style.position = 'absolute';
        el.style.pointerEvents = 'none';
        el.style.opacity = '0'; 

        setTimeout(() => { el.style.opacity = cfg.opacity; }, i * 200);
        pickTarget(state, vw, vh);
        return state;
    });

    window._orbStates = orbs;

    function pickTarget(state, width, height) {
        const styles = getComputedStyle(document.documentElement);
        const speedMultiplier = parseFloat(styles.getPropertyValue('--orb-speed-multiplier')) || 1.0;

        state.ox = state.x;
        state.oy = state.y;
        state.tx = Math.random() * (width * 1.3) - width * 0.15;
        state.ty = Math.random() * (height * 1.3) - height * 0.15;

        const baseDuration = (24000 + Math.random() * 24000);
        state.duration = baseDuration / speedMultiplier;
        state.elapsed = 0;
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

            // Continually look up computed transition width to avoid centering jitter
            const currentComputedSize = parseFloat(getComputedStyle(state.el).width);
            if (!isNaN(currentComputedSize)) {
                state.sizePx = currentComputedSize;
            }

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

function updateActiveOrbSkins() {
    const states = window._orbStates;
    if (!states) return;

    const styles = getComputedStyle(document.documentElement);

    const accentColor =
        styles.getPropertyValue('--accent-gold').trim();

    const secondaryColor =
        styles.getPropertyValue('--orb-secondary-color').trim();

    const blurFactor =
        parseFloat(
            styles.getPropertyValue('--orb-blur-factor')
        ) || 1;

    const scaleMultiplier =
        parseFloat(
            styles.getPropertyValue('--orb-scale-multiplier')
        ) || 1;

    const vw = window.innerWidth;

    states.forEach(state => {

        const color =
            state.isSecondary
                ? secondaryColor
                : accentColor;

        const targetSize =
            Math.round(
                vw *
                (state.sizePercent * scaleMultiplier)
                / 100
            );

        const targetBlur =
            state.blurBase * blurFactor;

        state.el.style.width =
            targetSize + 'px';

        state.el.style.height =
            targetSize + 'px';

        const incoming =
            state.activeLayer === 0
                ? state.layerB
                : state.layerA;

        const outgoing =
            state.activeLayer === 0
                ? state.layerA
                : state.layerB;

        incoming.style.background =
            `radial-gradient(
                circle,
                ${color} 0%,
                transparent 70%
            )`;

        incoming.style.filter =
            `blur(${targetBlur}px)`;

        requestAnimationFrame(() => {

            incoming.style.opacity = '1';
            outgoing.style.opacity = '0';

        });

        state.activeLayer =
            state.activeLayer === 0 ? 1 : 0;

        state.color = color;
    });
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

            if (!closest || !closest.color) return;

            let hex = closest.color.replace('#', '');
            if (hex.length === 3) {
                hex = hex.split('').map(char => char + char).join('');
            }
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);

            const maxDist = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);
            const weight  = Math.max(0, 1 - (minDist / (maxDist * 0.55)));
            const isWarm  = r > g + 30; 
            const peak    = isWarm ? 0.14 : 0.12;
            const alpha   = 0.06 + weight * peak;

            blob.style.background = `radial-gradient(circle, rgba(${r},${g},${b},${alpha.toFixed(3)}) 0%, transparent 65%)`;
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
