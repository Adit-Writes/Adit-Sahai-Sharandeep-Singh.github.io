// ============================================================
//  CONFIGURATION
// ============================================================

const ROTATION_INTERVAL_MS   = 30000;
const ORB_TRANSITION_SECS    = 10.0;



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
  },{
    name: "Midnight Ember",
    tokens: {
      '--bg-base':             '#0b0605',
      '--glass-bg':            'rgba(40, 18, 12, 0.62)',
      '--glass-bg-strong':     'rgba(25, 10, 6, 0.88)',
      '--glass-border':       'rgba(255, 120, 70, 0.22)',
      '--glass-border-hover': 'rgba(255, 120, 70, 0.8)',
      '--text-main':          '#fff3ec',
      '--text-muted':         '#e2b7a3',
      '--text-dim':           '#8a5a48',
      '--accent-gold':        '#ff7a45',
      '--accent-gold-dim':    'rgba(255, 122, 69, 0.15)',
      '--accent-gold-line':   'rgba(255, 122, 69, 0.35)',
      '--orb-colors':         '#ff6b35, #ff3d2e, #ff9f1c, #c44536, #ff784f',
      '--orb-blur-factor':    '1.05',
      '--orb-speed-multiplier':'1.3',
      '--orb-scale-multiplier':'1.05'
    }
  },{
    name: "Arctic Glass",
    tokens: {
      '--bg-base':             '#050b12',
      '--glass-bg':            'rgba(12, 28, 40, 0.6)',
      '--glass-bg-strong':     'rgba(8, 18, 28, 0.9)',
      '--glass-border':       'rgba(120, 200, 255, 0.22)',
      '--glass-border-hover': 'rgba(120, 200, 255, 0.85)',
      '--text-main':          '#eaf6ff',
      '--text-muted':         '#a8c7db',
      '--text-dim':           '#5f7c92',
      '--accent-gold':        '#6dd3ff',
      '--accent-gold-dim':    'rgba(109, 211, 255, 0.15)',
      '--accent-gold-line':   'rgba(109, 211, 255, 0.35)',
      '--orb-colors':         '#6dd3ff, #00a6fb, #90e0ef, #48cae4, #0077b6',
      '--orb-blur-factor':    '0.95',
      '--orb-speed-multiplier':'1.25',
      '--orb-scale-multiplier':'1.1'
    }
  },{
    name: "Golden Dusk",
    tokens: {
      '--bg-base':             '#0e0a06',
      '--glass-bg':            'rgba(40, 26, 12, 0.62)',
      '--glass-bg-strong':     'rgba(25, 16, 8, 0.9)',
      '--glass-border':       'rgba(255, 190, 90, 0.22)',
      '--glass-border-hover': 'rgba(255, 190, 90, 0.85)',
      '--text-main':          '#fff7e6',
      '--text-muted':         '#e2c9a3',
      '--text-dim':           '#9b7a4f',
      '--accent-gold':        '#ffbe5a',
      '--accent-gold-dim':    'rgba(255, 190, 90, 0.15)',
      '--accent-gold-line':   'rgba(255, 190, 90, 0.35)',
      '--orb-colors':         '#ffbe5a, #ff9f1c, #e85d04, #ffd166, #f48c06',
      '--orb-blur-factor':    '1.0',
      '--orb-speed-multiplier':'1.15',
      '--orb-scale-multiplier':'1.08'
    }
  },{
    name: "Cyber Magenta",
    tokens: {
      '--bg-base':             '#07000a',
      '--glass-bg':            'rgba(30, 8, 40, 0.65)',
      '--glass-bg-strong':     'rgba(18, 4, 24, 0.9)',
      '--glass-border':       'rgba(255, 0, 180, 0.25)',
      '--glass-border-hover': 'rgba(255, 0, 180, 0.85)',
      '--text-main':          '#ffe9fb',
      '--text-muted':         '#d7a0cc',
      '--text-dim':           '#8a4f7a',
      '--accent-gold':        '#ff2bd6',
      '--accent-gold-dim':    'rgba(255, 43, 214, 0.15)',
      '--accent-gold-line':   'rgba(255, 43, 214, 0.35)',
      '--orb-colors':         '#ff2bd6, #ff6bd6, #9b5cff, #00e5ff, #ff0080',
      '--orb-blur-factor':    '1.1',
      '--orb-speed-multiplier':'1.4',
      '--orb-scale-multiplier':'1.1'
    }
  },{
    name: "Deep Ocean",
    tokens: {
      '--bg-base':             '#020617',
      '--glass-bg':            'rgba(10, 25, 50, 0.6)',
      '--glass-bg-strong':     'rgba(6, 15, 30, 0.9)',
      '--glass-border':       'rgba(0, 180, 200, 0.25)',
      '--glass-border-hover': 'rgba(0, 180, 200, 0.85)',
      '--text-main':          '#e6f7ff',
      '--text-muted':         '#9cc7d8',
      '--text-dim':           '#4f7c8a',
      '--accent-gold':        '#00b4d8',
      '--accent-gold-dim':    'rgba(0, 180, 216, 0.15)',
      '--accent-gold-line':   'rgba(0, 180, 216, 0.35)',
      '--orb-colors':         '#00b4d8, #0077b6, #90e0ef, #48cae4, #0096c7',
      '--orb-blur-factor':    '0.95',
      '--orb-speed-multiplier':'1.2',
      '--orb-scale-multiplier':'1.1'
    }
  },{
    name: "Void Sakura",
    tokens: {
      '--bg-base':             '#0a0610',
      '--glass-bg':            'rgba(35, 15, 30, 0.6)',
      '--glass-bg-strong':     'rgba(20, 8, 18, 0.9)',
      '--glass-border':       'rgba(255, 105, 180, 0.22)',
      '--glass-border-hover': 'rgba(255, 105, 180, 0.85)',
      '--text-main':          '#fff0f6',
      '--text-muted':         '#e2b3c7',
      '--text-dim':           '#9b6b84',
      '--accent-gold':        '#ff69b4',
      '--accent-gold-dim':    'rgba(255, 105, 180, 0.15)',
      '--accent-gold-line':   'rgba(255, 105, 180, 0.35)',
      '--orb-colors':         '#ff69b4, #ff85a2, #c084fc, #f472b6, #fb7185',
      '--orb-blur-factor':    '1.05',
      '--orb-speed-multiplier':'1.25',
      '--orb-scale-multiplier':'1.08'
    }
  }
];

