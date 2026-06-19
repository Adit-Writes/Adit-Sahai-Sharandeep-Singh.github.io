// ============================================================
//  CONFIGURATION
// ============================================================

const ROTATION_INTERVAL_MS  = 30000;
const ORB_TRANSITION_SECS   = 10.0;
const IS_MOBILE             = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
const REDUCED_MOTION        = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
//  THEME DEFINITIONS
// ============================================================

const MY_FAVORITE_THEMES = [
  {
    name: "Onyx & Gold", // Classic Luxury (Deep Black & Metallic Gold)
    tokens: {
      '--bg-base':             '#050505',
      '--glass-bg':            'rgba(15, 15, 15, 0.65)',
      '--glass-bg-strong':     'rgba(10, 10, 10, 0.88)',
      '--glass-border':        'rgba(212, 175, 55, 0.15)', // Subtle gold
      '--glass-border-hover':  'rgba(212, 175, 55, 0.60)',
      '--text-main':           '#faf9f6', // Pearl white
      '--text-muted':          '#a39b8b',
      '--text-dim':            '#5c574d',
      '--accent-gold':         '#d4af37', // Metallic Gold
      '--accent-gold-dim':     'rgba(212, 175, 55, 0.12)',
      '--accent-gold-line':    'rgba(212, 175, 55, 0.25)',
      '--orb-colors':          '#d4af37, #f3e5ab, #aa8c2c, #e6c27a, #8c7322',
      '--orb-blur-factor':     '1.4',  // Very soft
      '--orb-speed-multiplier':'0.6',  // Very slow, ambient movement
      '--orb-scale-multiplier':'1.15'
    }
  },
  {
    name: "Obsidian Copper", // Modern Industrial Luxury (Warm Charcoal & Rose Gold/Copper)
    tokens: {
      '--bg-base':             '#0a0908',
      '--glass-bg':            'rgba(25, 20, 18, 0.65)',
      '--glass-bg-strong':     'rgba(18, 14, 12, 0.88)',
      '--glass-border':        'rgba(184, 115, 51, 0.15)',
      '--glass-border-hover':  'rgba(184, 115, 51, 0.60)',
      '--text-main':           '#fffcf2', // Warm ivory
      '--text-muted':          '#b5a596',
      '--text-dim':            '#6b6158',
      '--accent-gold':         '#b87333', // Copper
      '--accent-gold-dim':     'rgba(184, 115, 51, 0.12)',
      '--accent-gold-line':    'rgba(184, 115, 51, 0.25)',
      '--orb-colors':          '#b87333, #cd7f32, #d99058, #995522, #e6a87c',
      '--orb-blur-factor':     '1.3',
      '--orb-speed-multiplier':'0.7',
      '--orb-scale-multiplier':'1.1'
    }
  },
  {
    name: "Imperial Emerald", // Organic Luxury (Deepest Forest & Champagne)
    tokens: {
      '--bg-base':             '#020a06',
      '--glass-bg':            'rgba(10, 25, 18, 0.65)',
      '--glass-bg-strong':     'rgba(6, 18, 12, 0.88)',
      '--glass-border':        'rgba(212, 195, 145, 0.15)',
      '--glass-border-hover':  'rgba(212, 195, 145, 0.60)',
      '--text-main':           '#f8f9fa',
      '--text-muted':          '#9ba8a1',
      '--text-dim':            '#55635b',
      '--accent-gold':         '#d4c391', // Champagne Gold
      '--accent-gold-dim':     'rgba(212, 195, 145, 0.12)',
      '--accent-gold-line':    'rgba(212, 195, 145, 0.25)',
      '--orb-colors':          '#047857, #065f46, #d4c391, #022c22, #f3eacb', // Mix of dark emerald and champagne
      '--orb-blur-factor':     '1.5',  // Maximum blur for a cloudy, mysterious vibe
      '--orb-speed-multiplier':'0.65',
      '--orb-scale-multiplier':'1.2'
    }
  },
  {
    name: "Midnight Pearl", // Minimalist Tech Luxury (Deepest Navy & Silver/Ice)
    tokens: {
      '--bg-base':             '#03050a',
      '--glass-bg':            'rgba(15, 20, 35, 0.65)',
      '--glass-bg-strong':     'rgba(8, 12, 25, 0.88)',
      '--glass-border':        'rgba(203, 213, 225, 0.15)',
      '--glass-border-hover':  'rgba(203, 213, 225, 0.60)',
      '--text-main':           '#f8fafc', // Crisp snow white
      '--text-muted':          '#94a3b8',
      '--text-dim':            '#475569',
      '--accent-gold':         '#cbd5e1', // Pearlescent Silver
      '--accent-gold-dim':     'rgba(203, 213, 225, 0.12)',
      '--accent-gold-line':    'rgba(203, 213, 225, 0.25)',
      '--orb-colors':          '#cbd5e1, #f1f5f9, #94a3b8, #e2e8f0, #64748b',
      '--orb-blur-factor':     '1.25',
      '--orb-speed-multiplier':'0.75',
      '--orb-scale-multiplier':'1.05'
    }
  },
  {
    name: "Amethyst Ash", // Avant-Garde Luxury (Deep Violet-Black & Warm Bronze)
    tokens: {
      '--bg-base':             '#08060a',
      '--glass-bg':            'rgba(25, 18, 35, 0.65)',
      '--glass-bg-strong':     'rgba(16, 12, 22, 0.88)',
      '--glass-border':        'rgba(224, 192, 151, 0.15)',
      '--glass-border-hover':  'rgba(224, 192, 151, 0.60)',
      '--text-main':           '#fdfcfb',
      '--text-muted':          '#bca8c2',
      '--text-dim':            '#6a5a70',
      '--accent-gold':         '#e0c097', // Warm Bronze
      '--accent-gold-dim':     'rgba(224, 192, 151, 0.12)',
      '--accent-gold-line':    'rgba(224, 192, 151, 0.25)',
      '--orb-colors':          '#e0c097, #c89f70, #2e1f47, #4c326b, #f5dabb', // Bronze mixing into deep purple
      '--orb-blur-factor':     '1.35',
      '--orb-speed-multiplier':'0.7',
      '--orb-scale-multiplier':'1.15'
    }
  },{
    name: "Ruby Horizon", // Inspired by: Crimson / Midnight Ember
    tokens: {
      '--bg-base':             '#080304',
      '--glass-bg':            'rgba(25, 10, 12, 0.60)',
      '--glass-bg-strong':     'rgba(18, 6, 8, 0.88)',
      '--glass-border':        'rgba(155, 44, 58, 0.15)',
      '--glass-border-hover':  'rgba(155, 44, 58, 0.50)',
      '--text-main':           '#fcf5f5',
      '--text-muted':          '#c7acaf',
      '--text-dim':            '#7a5e62',
      '--accent-gold':         '#9b2c3a', // Muted Ruby
      '--accent-gold-dim':     'rgba(155, 44, 58, 0.12)',
      '--accent-gold-line':    'rgba(155, 44, 58, 0.25)',
      '--orb-colors':          '#9b2c3a, #b04353, #e5a4ab, #5e1620, #c46d78',
      '--orb-blur-factor':     '1.45',
      '--orb-speed-multiplier':'0.65',
      '--orb-scale-multiplier':'1.15'
    }
  },
  {
    name: "Glacial Sapphire", // Inspired by: Aurora Ice / Arctic Glass
    tokens: {
      '--bg-base':             '#030508',
      '--glass-bg':            'rgba(10, 15, 25, 0.60)',
      '--glass-bg-strong':     'rgba(6, 10, 18, 0.88)',
      '--glass-border':        'rgba(107, 140, 174, 0.15)',
      '--glass-border-hover':  'rgba(107, 140, 174, 0.50)',
      '--text-main':           '#f4f7fa',
      '--text-muted':          '#a3b5c7',
      '--text-dim':            '#5e7082',
      '--accent-gold':         '#6b8cae', // Frosted Sapphire
      '--accent-gold-dim':     'rgba(107, 140, 174, 0.12)',
      '--accent-gold-line':    'rgba(107, 140, 174, 0.25)',
      '--orb-colors':          '#6b8cae, #8caecf, #4a6b8c, #cddbe8, #34506e',
      '--orb-blur-factor':     '1.3',
      '--orb-speed-multiplier':'0.7',
      '--orb-scale-multiplier':'1.08'
    }
  },
  {
    name: "Desert Titanium", // Inspired by: Sand & Ivory
    tokens: {
      '--bg-base':             '#080706',
      '--glass-bg':            'rgba(25, 22, 20, 0.60)',
      '--glass-bg-strong':     'rgba(18, 15, 14, 0.88)',
      '--glass-border':        'rgba(168, 159, 145, 0.15)',
      '--glass-border-hover':  'rgba(168, 159, 145, 0.50)',
      '--text-main':           '#fbfaf9',
      '--text-muted':          '#bfb6a8',
      '--text-dim':            '#787063',
      '--accent-gold':         '#a89f91', // Warm Titanium
      '--accent-gold-dim':     'rgba(168, 159, 145, 0.12)',
      '--accent-gold-line':    'rgba(168, 159, 145, 0.25)',
      '--orb-colors':          '#a89f91, #c4bcb0, #877e70, #e0d9cf, #6e6557',
      '--orb-blur-factor':     '1.35',
      '--orb-speed-multiplier':'0.6',
      '--orb-scale-multiplier':'1.1'
    }
  },
  {
    name: "Malachite Shadows", // Inspired by: Neon Forest
    tokens: {
      '--bg-base':             '#020604',
      '--glass-bg':            'rgba(8, 20, 14, 0.60)',
      '--glass-bg-strong':     'rgba(5, 15, 10, 0.88)',
      '--glass-border':        'rgba(74, 124, 89, 0.15)',
      '--glass-border-hover':  'rgba(74, 124, 89, 0.50)',
      '--text-main':           '#f2f9f5',
      '--text-muted':          '#a5bfae',
      '--text-dim':            '#5a7563',
      '--accent-gold':         '#4a7c59', // Muted Malachite
      '--accent-gold-dim':     'rgba(74, 124, 89, 0.12)',
      '--accent-gold-line':    'rgba(74, 124, 89, 0.25)',
      '--orb-colors':          '#4a7c59, #6b9e7a, #2f5439, #a3c4b0, #1c3623',
      '--orb-blur-factor':     '1.4',
      '--orb-speed-multiplier':'0.65',
      '--orb-scale-multiplier':'1.15'
    }
  },
  {
    name: "Royal Amaranth", // Inspired by: Velvet Void / Void Sakura
    tokens: {
      '--bg-base':             '#060306',
      '--glass-bg':            'rgba(22, 12, 22, 0.60)',
      '--glass-bg-strong':     'rgba(16, 8, 16, 0.88)',
      '--glass-border':        'rgba(136, 90, 112, 0.15)',
      '--glass-border-hover':  'rgba(136, 90, 112, 0.50)',
      '--text-main':           '#fbf4f8',
      '--text-muted':          '#c9aabc',
      '--text-dim':            '#7a5a6a',
      '--accent-gold':         '#885a70', // Dusty Amaranth
      '--accent-gold-dim':     'rgba(136, 90, 112, 0.12)',
      '--accent-gold-line':    'rgba(136, 90, 112, 0.25)',
      '--orb-colors':          '#885a70, #a87b90, #663e52, #c7a4b6, #472636',
      '--orb-blur-factor':     '1.3',
      '--orb-speed-multiplier':'0.7',
      '--orb-scale-multiplier':'1.12'
    }
  },
  {
    name: "Tungsten Glow", // Inspired by: Obsidian Pulse
    tokens: {
      '--bg-base':             '#050505',
      '--glass-bg':            'rgba(18, 18, 18, 0.60)',
      '--glass-bg-strong':     'rgba(12, 12, 12, 0.88)',
      '--glass-border':        'rgba(122, 130, 136, 0.15)',
      '--glass-border-hover':  'rgba(122, 130, 136, 0.50)',
      '--text-main':           '#f7f8f9',
      '--text-muted':          '#aeb3b8',
      '--text-dim':            '#656a6e',
      '--accent-gold':         '#7a8288', // Tungsten Steel
      '--accent-gold-dim':     'rgba(122, 130, 136, 0.12)',
      '--accent-gold-line':    'rgba(122, 130, 136, 0.25)',
      '--orb-colors':          '#7a8288, #9ba3a8, #5a6066, #c5cacc, #3e4448',
      '--orb-blur-factor':     '1.35',
      '--orb-speed-multiplier':'0.55',
      '--orb-scale-multiplier':'1.05'
    }
  },
  {
    name: "Abyssal Cobalt", // Inspired by: Deep Ocean
    tokens: {
      '--bg-base':             '#02040a',
      '--glass-bg':            'rgba(10, 15, 30, 0.60)',
      '--glass-bg-strong':     'rgba(6, 10, 22, 0.88)',
      '--glass-border':        'rgba(59, 89, 152, 0.15)',
      '--glass-border-hover':  'rgba(59, 89, 152, 0.50)',
      '--text-main':           '#f2f5fb',
      '--text-muted':          '#a2b0ce',
      '--text-dim':            '#556382',
      '--accent-gold':         '#3b5998', // Deep Cobalt
      '--accent-gold-dim':     'rgba(59, 89, 152, 0.12)',
      '--accent-gold-line':    'rgba(59, 89, 152, 0.25)',
      '--orb-colors':          '#3b5998, #5977b5, #223766, #88a4d4, #152240',
      '--orb-blur-factor':     '1.45',
      '--orb-speed-multiplier':'0.6',
      '--orb-scale-multiplier':'1.2'
    }
  },
  {
    name: "Rose Quartz", // New Luxury Concept
    tokens: {
      '--bg-base':             '#080506',
      '--glass-bg':            'rgba(25, 18, 20, 0.60)',
      '--glass-bg-strong':     'rgba(18, 12, 14, 0.88)',
      '--glass-border':        'rgba(191, 163, 168, 0.15)',
      '--glass-border-hover':  'rgba(191, 163, 168, 0.50)',
      '--text-main':           '#fcf8f9',
      '--text-muted':          '#cebcc0',
      '--text-dim':            '#8a7579',
      '--accent-gold':         '#bfa3a8', // Rose Quartz
      '--accent-gold-dim':     'rgba(191, 163, 168, 0.12)',
      '--accent-gold-line':    'rgba(191, 163, 168, 0.25)',
      '--orb-colors':          '#bfa3a8, #d4bcc0, #967d82, #ecd8db, #755e62',
      '--orb-blur-factor':     '1.3',
      '--orb-speed-multiplier':'0.65',
      '--orb-scale-multiplier':'1.1'
    }
  },
  {
    name: "Bronze Patina", // Inspired by: Golden Dusk
    tokens: {
      '--bg-base':             '#070605',
      '--glass-bg':            'rgba(24, 20, 16, 0.60)',
      '--glass-bg-strong':     'rgba(16, 14, 10, 0.88)',
      '--glass-border':        'rgba(156, 122, 82, 0.15)',
      '--glass-border-hover':  'rgba(156, 122, 82, 0.50)',
      '--text-main':           '#fbf9f6',
      '--text-muted':          '#bdae9c',
      '--text-dim':            '#736657',
      '--accent-gold':         '#9c7a52', // Aged Bronze
      '--accent-gold-dim':     'rgba(156, 122, 82, 0.12)',
      '--accent-gold-line':    'rgba(156, 122, 82, 0.25)',
      '--orb-colors':          '#9c7a52, #b89872, #3a6358, #608f82, #735332', // Mixes bronze with oxidized teal
      '--orb-blur-factor':     '1.4',
      '--orb-speed-multiplier':'0.6',
      '--orb-scale-multiplier':'1.15'
    }
  },
  {
    name: "Celestial Ivory", // New Luxury Concept
    tokens: {
      '--bg-base':             '#080808',
      '--glass-bg':            'rgba(25, 25, 24, 0.60)',
      '--glass-bg-strong':     'rgba(18, 18, 16, 0.88)',
      '--glass-border':        'rgba(224, 218, 199, 0.12)',
      '--glass-border-hover':  'rgba(224, 218, 199, 0.45)',
      '--text-main':           '#ffffff',
      '--text-muted':          '#c7c2b5',
      '--text-dim':            '#7d786d',
      '--accent-gold':         '#e0dac7', // Warm Ivory
      '--accent-gold-dim':     'rgba(224, 218, 199, 0.10)',
      '--accent-gold-line':    'rgba(224, 218, 199, 0.20)',
      '--orb-colors':          '#e0dac7, #f2efe6, #b8b29e, #ffffff, #8a8571',
      '--orb-blur-factor':     '1.5', // Ultra blurred for a cloudy, soft white glow
      '--orb-speed-multiplier':'0.5', // The slowest movement
      '--orb-scale-multiplier':'1.25'
    }
  },
  {
    name: "Vintage Violet", // Inspired by: Cyber Magenta
    tokens: {
      '--bg-base':             '#050308',
      '--glass-bg':            'rgba(18, 12, 25, 0.60)',
      '--glass-bg-strong':     'rgba(12, 8, 18, 0.88)',
      '--glass-border':        'rgba(107, 91, 122, 0.15)',
      '--glass-border-hover':  'rgba(107, 91, 122, 0.50)',
      '--text-main':           '#f8f6fc',
      '--text-muted':          '#b2a7bd',
      '--text-dim':            '#6a5f73',
      '--accent-gold':         '#6b5b7a', // Dusty Violet
      '--accent-gold-dim':     'rgba(107, 91, 122, 0.12)',
      '--accent-gold-line':    'rgba(107, 91, 122, 0.25)',
      '--orb-colors':          '#6b5b7a, #8c7b9c, #4c3e59, #b5a8c2, #32263d',
      '--orb-blur-factor':     '1.3',
      '--orb-speed-multiplier':'0.65',
      '--orb-scale-multiplier':'1.1'
    }
  },
  {
    name: "Smoked Topaz", // Inspired by: Golden Dusk / Amber
    tokens: {
      '--bg-base':             '#0a0602',
      '--glass-bg':            'rgba(25, 15, 8, 0.60)',
      '--glass-bg-strong':     'rgba(18, 10, 5, 0.88)',
      '--glass-border':        'rgba(176, 125, 76, 0.15)',
      '--glass-border-hover':  'rgba(176, 125, 76, 0.50)',
      '--text-main':           '#fdf9f4',
      '--text-muted':          '#c7a98f',
      '--text-dim':            '#7a6350',
      '--accent-gold':         '#b07d4c', // Smoked Amber
      '--accent-gold-dim':     'rgba(176, 125, 76, 0.12)',
      '--accent-gold-line':    'rgba(176, 125, 76, 0.25)',
      '--orb-colors':          '#b07d4c, #cc9b6a, #8a5a2e, #e8be97, #5c3817',
      '--orb-blur-factor':     '1.35',
      '--orb-speed-multiplier':'0.6',
      '--orb-scale-multiplier':'1.15'
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

const _tokenLerps = new Map();

function applyTokenLerpTick(dt) {
  if (!_tokenLerps.size) return;
  const root = document.documentElement;
  _tokenLerps.forEach((state, variable) => {
    state.elapsed = Math.min(state.elapsed + dt, state.duration);
    const t   = easeInOut(state.elapsed / state.duration);
    const cur = lerpRgba(state.fromColor, state.toColor, t);
    root.style.setProperty(variable, serializeColor(cur, state.rawTarget));
    if (state.elapsed >= state.duration) _tokenLerps.delete(variable);
  });
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
    if (!toColor) { root.style.setProperty(variable, rawTarget); return; }
    const currentRaw = styles.getPropertyValue(variable).trim();
    const fromColor  = parseColorToken(currentRaw) || toColor;
    _tokenLerps.set(variable, {
      variable, fromColor, toColor, rawTarget,
      elapsed: 0, duration: durationMs,
    });
  });
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
  const durationMs  = ORB_TRANSITION_SECS * 1000;
  applyThemeTokensSmooth(randomTheme.tokens, durationMs);
  updateActiveOrbSkins(randomTheme.tokens, durationMs);
}

// ============================================================
//  BACKGROUND — orb system (transform-based, no layout thrash)
// ============================================================

function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Fewer orbs on mobile to save GPU
  const BASE_CONFIGS = IS_MOBILE ? [
    { sizePercent: 55, isSecondary: false, blurBase: 80, opacity: 0.35 },
    { sizePercent: 48, isSecondary: true,  blurBase: 70, opacity: 0.45 },
    { sizePercent: 42, isSecondary: false, blurBase: 60, opacity: 0.28 },
  ] : [
    { sizePercent: 38, isSecondary: false, blurBase: 110, opacity: 0.40 },
    { sizePercent: 32, isSecondary: true,  blurBase: 100, opacity: 0.55 },
    { sizePercent: 28, isSecondary: false, blurBase:  90, opacity: 0.30 },
    { sizePercent: 25, isSecondary: true,  blurBase:  85, opacity: 0.45 },
    { sizePercent: 24, isSecondary: false, blurBase:  80, opacity: 0.35 },
    { sizePercent: 30, isSecondary: true,  blurBase:  95, opacity: 0.50 }
  ];

  // On mobile, lower blur values dramatically
  const blurScale = IS_MOBILE ? 0.5 : 1.0;

  const orbs = BASE_CONFIGS.map((cfg, i) => {
    const el     = document.createElement('div');
    el.className = 'bg-orb';
    canvas.appendChild(el);

    const startX = Math.random() * vw;
    const startY = Math.random() * vh;

    const initStyles    = getComputedStyle(document.documentElement);
    const initScale     = parseFloat(initStyles.getPropertyValue('--orb-scale-multiplier')) || 1.0;
    const initBlurFact  = parseFloat(initStyles.getPropertyValue('--orb-blur-factor'))      || 1.0;
    const initSizePx    = Math.round(vw * (cfg.sizePercent * initScale) / 100);
    const initBlurPx    = cfg.blurBase * initBlurFact * blurScale;

    const state = {
      el,
      sizePercent: cfg.sizePercent,
      blurBase:    cfg.blurBase,
      blurScale,
      opacity:     cfg.opacity,
      // positions stored as center coords; we use transform for rendering
      x: startX, y: startY,
      tx: 0,     ty: 0,
      ox: startX, oy: startY,
      duration: 1, elapsed: 0,

      fromRgb:    { r: 80, g: 0, b: 80 },
      currentRgb: { r: 80, g: 0, b: 80 },
      targetRgb:  { r: 80, g: 0, b: 80 },
      colorT: 1,       colorDuration: ORB_TRANSITION_SECS * 1000,
      fromSizePx:    initSizePx, currentSizePx: initSizePx, targetSizePx: initSizePx,
      sizeT: 1,        sizeDuration:  ORB_TRANSITION_SECS * 1000,
      fromBlurPx:    initBlurPx, currentBlurPx: initBlurPx, targetBlurPx: initBlurPx,
      blurT: 1,        blurDuration:  ORB_TRANSITION_SECS * 1000,
      // track last rendered values to avoid redundant style writes
      _lastX: -9999, _lastY: -9999, _lastSz: -1, _lastBlur: -1,
    };

    el.style.cssText = `
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      will-change: transform, background;
      opacity: 0;
      transition: opacity ${ORB_TRANSITION_SECS}s ease;
      top: 0; left: 0;
      width:  ${initSizePx}px;
      height: ${initSizePx}px;
      filter: blur(${initBlurPx.toFixed(1)}px);
    `;

    setTimeout(() => { el.style.opacity = cfg.opacity; }, i * 200);
    pickOrbTarget(state, vw, vh);
    return state;
  });

  window._orbStates = orbs;

  function pickOrbTarget(state, width, height) {
    const styles          = getComputedStyle(document.documentElement);
    const speedMultiplier = parseFloat(styles.getPropertyValue('--orb-speed-multiplier')) || 1.0;
    state.ox       = state.x;
    state.oy       = state.y;
    state.tx       = Math.random() * (width  * 1.3) - width  * 0.15;
    state.ty       = Math.random() * (height * 1.3) - height * 0.15;
    const base     = (IS_MOBILE ? 30000 : 24000) + Math.random() * 24000;
    state.duration = base / speedMultiplier;
    state.elapsed  = 0;
  }

  // Expose pickOrbTarget so the unified loop can call it
  window._pickOrbTarget = pickOrbTarget;
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

    const rawTarget     = pickRandomColor(colorPool);
    state.targetRgb     = hexToRgb(rawTarget);
    state.colorT        = 0;
    state.colorDuration = transitionMs;
    state.targetSizePx  = Math.round(vw * (state.sizePercent * scaleMultiplier) / 100);
    state.sizeT         = 0;
    state.sizeDuration  = transitionMs;
    state.targetBlurPx  = state.blurBase * blurFactor * state.blurScale;
    state.blurT         = 0;
    state.blurDuration  = transitionMs;
  });
}

// ============================================================
//  AMBIENT PARTICLES (canvas-based, runs on all pages)
// ============================================================

function initAmbientParticles() {
  if (REDUCED_MOTION) return;

  let canvas = document.getElementById('ambient-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'ambient-canvas';
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.6;';
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext('2d');
  const GOLD  = [212, 175, 55];
  const WHITE = [220, 210, 255];
  let W, H, particles;

  function rand(min, max) { return min + Math.random() * (max - min); }

  function makeParticle(randomY) {
    const useGold = Math.random() > 0.35;
    const [r, g, b] = useGold ? GOLD : WHITE;
    return {
      x: rand(0, W), y: randomY ? rand(0, H) : H + 10,
      r: rand(1, IS_MOBILE ? 2.5 : 3.5),
      speed: rand(0.18, IS_MOBILE ? 0.4 : 0.55),
      drift: rand(-0.12, 0.12),
      alpha: rand(0.04, 0.28),
      alphaTarget: rand(0.1, 0.35),
      alphaDelta: rand(0.003, 0.008) * (Math.random() > 0.5 ? 1 : -1),
      r_val: r, g_val: g, b_val: b,
      pulse: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.008, 0.025),
    };
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    const count = Math.min(IS_MOBILE ? 30 : 55, Math.floor(W * H / 18000));
    particles = Array.from({ length: count }, () => makeParticle(true));
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Store draw fn for unified loop
  window._ambientParticlesTick = function() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += p.drift;
      p.pulse += p.pulseSpeed;
      p.alpha += p.alphaDelta;
      if (p.alpha > p.alphaTarget || p.alpha < 0.02) p.alphaDelta *= -1;

      const displayR = p.r * (1 + 0.2 * Math.sin(p.pulse));
      const a = Math.max(0, Math.min(0.5, p.alpha));

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, displayR * 3.5);
      gradient.addColorStop(0,   `rgba(${p.r_val},${p.g_val},${p.b_val},${a})`);
      gradient.addColorStop(0.4, `rgba(${p.r_val},${p.g_val},${p.b_val},${a * 0.5})`);
      gradient.addColorStop(1,   `rgba(${p.r_val},${p.g_val},${p.b_val},0)`);

      ctx.beginPath();
      ctx.arc(p.x, p.y, displayR * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      if (p.y < -20 || p.x < -20 || p.x > W + 20) {
        particles[i] = makeParticle(false);
        particles[i].x = rand(0, W);
      }
    });
  };
}