// Apply a random theme instantly before DOM is ready
(function() {
  const theme = MY_FAVORITE_THEMES[Math.floor(Math.random() * MY_FAVORITE_THEMES.length)];
  const root  = document.documentElement;
  Object.entries(theme.tokens).forEach(([k, v]) => root.style.setProperty(k, v));
})();

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

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function easeOutBack(t) {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeOutElastic(t) {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 :
    Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
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
//  TOKEN LERPER
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

const _tokenLerps       = new Map();
let   _tokenLerpRunning = false;

function startTokenLerpLoop() {
  if (_tokenLerpRunning) return;
  _tokenLerpRunning = true;
  let last = performance.now();

  function tick(now) {
    const dt   = now - last;
    last       = now;
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
      variable, fromColor, toColor, rawTarget,
      elapsed: 0, duration: durationMs,
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
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

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
    const el     = document.createElement('div');
    el.className = 'bg-orb';
    canvas.appendChild(el);

    const startX = Math.random() * vw;
    const startY = Math.random() * vh;

    const state = {
      el,
      sizePercent: cfg.sizePercent,
      blurBase:    cfg.blurBase,
      opacity:     cfg.opacity,
      x: startX, y: startY,
      tx: 0,     ty: 0,
      ox: startX, oy: startY,
      duration: 1, elapsed: 0,

      fromRgb:    { r: 80, g: 0, b: 80 },
      currentRgb: { r: 80, g: 0, b: 80 },
      targetRgb:  { r: 80, g: 0, b: 80 },
      colorT: 1,        colorDuration: ORB_TRANSITION_SECS * 1000,
      fromSizePx: 0,    currentSizePx: 0, targetSizePx: 0,
      sizeT: 1,         sizeDuration:  ORB_TRANSITION_SECS * 1000,
      fromBlurPx: cfg.blurBase, currentBlurPx: cfg.blurBase, targetBlurPx: cfg.blurBase,
      blurT: 1,         blurDuration:  ORB_TRANSITION_SECS * 1000,
    };

    el.style.position      = 'absolute';
    el.style.pointerEvents = 'none';
    el.style.opacity       = '0';
    el.style.transition    = `opacity ${ORB_TRANSITION_SECS}s ease`;

    const initStyles        = getComputedStyle(document.documentElement);
    const initScale         = parseFloat(initStyles.getPropertyValue('--orb-scale-multiplier')) || 1.0;
    const initBlurFactor    = parseFloat(initStyles.getPropertyValue('--orb-blur-factor'))      || 1.0;
    state.currentSizePx     = Math.round(vw * (cfg.sizePercent * initScale) / 100);
    state.fromSizePx        = state.currentSizePx;
    state.targetSizePx      = state.currentSizePx;
    state.currentBlurPx     = cfg.blurBase * initBlurFactor;
    state.fromBlurPx        = state.currentBlurPx;
    state.targetBlurPx      = state.currentBlurPx;

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
      state.elapsed += dt;
      const t = Math.min(state.elapsed / state.duration, 1);
      const e = easeInOut(t);
      state.x = state.ox + (state.tx - state.ox) * e;
      state.y = state.oy + (state.ty - state.oy) * e;

      if (t >= 1) pickTarget(state, window.innerWidth, window.innerHeight);

      if (state.colorT < 1) {
        state.colorT     = Math.min(state.colorT + dt / state.colorDuration, 1);
        state.currentRgb = lerpColor(state.fromRgb, state.targetRgb, easeInOut(state.colorT));
        state.el.style.background = orbGradient(state.currentRgb);
      }

      if (state.sizeT < 1) {
        state.sizeT         = Math.min(state.sizeT + dt / state.sizeDuration, 1);
        state.currentSizePx = state.fromSizePx + (state.targetSizePx - state.fromSizePx) * easeInOut(state.sizeT);
      }

      if (state.blurT < 1) {
        state.blurT         = Math.min(state.blurT + dt / state.blurDuration, 1);
        state.currentBlurPx = state.fromBlurPx + (state.targetBlurPx - state.fromBlurPx) * easeInOut(state.blurT);
      }

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
//  ORB SKIN UPDATE
// ============================================================

function updateActiveOrbSkins(themeTokens, durationMs) {
  const states = window._orbStates;
  if (!states || !states.length) return;

  const styles          = getComputedStyle(document.documentElement);
  const orbColors       = parseOrbColors(styles);
  const blurFactor      = parseFloat(styles.getPropertyValue('--orb-blur-factor'))      || 1.0;
  const scaleMultiplier = parseFloat(styles.getPropertyValue('--orb-scale-multiplier')) || 1.0;
  const vw              = window.innerWidth;
  const fallback        = styles.getPropertyValue('--accent-gold').trim() || '#ffffff';
  const colorPool       = orbColors.length >= 1 ? orbColors : [fallback];
  const transitionMs    = durationMs || ORB_TRANSITION_SECS * 1000;

  states.forEach(state => {
    state.fromRgb    = { ...state.currentRgb };
    state.fromSizePx = state.currentSizePx;
    state.fromBlurPx = state.currentBlurPx;

    const rawTarget      = pickRandomColor(colorPool);
    state.targetRgb      = hexToRgb(rawTarget);
    state.colorT         = 0;
    state.colorDuration  = transitionMs;
    state.targetSizePx   = Math.round(vw * (state.sizePercent * scaleMultiplier) / 100);
    state.sizeT          = 0;
    state.sizeDuration   = transitionMs;
    state.targetBlurPx   = state.blurBase * blurFactor;
    state.blurT          = 0;
    state.blurDuration   = transitionMs;
  });
}

// ============================================================
//  MOUSE GLOW
// ============================================================

function getGlowIntensity() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--glow-blob-intensity').trim();
  return Math.max(0, parseFloat(raw) || 0.72);
}

function buildGlowGradient(r, g, b, intensity) {
  return `radial-gradient(
    circle,
    rgba(${r},${g},${b},${(intensity * 0.50).toFixed(3)})  0%,
    rgba(${r},${g},${b},${(intensity * 0.28).toFixed(3)}) 25%,
    rgba(${r},${g},${b},${(intensity * 0.12).toFixed(3)}) 50%,
    rgba(${r},${g},${b},${(intensity * 0.04).toFixed(3)}) 70%,
    transparent 88%
  )`;
}

function initMouseGlow() {
  document.querySelectorAll('.glass-card').forEach(card => {
    const blob = card.querySelector('.glow-blob');
    if (!blob) return;

    card.addEventListener('mouseenter', () => { blob.style.opacity = '0.2'; });
    card.addEventListener('mouseleave', () => { blob.style.opacity = '0'; });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      blob.style.left = (e.clientX - rect.left) + 'px';
      blob.style.top  = (e.clientY - rect.top)  + 'px';

      const states = window._orbStates;
      if (!states || !states.length) return;

      let closest = null, minDist = Infinity;
      states.forEach(s => {
        const dx = s.x - e.clientX, dy = s.y - e.clientY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < minDist) { minDist = dist; closest = s; }
      });

      if (!closest || !closest.currentRgb) return;
      const { r, g, b } = closest.currentRgb;
      blob.style.background = buildGlowGradient(r, g, b, getGlowIntensity());
    });
  });
}

// ============================================================
//  ENHANCED SCROLL REVEAL
// ============================================================

function initReveal() {
  if (!document.getElementById('_reveal-styles')) {
    const s = document.createElement('style');
    s.id    = '_reveal-styles';
    s.textContent = `
      @media (prefers-reduced-motion: no-preference) {
        .reveal                { opacity: 0; transform: translateY(36px); }
        .reveal.fly-left       { opacity: 0; transform: translateX(-60px) translateY(16px) rotate(-1.5deg); }
        .reveal.fly-right      { opacity: 0; transform: translateX(60px)  translateY(16px) rotate( 1.5deg); }
        .reveal.scale-in       { opacity: 0; transform: scale(0.82) translateY(20px); }
        .reveal.flip-y         { opacity: 0; transform: perspective(600px) rotateX(-22deg) translateY(30px); }
        .reveal.blur-in        { opacity: 0; transform: translateY(20px); filter: blur(10px); }
        .reveal.active                { opacity: 1; transform: translateY(0); }
        .reveal.fly-left.active       { opacity: 1; transform: translateX(0) translateY(0) rotate(0deg); }
        .reveal.fly-right.active      { opacity: 1; transform: translateX(0) translateY(0) rotate(0deg); }
        .reveal.scale-in.active       { opacity: 1; transform: scale(1) translateY(0); }
        .reveal.flip-y.active         { opacity: 1; transform: perspective(600px) rotateX(0) translateY(0); }
        .reveal.blur-in.active        { opacity: 1; transform: translateY(0); filter: blur(0px); }
        .reveal {
          transition:
            opacity   0.85s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            filter    0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-group > *:nth-child(1)  { transition-delay: 0ms;   }
        .reveal-group > *:nth-child(2)  { transition-delay: 90ms;  }
        .reveal-group > *:nth-child(3)  { transition-delay: 180ms; }
        .reveal-group > *:nth-child(4)  { transition-delay: 270ms; }
        .reveal-group > *:nth-child(5)  { transition-delay: 360ms; }
        .reveal-group > *:nth-child(6)  { transition-delay: 450ms; }
        .reveal-group > *:nth-child(n+7){ transition-delay: 540ms; }
        .reveal.reveal-fast   { transition-duration: 0.5s; }
        .reveal.reveal-slow   { transition-duration: 1.2s; }
      }
      @media (prefers-reduced-motion: reduce) {
        .reveal { opacity: 0; transition: opacity 0.4s ease; }
        .reveal.active { opacity: 1; }
      }
    `;
    document.head.appendChild(s);
  }

  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

// ============================================================
//  HERO TITLES — letter-by-letter cinematic reveal
//  Now handles ALL .hero-title elements with staggered timing
// ============================================================

function initHeroTitleReveal() {
  const titles = document.querySelectorAll('.hero-title');
  if (!titles.length) return;

  let globalLetterIndex = 0;

  titles.forEach((title, titleIdx) => {
    const text = title.textContent.trim();
    title.innerHTML = '';
    title.setAttribute('aria-label', text);

    // Add a line-break gap between titles (delay offset for second title)
    const titleDelay = titleIdx * 180;

    const words = text.split(/\s+/);

    words.forEach((word, wi) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.cssText = 'display:inline-block; white-space:nowrap;';

      word.split('').forEach(char => {
        const span       = document.createElement('span');
        span.textContent = char;
        span.style.cssText = `
          display: inline-block;
          opacity: 0;
          transform: translateY(40px) rotateX(-30deg);
          transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1),
                      transform 0.55s cubic-bezier(0.16,1,0.3,1);
          transition-delay: ${titleDelay + globalLetterIndex * 38}ms;
          will-change: transform, opacity;
        `;
        wordSpan.appendChild(span);
        globalLetterIndex++;
      });

      title.appendChild(wordSpan);
      if (wi < words.length - 1) {
        const space = document.createElement('span');
        space.innerHTML    = '&nbsp;';
        space.style.display = 'inline-block';
        title.appendChild(space);
      }
    });

    // Small gap between title rows
    globalLetterIndex += 2;
  });

  setTimeout(() => {
    titles.forEach(title => {
      title.querySelectorAll('span > span').forEach(span => {
        span.style.opacity   = '1';
        span.style.transform = 'translateY(0) rotateX(0)';
      });
    });
  }, 200);
}