// ============================================================
//  CORNER BEAMS — desktop only
// ============================================================

function initCornerBeams() {
  // Skip entirely on mobile — too GPU-heavy
  if (IS_MOBILE) return;

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
    { off: -50, wMul: 2.2, oMul: 0.06 },
    { off: -40, wMul: 0.9, oMul: 0.18 },
    { off: -35, wMul: 0.4, oMul: 0.28 },
    { off:  -15, wMul: 0.2, oMul: 0.32 },
    { off:   -5, wMul: 0.15,oMul: 0.35 },
    { off:   10, wMul: 0.2, oMul: 0.30 },
    { off:  25, wMul: 0.5, oMul: 0.22 },
    { off:  35, wMul: 1.0, oMul: 0.14 },
    { off:  60, wMul: 2.4, oMul: 0.05 },
  ];

  const RAY_LENGTH = () => Math.min(window.innerWidth, window.innerHeight) * 0.18;
  const DUST_PER_CORNER = 3;

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
      el.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${sz}px;height:${sz}px;will-change:transform,opacity;`;
      anchor.appendChild(el);
      return {
        el, sz,
        t: Math.random(),
        rayIdx: Math.floor(Math.random() * RAY_DEFS.length),
        speed: 0.00008 + Math.random() * 0.00014,
        lateralT: Math.random() * Math.PI * 2,
        lateralSpd: 0.0004 + Math.random() * 0.0005,
        lateralAmp: 2 + Math.random() * 8,
        opacityBase: 0.15 + Math.random() * 0.40,
        born: performance.now() + Math.random() * 1500,
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
  window.addEventListener('resize', placeAnchors, { passive: true });

  // Store tick fn for unified loop
  window._cornerBeamsTick = function(now, dt) {
    const rgb = getAccentRgb();
    const rl  = RAY_LENGTH();

    states.forEach(state => {
      state.breathPhase += dt * 0.00032;
      state.swayPhase   += dt * 0.00014;

      const breathe = 0.75 + 0.25 * Math.sin(state.breathPhase);
      const sway    = Math.sin(state.swayPhase) * 3;

      const hSize  = 120 + 18 * breathe;
      const hSize2 = 170 + 80 * breathe;
      state.hotspot.style.width      = hSize + 'px';
      state.hotspot.style.height     = hSize + 'px';
      state.hotspot.style.opacity    = (0.3 * breathe).toFixed(3);
      state.hotspot.style.background = `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.9) 0%, rgba(${rgb.r},${rgb.g},${rgb.b},0.3) 50%, transparent 100%)`;
      state.hotspot.style.boxShadow  = `0 0 ${hSize}px rgba(${rgb.r},${rgb.g},${rgb.b},0.6)`;
      state.hotspot2.style.width     = hSize2 + 'px';
      state.hotspot2.style.height    = hSize2 + 'px';
      state.hotspot2.style.opacity   = (0.12 * breathe).toFixed(3);
      state.hotspot2.style.background = `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.18) 0%, transparent 70%)`;

      state.rayEls.forEach(({ el, def }) => {
        const angle    = state.corner.fanAngle + def.off + sway;
        const halfW    = rl * Math.tan((2.0 * Math.PI) / 180) * def.wMul;
        const opacity  = def.oMul * breathe * 0.08;
        el.style.transform    = `rotate(${angle - 90}deg) translateX(${-halfW}px)`;
        el.style.borderLeft   = `${halfW}px solid transparent`;
        el.style.borderRight  = `${halfW}px solid transparent`;
        el.style.borderTop    = `${rl}px solid rgba(${rgb.r},${rgb.g},${rgb.b},${opacity.toFixed(4)})`;
        el.style.borderBottom = 'none';
      });

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
  };
}

// ============================================================
//  UNIFIED RAF LOOP — single requestAnimationFrame drives all systems
// ============================================================

function startUnifiedLoop() {
  let last = performance.now();

  function tick(now) {
    const dt = Math.min(now - last, 50); // cap dt to avoid huge jumps after tab switch
    last = now;

    // 1. Token lerp (theme transitions)
    applyTokenLerpTick(dt);

    // 2. Orb movement + color/size animation
    const orbs = window._orbStates;
    if (orbs) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      orbs.forEach(state => {
        state.elapsed += dt;
        const t = Math.min(state.elapsed / state.duration, 1);
        const e = easeInOut(t);
        state.x = state.ox + (state.tx - state.ox) * e;
        state.y = state.oy + (state.ty - state.oy) * e;

        if (t >= 1 && window._pickOrbTarget) window._pickOrbTarget(state, vw, vh);

        if (state.colorT < 1) {
          state.colorT     = Math.min(state.colorT + dt / state.colorDuration, 1);
          state.currentRgb = lerpColor(state.fromRgb, state.targetRgb, easeInOut(state.colorT));
        }
        if (state.sizeT < 1) {
          state.sizeT         = Math.min(state.sizeT + dt / state.sizeDuration, 1);
          state.currentSizePx = state.fromSizePx + (state.targetSizePx - state.fromSizePx) * easeInOut(state.sizeT);
        }
        if (state.blurT < 1) {
          state.blurT         = Math.min(state.blurT + dt / state.blurDuration, 1);
          state.currentBlurPx = state.fromBlurPx + (state.targetBlurPx - state.fromBlurPx) * easeInOut(state.blurT);
        }

        // Use transform instead of left/top — no layout, GPU composited
        const sizePx   = Math.round(state.currentSizePx);
        const halfSize = sizePx / 2;
        const tx       = state.x - halfSize;
        const ty       = state.y - halfSize;

        // Only write style when values actually changed (avoid redundant paint)
        const blurRounded = state.currentBlurPx.toFixed(1);
        if (tx !== state._lastX || ty !== state._lastY) {
          state.el.style.transform = `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`;
          state._lastX = tx; state._lastY = ty;
        }
        if (sizePx !== state._lastSz) {
          state.el.style.width  = `${sizePx}px`;
          state.el.style.height = `${sizePx}px`;
          state._lastSz = sizePx;
        }
        // Apply blur override from scroll warp if present, else normal blur
let effectiveBlur = blurRounded;
if (state._blurOverride !== undefined) {
  effectiveBlur = state._blurOverride.toFixed(1);
  state._blurOverrideTTL = (state._blurOverrideTTL || 0) - 1;
  if (state._blurOverrideTTL <= 0) delete state._blurOverride;
}
if (effectiveBlur !== state._lastBlur) {
  state.el.style.filter = `blur(${effectiveBlur}px)`;
  state._lastBlur = effectiveBlur;
}
        if (state.colorT < 1 || state._colorDirty) {
          const { r, g, b } = state.currentRgb;
          state.el.style.background = `radial-gradient(circle, rgb(${r},${g},${b}) 0%, rgba(0,0,0,0) 70%)`;
          state._colorDirty = state.colorT < 1;
        }
      });
    }

    // 3. Ambient particles
    if (window._ambientParticlesTick) window._ambientParticlesTick();

    // 4. Corner beams (desktop only)
    if (window._cornerBeamsTick) window._cornerBeamsTick(now, dt);

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
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
  return `radial-gradient(circle,
    rgba(${r},${g},${b},${(intensity * 0.50).toFixed(3)})  0%,
    rgba(${r},${g},${b},${(intensity * 0.28).toFixed(3)}) 25%,
    rgba(${r},${g},${b},${(intensity * 0.12).toFixed(3)}) 50%,
    rgba(${r},${g},${b},${(intensity * 0.04).toFixed(3)}) 70%,
    transparent 88%
  )`;
}

function initMouseGlow() {
  if (IS_MOBILE) return; // No hover on mobile
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
        const dist = dx*dx + dy*dy;
        if (dist < minDist) { minDist = dist; closest = s; }
      });
      if (!closest || !closest.currentRgb) return;
      const { r, g, b } = closest.currentRgb;
      blob.style.background = buildGlowGradient(r, g, b, getGlowIntensity());
    }, { passive: true });
  });
}

// ============================================================
//  SCROLL REVEAL
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
// ============================================================

function initHeroTitleReveal() {
  // index.html manages its own char split with CSS animations.
  // Only run on pages that don't have the inline split (no _heroTitleRevealDone flag).
  if (window._heroTitleRevealDone) return;

  const titles = document.querySelectorAll('.hero-title');
  if (!titles.length) return;

  titles.forEach((title) => {
    // Just fade in cleanly — no rotateX, no char split
    title.style.opacity   = '1';
    title.style.transform = 'none';
    title.style.filter    = 'none';
  });
}

// ============================================================
//  HERO EYEBROW — typewriter
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
    style.textContent = `@keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`;
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
      setTimeout(() => { cursor.style.animation = 'none'; cursor.style.opacity = '0'; }, 1800);
    }
  }

  setTimeout(type, 600);
}

// ============================================================
//  HERO TAGLINE
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
 
  // Pause CSS animation and start hidden
  dot.style.animationPlayState = 'paused';
  dot.style.transform          = 'scale(0)';
  dot.style.transition         = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
 
  setTimeout(() => {
    dot.style.transform = 'scale(1)';
    // Once the pop-in finishes, hand off to CSS animation
    dot.addEventListener('transitionend', () => {
      dot.style.transform          = '';
      dot.style.transition         = '';
      dot.style.animationPlayState = 'running';
    }, { once: true });
  }, 1400);
}
// ============================================================
//  PERSON CARDS — fly-in
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

  cards.forEach(card => {
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
//  STAT COUNTERS
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
      const parsed = parseInt(numberEl.textContent.trim(), 10);
      if (isNaN(parsed)) return;
      const delay = Array.from(statCards).indexOf(entry.target) * 150;
      setTimeout(() => animateCounter(numberEl, parsed, 1400, '', ''), delay);
    });
  }, { threshold: 0.4 });

  statCards.forEach(card => io.observe(card));
}

// ============================================================
//  PARALLAX — throttled, passive
// ============================================================

function initParallax() {
  if (IS_MOBILE) return; // parallax disabled on mobile (too janky)
 
  // We move the eyebrow and tagline the old way (they have no
  // competing animation). For the titles, we move their PARENT.
  const heroSection = document.querySelector('.hero-section');
  const heroEyebrow = document.querySelector('.hero-eyebrow');
  const heroTagline = document.querySelector('.hero-tagline');
 
  // Find all .hero-title elements and their shared parent container.
  // If you wrap them in .hero-parallax-wrap in the HTML, grab that.
  // Otherwise we grab their direct parent.
  const titleEls     = document.querySelectorAll('.hero-title');
  const titlesParent = titleEls.length
    ? (document.querySelector('.hero-parallax-wrap') || titleEls[0].parentElement)
    : null;
 
  if (!titlesParent && !heroEyebrow) return;
 
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      // Move the PARENT wrapper — titles inside are untouched
      if (titlesParent) {
        titlesParent.style.transform = `translateY(${sy * 0.18}px)`;
      }
      if (heroEyebrow) heroEyebrow.style.transform = `translateY(${sy * 0.12}px)`;
      if (heroTagline) heroTagline.style.transform = `translateY(${sy * 0.08}px)`;
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

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
      ticking = false;
    });
  }, { passive: true });
}

// ============================================================
//  SECTION BADGES
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
//  LINK CARDS
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
//  CARD TILTS — desktop only
// ============================================================

function addTilt(selector, maxTilt) {
  if (IS_MOBILE) return;
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      card.style.transform  = `translateY(-4px) perspective(600px) rotateX(${dy * -maxTilt}deg) rotateY(${dx * maxTilt}deg)`;
      card.style.transition = 'transform 0.05s linear';
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.25,1,0.5,1)';
    });
  });
}

function initCreatorCardTilt()  { addTilt('.Creator-Card', 4); }
function initStatCardTilt()     { addTilt('.stat-card', 6); }
function initArticleCardTilt()  { addTilt('.article-card, .book-card', 5); }

// ============================================================
//  SECTION HEADING REVEAL
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
      if (i < words.length - 1) el.appendChild(document.createTextNode('\u00a0'));
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

  document.addEventListener('click', e => { if (searchWrap && !searchWrap.contains(e.target)) closeSearch(); });
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
        link.innerHTML = `<strong>${a.rawTitle}</strong><span class="s-cat">${a.rawCat}</span>`;
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
//  SECTION TITLE LARGE
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
//  MAGNETIC HOVER — desktop only
// ============================================================

function initMagneticHover() {
  if (IS_MOBILE) return;
  document.querySelectorAll('.card-btn, .gold-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * 0.25;
      const dy   = (e.clientY - cy) * 0.25;
      btn.style.transform  = `translate(${dx}px, ${dy}px)`;
      btn.style.transition = 'transform 0.1s ease';
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform  = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.25,1,0.5,1), background 0.3s ease, color 0.3s ease, border-color 0.3s ease';
    });
  });
}

// ============================================================
//  SCROLL VELOCITY WARP — throttled
// ============================================================

function initScrollVelocityWarp() {
  if (IS_MOBILE) return;
  let lastY   = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const currentY  = window.scrollY;
      const velocity  = Math.abs(currentY - lastY);
      lastY   = currentY;
      ticking = false;

      const states = window._orbStates;
      if (!states || velocity < 2) return; // skip tiny movements
      const boost = Math.min(velocity / 20, 3.5);
      // Write to state, let the unified loop apply it next tick
      // instead of touching el.style.filter directly here
      states.forEach(s => {
        s._blurOverride = s.currentBlurPx * (1 - boost * 0.12);
        s._blurOverrideTTL = 3; // clear after 3 frames
      });
    });
  }, { passive: true });
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ambient particles first (runs on all pages)
  initAmbientParticles();

  // Background orbs
  initBackground();

  // Corner beams (desktop only — skipped on mobile)
  initCornerBeams();

  // Start the single unified animation loop
  startUnifiedLoop();

  // Scroll/reveal
  initReveal();
  initMouseGlow();
  initArticleSearch();
  initActiveNav();

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
  initCreatorCardTilt();
  initArticleCardTilt();
  initScrollVelocityWarp();
  initSectionTitles();
  initMagneticHover();

  // Theme rotation
  applyRandomTheme();
  setInterval(applyRandomTheme, ROTATION_INTERVAL_MS);
});