// ============================================================
//  HERO EYEBROW — typewriter with blinking cursor
// ============================================================

function initEyebrowTypewriter() {
  const el = document.querySelector('.hero-eyebrow');
  if (!el) return;

  const fullText = el.textContent.trim();
  el.textContent = '';
  el.style.opacity   = '1';
  el.style.transform = 'none';

  const cursor = document.createElement('span');
  cursor.style.cssText = `
    display: inline-block;
    width: 2px; height: 1em;
    background: var(--accent-gold);
    margin-left: 3px;
    vertical-align: text-bottom;
    animation: cursorBlink 0.8s step-end infinite;
  `;
  el.appendChild(cursor);

  if (!document.getElementById('cursor-blink-kf')) {
    const style       = document.createElement('style');
    style.id          = 'cursor-blink-kf';
    style.textContent = `
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; } 50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  let i = 0;
  const speed = 55;

  function type() {
    if (i < fullText.length) {
      el.insertBefore(document.createTextNode(fullText[i]), cursor);
      i++;
      setTimeout(type, speed + Math.random() * 25);
    } else {
      setTimeout(() => {
        cursor.style.animation = 'none';
        cursor.style.opacity   = '0';
      }, 1800);
    }
  }

  setTimeout(type, 600);
}

// ============================================================
//  HERO TAGLINE — fade in word by word
// ============================================================

function initTaglineReveal() {
  const el = document.querySelector('.hero-tagline');
  if (!el) return;

  const text  = el.textContent.trim();
  const words = text.split(/\s+/);
  el.innerHTML = '';

  words.forEach((word, i) => {
    const span       = document.createElement('span');
    span.textContent = word + (i < words.length - 1 ? ' ' : '');
    span.style.cssText = `
      display: inline;
      opacity: 0;
      transition: opacity 0.4s ease;
      transition-delay: ${800 + i * 55}ms;
    `;
    el.appendChild(span);
  });

  setTimeout(() => {
    el.querySelectorAll('span').forEach(s => { s.style.opacity = '1'; });
  }, 300);
}

// ============================================================
//  HERO ACCENT LINE
// ============================================================

function initAccentLineDraw() {
  const dot = document.querySelector('.hero-accent-dot');
  if (!dot) return;
  dot.style.transform = 'scale(0)';
  dot.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
  setTimeout(() => { dot.style.transform = 'scale(1)'; }, 1400);
}

// ============================================================
//  PERSON CARDS — cinematic fly-in with spring + depth
// ============================================================

function initCardFlyIn() {
  const cards = document.querySelectorAll('.person-card');
  if (!cards.length) return;

  if (!document.getElementById('_card-fly-kf')) {
    const s = document.createElement('style');
    s.id    = '_card-fly-kf';
    s.textContent = `
      @keyframes cardFlyLeft  {
        from { opacity:0; transform: translateX(-90px) translateY(40px) rotate(-4deg) scale(0.9); filter: blur(4px); }
        to   { opacity:1; transform: translateX(0)     translateY(0)    rotate(0deg)  scale(1);   filter: blur(0px); }
      }
      @keyframes cardFlyRight {
        from { opacity:0; transform: translateX(90px)  translateY(40px) rotate(4deg)  scale(0.9); filter: blur(4px); }
        to   { opacity:1; transform: translateX(0)     translateY(0)    rotate(0deg)  scale(1);   filter: blur(0px); }
      }
    `;
    document.head.appendChild(s);
  }

  cards.forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.willChange = 'transform, opacity, filter';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card  = entry.target;
      const index = Array.from(cards).indexOf(card);
      const delay = index * 160;
      const anim  = index % 2 === 0 ? 'cardFlyLeft' : 'cardFlyRight';

      card.style.animation = `${anim} 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`;
      io.unobserve(card);
    });
  }, { threshold: 0.12 });

  cards.forEach(card => io.observe(card));
}

// ============================================================
//  STAT CARDS — animated counter roll-up
// ============================================================

function animateCounter(el, target, duration, prefix, suffix) {
  if (!el || isNaN(target)) return;
  const start    = performance.now();
  const startVal = 0;

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutExpo(progress);
    const current  = Math.round(startVal + (target - startVal) * eased);
    el.textContent = (prefix || '') + current + (suffix || '');
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initStatCounters() {
  const statCards = document.querySelectorAll('.stat-card');
  if (!statCards.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);

      const numberEl = entry.target.querySelector('.stat-number');
      if (!numberEl) return;

      const raw    = numberEl.textContent.trim();
      const parsed = parseInt(raw, 10);
      if (isNaN(parsed)) return;

      const delay = Array.from(statCards).indexOf(entry.target) * 150;
      setTimeout(() => animateCounter(numberEl, parsed, 1400, '', ''), delay);
    });
  }, { threshold: 0.4 });

  statCards.forEach(card => io.observe(card));
}

// ============================================================
//  PARALLAX — hero elements drift on scroll
// ============================================================

function initParallax() {
  const heroTitles  = document.querySelectorAll('.hero-title');
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  const heroTagline = document.querySelector('.hero-tagline');
  if (!heroTitles.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      heroTitles.forEach(t => { t.style.transform = `translateY(${sy * 0.22}px)`; });
      if (heroEyebrow) heroEyebrow.style.transform = `translateY(${sy * 0.14}px)`;
      if (heroTagline) heroTagline.style.transform = `translateY(${sy * 0.10}px)`;
      ticking = false;
    });
  }, { passive: true });
}

// ============================================================
//  SCROLL PROGRESS BAR
// ============================================================

function initScrollProgress() {
  let bar = document.querySelector('.progress-bar');
  if (!bar) {
    bar            = document.createElement('div');
    bar.className  = 'progress-bar';
    document.body.prepend(bar);
  }

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
  }, { passive: true });
}

// ============================================================
//  SECTION BADGES — pop in with spring
// ============================================================

function initSectionBadges() {
  const badges = document.querySelectorAll('.section-eyebrow span, .section-divider h2');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'scale(1) translateY(0)';
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  badges.forEach(badge => {
    badge.style.opacity   = '0';
    badge.style.transform = 'scale(0.7) translateY(10px)';
    io.observe(badge);
  });
}

// ============================================================
//  LINK CARDS — staggered slide-up with blur
// ============================================================

function initLinkCardReveal() {
  const linkCards = document.querySelectorAll('.link-card');
  if (!linkCards.length) return;

  linkCards.forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(28px)';
    card.style.filter     = 'blur(4px)';
    card.style.transition = `opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1), filter 0.55s ease`;
    card.style.transitionDelay = `${i * 65}ms`;
    card.style.willChange = 'transform, opacity, filter';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.filter    = 'blur(0px)';
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  linkCards.forEach(card => io.observe(card));
}

// ============================================================
//  STAT CARD TILT — 3D on hover
// ============================================================

function initStatCardTilt() {
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -8;
      const tiltY = dx *  8;
      card.style.transform  = `translateY(-4px) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.transition = 'transform 0.05s linear';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.25,1,0.5,1)';
    });
  });
}

// ============================================================
//  ARTICLE CARD TILT
// ============================================================

function initArticleCardTilt() {
  document.querySelectorAll('.article-card, .book-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -5;
      const tiltY = dx *  5;
      card.style.transform  = `translateY(-6px) scale(1.01) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.transition = 'transform 0.05s linear';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.25,1,0.5,1)';
    });
  });
}

// ============================================================
//  SCROLL VELOCITY WARP
// ============================================================

function initScrollVelocityWarp() {
  let lastY    = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    const velocity = Math.abs(currentY - lastY);
    lastY = currentY;

    const states = window._orbStates;
    if (!states) return;

    const boost = Math.min(velocity / 20, 3.5);
    states.forEach(s => {
      s.el.style.filter = `blur(${(s.currentBlurPx * (1 - boost * 0.12)).toFixed(1)}px)`;
    });
  }, { passive: true });
}

// ============================================================
//  SECTION HEADING REVEAL — shimmer word-by-word
// ============================================================

function initSectionHeadingReveal() {
  document.querySelectorAll('.reveal-heading').forEach(el => {
    if (el.dataset.revealDone) return;
    el.dataset.revealDone = 'true';

    const text  = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = '';
    el.setAttribute('aria-label', text);

    words.forEach((word, i) => {
      const span       = document.createElement('span');
      span.textContent = word;
      span.style.cssText = `
        display: inline-block;
        opacity: 0;
        transform: translateY(22px) skewY(3deg);
        transition:
          opacity   0.6s cubic-bezier(0.16,1,0.3,1),
          transform 0.6s cubic-bezier(0.16,1,0.3,1);
        transition-delay: ${i * 100}ms;
        will-change: transform, opacity;
      `;
      el.appendChild(span);
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode('\u00a0'));
      }
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('span').forEach(s => {
          s.style.opacity   = '1';
          s.style.transform = 'translateY(0) skewY(0)';
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.25 });

    io.observe(el);
  });
}

// ============================================================
//  SEARCH
// ============================================================

function initArticleSearch() {
  const toggle     = document.getElementById('searchToggle');
  const box        = document.getElementById('searchBox');
  const input      = document.getElementById('searchInput');
  const resultsEl  = document.getElementById('searchResults');
  const searchWrap = document.getElementById('searchWrap');

  if (!toggle || !box || !input) return;

  const articleData = Array.from(
    document.querySelectorAll('.article-feed .article-card')
  ).map(card => ({
    title:    card.getAttribute('data-title')       || '',
    desc:     card.getAttribute('data-description') || '',
    category: card.getAttribute('data-category')   || '',
    slug:     card.getAttribute('data-slug')        || '',
    rawTitle: card.querySelector('.article-title')?.textContent || '',
    rawCat:   card.querySelector('.category')?.textContent      || '',
  }));

  function openSearch()  { box.classList.add('open'); input.focus({ preventScroll: true }); }
  function closeSearch() { box.classList.remove('open'); input.value = ''; if (resultsEl) resultsEl.innerHTML = ''; }

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    box.classList.contains('open') ? closeSearch() : openSearch();
  });

  document.addEventListener('click', e => { if (!searchWrap.contains(e.target)) closeSearch(); });
  input.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  if (resultsEl) {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      resultsEl.innerHTML = '';
      if (!q) return;

      const hits = articleData.filter(a =>
        a.title.includes(q) || a.desc.includes(q) || a.category.includes(q)
      ).slice(0, 6);

      if (!hits.length) {
        resultsEl.innerHTML = '<p class="search-no-results">No articles found.</p>';
        return;
      }

      hits.forEach(a => {
        const link     = document.createElement('a');
        link.className = 'search-result-item';
        link.href      = `/Adit-Sahai.github.io/articles/${a.slug}/`;
        link.innerHTML = `
          <strong>${a.rawTitle}</strong>
          <span class="s-cat">${a.rawCat}</span>
        `;
        resultsEl.appendChild(link);
      });
    });
  }
}

// ============================================================
//  ACTIVE NAV LINK
// ============================================================

function initActiveNav() {
  const links    = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id], div[id]');
  if (!sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle('active',
          link.getAttribute('href')?.endsWith('#' + entry.target.id)
        );
      });
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => io.observe(s));
}

// ============================================================
//  SECTION TITLE LARGE — split-word stagger
// ============================================================

function initSectionTitles() {
  document.querySelectorAll('.section-title-large').forEach(el => {
    const text  = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = '';
    el.setAttribute('aria-label', text);

    words.forEach((word, i) => {
      const span       = document.createElement('span');
      span.textContent = word + (i < words.length - 1 ? ' ' : '');
      span.style.cssText = `
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity   0.6s cubic-bezier(0.16,1,0.3,1),
          transform 0.6s cubic-bezier(0.16,1,0.3,1);
        transition-delay: ${i * 80}ms;
      `;
      el.appendChild(span);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('span').forEach(s => {
          s.style.opacity   = '1';
          s.style.transform = 'translateY(0)';
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    io.observe(el);
  });
}

// ============================================================
//  MAGNETIC HOVER — subtle pull effect on CTA buttons
// ============================================================

function initMagneticHover() {
  document.querySelectorAll('.card-btn, .gold-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * 0.25;
      const dy   = (e.clientY - cy) * 0.25;
      btn.style.transform  = `translate(${dx}px, ${dy}px)`;
      btn.style.transition = 'transform 0.1s ease';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform  = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.25,1,0.5,1), background 0.3s ease, color 0.3s ease, border-color 0.3s ease';
    });
  });
}

// ============================================================
//  CORNER BEAMS — short subtle sun rays tucked in corners
// ============================================================

function initCornerBeams() {
  let wrap = document.getElementById('corner-beams');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'corner-beams';
    document.body.appendChild(wrap);
  }

  const CORNERS = [
    { id: 'tl', x: 0, y: 0, fanAngle: 38   },
    { id: 'tr', x: 1, y: 0, fanAngle: 142  },
    { id: 'bl', x: 0, y: 1, fanAngle: -38  },
    { id: 'br', x: 1, y: 1, fanAngle: -142 },
  ];

  const RAY_DEFS = [
    { off: -38, wMul: 2.2, oMul: 0.06 },  // was -20
    { off: -24, wMul: 0.9, oMul: 0.18 },  // was -12
    { off: -12, wMul: 0.4, oMul: 0.28 },  // was -6
    { off:  -4, wMul: 0.2, oMul: 0.32 },  // was -2
    { off:   0, wMul: 0.15,oMul: 0.35 },
    { off:   5, wMul: 0.2, oMul: 0.30 },  // was 3
    { off:  13, wMul: 0.5, oMul: 0.22 },  // was 7
    { off:  25, wMul: 1.0, oMul: 0.14 },  // was 13
    { off:  40, wMul: 2.4, oMul: 0.05 },  // was 22
];

  // ── KEY CHANGE: short fixed length so rays stay in the corner
  const RAY_LENGTH = () => Math.min(window.innerWidth, window.innerHeight) * 0.28;

  const DUST_PER_CORNER = 10;

  function getAccentRgb() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-gold').trim();
    if (raw.startsWith('#')) return hexToRgb(raw);
    const m = raw.match(/rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
    if (m) return { r: +m[1], g: +m[2], b: +m[3] };
    return { r: 255, g: 190, b: 60 };
  }

  const states = CORNERS.map(corner => {
    const anchor = document.createElement('div');
    anchor.className = 'corner-source';
    anchor.style.cssText = 'position:absolute;width:0;height:0;pointer-events:none;';
    wrap.appendChild(anchor);

    // hotspot glow at the corner tip
    const hotspot = document.createElement('div');
    hotspot.className = 'c-hotspot';
    hotspot.style.cssText = 'position:absolute;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;';
    anchor.appendChild(hotspot);

    const hotspot2 = document.createElement('div');
    hotspot2.className = 'c-hotspot';
    hotspot2.style.cssText = 'position:absolute;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;';
    anchor.appendChild(hotspot2);

    const rayEls = RAY_DEFS.map(def => {
      const el = document.createElement('div');
      el.style.cssText = 'position:absolute;top:0;left:0;width:0;height:0;transform-origin:0 0;pointer-events:none;border-style:solid;border-color:transparent;';
      anchor.appendChild(el);
      return { el, def };
    });

    const motes = Array.from({ length: DUST_PER_CORNER }, () => {
      const el = document.createElement('div');
      const sz = 1 + Math.random() * 1.8;
      el.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${sz}px;height:${sz}px;`;
      anchor.appendChild(el);
      return {
        el, sz,
        t:           Math.random(),
        rayIdx:      Math.floor(Math.random() * RAY_DEFS.length),
        speed:       0.00008 + Math.random() * 0.00014,
        lateralT:    Math.random() * Math.PI * 2,
        lateralSpd:  0.0004 + Math.random() * 0.0005,
        lateralAmp:  2 + Math.random() * 8,
        opacityBase: 0.15 + Math.random() * 0.40,
        born:        performance.now() + Math.random() * 1500,
      };
    });

    return {
      corner, anchor, hotspot, hotspot2, rayEls, motes,
      breathPhase: Math.random() * Math.PI * 2,
      swayPhase:   Math.random() * Math.PI * 2,
    };
  });

  function placeAnchors() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    states.forEach(({ corner, anchor }) => {
      anchor.style.left = (corner.x * vw) + 'px';
      anchor.style.top  = (corner.y * vh) + 'px';
    });
  }
  placeAnchors();
  window.addEventListener('resize', placeAnchors);

  let last = performance.now();

  function tick(now) {
    const dt  = now - last;
    last = now;
    const rgb = getAccentRgb();
    const rl  = RAY_LENGTH();

    states.forEach(state => {
      state.breathPhase += dt * 0.00032;
      state.swayPhase   += dt * 0.00014;

      const breathe = 0.75 + 0.25 * Math.sin(state.breathPhase);
      const sway    = Math.sin(state.swayPhase) * 3;

      // ── hotspot — small, tight to corner
      const hSize  = 50 + 18 * breathe;   // was 22 + 8
      const hSize2 = 130 + 50 * breathe;  // was 55 + 20
      state.hotspot.style.width      = hSize + 'px';
      state.hotspot.style.height     = hSize + 'px';
      state.hotspot.style.opacity    = (0.7 * breathe).toFixed(3);
      state.hotspot.style.background = `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.9) 0%, rgba(${rgb.r},${rgb.g},${rgb.b},0.3) 50%, transparent 100%)`;
      state.hotspot.style.boxShadow  = `0 0 ${hSize}px rgba(${rgb.r},${rgb.g},${rgb.b},0.6)`;
      state.hotspot2.style.width     = hSize2 + 'px';
      state.hotspot2.style.height    = hSize2 + 'px';
      state.hotspot2.style.opacity   = (0.25 * breathe).toFixed(3);
      state.hotspot2.style.background = `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.18) 0%, transparent 70%)`;

      // ── rays — short, subtle
      state.rayEls.forEach(({ el, def }) => {
        const angle    = state.corner.fanAngle + def.off + sway;
        const halfW    = rl * Math.tan((2.0 * Math.PI) / 180) * def.wMul;
        const opacity  = def.oMul * breathe * 0.18; // subtle multiplier

        el.style.transform    = `rotate(${angle - 90}deg) translateX(${-halfW}px)`;
        el.style.borderLeft   = `${halfW}px solid transparent`;
        el.style.borderRight  = `${halfW}px solid transparent`;
        el.style.borderTop    = `${rl}px solid rgba(${rgb.r},${rgb.g},${rgb.b},${opacity.toFixed(4)})`;
        el.style.borderBottom = 'none';
      });

      // ── dust motes
      state.motes.forEach(mote => {
        if (now < mote.born) { mote.el.style.opacity = '0'; return; }
        mote.t += mote.speed * dt;
        if (mote.t > 1) mote.t -= 1;
        mote.lateralT += mote.lateralSpd * dt;

        const def      = RAY_DEFS[mote.rayIdx];
        const angle    = state.corner.fanAngle + def.off + sway;
        const angleRad = (angle * Math.PI) / 180;
        const dist     = mote.t * rl * 0.85;
        const lateral  = Math.sin(mote.lateralT) * mote.lateralAmp;
        const perpRad  = angleRad + Math.PI / 2;

        const x = dist * Math.cos(angleRad) + lateral * Math.cos(perpRad);
        const y = dist * Math.sin(angleRad) + lateral * Math.sin(perpRad);

        const fadeIn  = Math.min(mote.t * 5, 1);
        const fadeOut = 1 - Math.pow(mote.t, 2.5);
        const opacity = mote.opacityBase * fadeIn * fadeOut * breathe * 0.6;

        mote.el.style.transform  = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
        mote.el.style.opacity    = opacity.toFixed(3);
        mote.el.style.background = `rgba(${rgb.r},${rgb.g},${rgb.b},0.9)`;
        mote.el.style.boxShadow  = `0 0 ${mote.sz * 2}px rgba(${rgb.r},${rgb.g},${rgb.b},0.5)`;
      });
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}


// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  initReveal();
  initMouseGlow();
  initArticleSearch();
  initActiveNav();
  initCornerBeams();
  
  // Hero cinematic sequence
  initHeroTitleReveal();
  initEyebrowTypewriter();
  initTaglineReveal();
  initAccentLineDraw();

  // Cards & sections
  initCardFlyIn();
  initStatCounters();
  initParallax();
  initScrollProgress();
  initSectionBadges();
  initLinkCardReveal();
  initSectionHeadingReveal();

  // Interactive polish
  initStatCardTilt();
  initArticleCardTilt();
  initScrollVelocityWarp();
  initSectionTitles();
  initMagneticHover();

  // Theme rotation
  applyRandomTheme();
  setInterval(applyRandomTheme, ROTATION_INTERVAL_MS);
});
