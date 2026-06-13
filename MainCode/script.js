document.addEventListener("DOMContentLoaded", () => {
    initBackground();
    applyRandomTheme();

    setInterval(applyRandomTheme, ROTATION_INTERVAL_MS);

    initMouseGlow();
    initScrollReveal();
    initCategoryFilter();
});

/* ==========================================
   THEME ROTATOR
========================================== */

const ROTATION_INTERVAL_MS = 5000;

const THEMES = [
{
    name: "Cyberpunk",
    tokens: {
        "--bg-base": "#040106",
        "--accent-gold": "#ff007f",
        "--orb-secondary-color": "#1aff6b",
        "--orb-blur-factor": "0.85",
        "--orb-speed-multiplier": "1.6",
        "--orb-scale-multiplier": "0.9"
    }
},
{
    name: "Abyssal",
    tokens: {
        "--bg-base": "#02070d",
        "--accent-gold": "#00d2ff",
        "--orb-secondary-color": "#ff6a00",
        "--orb-blur-factor": "1.3",
        "--orb-speed-multiplier": "0.6",
        "--orb-scale-multiplier": "1.4"
    }
},
{
    name: "Outrun",
    tokens: {
        "--bg-base": "#06020c",
        "--accent-gold": "#ff007f",
        "--orb-secondary-color": "#00f0ff",
        "--orb-blur-factor": "0.8",
        "--orb-speed-multiplier": "1.5",
        "--orb-scale-multiplier": "0.9"
    }
},
{
    name: "Solar",
    tokens: {
        "--bg-base": "#030706",
        "--accent-gold": "#93fad8",
        "--orb-secondary-color": "#d35400",
        "--orb-blur-factor": "1.5",
        "--orb-speed-multiplier": "0.55",
        "--orb-scale-multiplier": "1.5"
    }
},
{
    name: "Plasma",
    tokens: {
        "--bg-base": "#050103",
        "--accent-gold": "#ff2e4c",
        "--orb-secondary-color": "#3f1094",
        "--orb-blur-factor": "1",
        "--orb-speed-multiplier": "1.2",
        "--orb-scale-multiplier": "1.1"
    }
}
];

let currentTheme = null;

function applyRandomTheme() {
    const available = THEMES.filter(
        t => t.name !== currentTheme
    );

    const theme =
        available[Math.floor(Math.random() * available.length)];

    currentTheme = theme.name;

    const root = document.documentElement;

    Object.entries(theme.tokens).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });

    updateOrbStyles();

    console.log(`Theme: ${theme.name}`);
}

/* ==========================================
   BACKGROUND ORBS
========================================== */

function initBackground() {
    const canvas = document.getElementById("bg-canvas");

    if (!canvas) return;

    const orbConfigs = [
        { size: 75, secondary: false },
        { size: 65, secondary: true },
        { size: 55, secondary: false },
        { size: 50, secondary: true },
        { size: 48, secondary: false },
        { size: 60, secondary: true }
    ];

    const orbs = [];

    orbConfigs.forEach(cfg => {
        const orb = document.createElement("div");

        orb.className = "bg-orb";

        canvas.appendChild(orb);

        orbs.push({
            el: orb,
            sizePercent: cfg.size,
            secondary: cfg.secondary,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            tx: Math.random() * window.innerWidth,
            ty: Math.random() * window.innerHeight,
            progress: 0
        });
    });

    window._orbStates = orbs;

    updateOrbStyles();

    let last = performance.now();

    function animate(now) {
        const dt = now - last;
        last = now;

        orbs.forEach(orb => {
            orb.progress += dt / 30000;

            if (orb.progress >= 1) {
                orb.progress = 0;

                orb.x = orb.tx;
                orb.y = orb.ty;

                orb.tx = Math.random() * window.innerWidth;
                orb.ty = Math.random() * window.innerHeight;
            }

            const t = orb.progress;

            const cx = orb.x + (orb.tx - orb.x) * t;
            const cy = orb.y + (orb.ty - orb.y) * t;

            orb.el.style.left = `${cx}px`;
            orb.el.style.top = `${cy}px`;
        });

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function updateOrbStyles() {
    const orbs = window._orbStates;

    if (!orbs) return;

    const styles = getComputedStyle(document.documentElement);

    const accent =
        styles.getPropertyValue("--accent-gold").trim();

    const secondary =
        styles.getPropertyValue("--orb-secondary-color").trim();

    const blurFactor =
        parseFloat(
            styles.getPropertyValue("--orb-blur-factor")
        ) || 1;

    const scaleFactor =
        parseFloat(
            styles.getPropertyValue("--orb-scale-multiplier")
        ) || 1;

    orbs.forEach(orb => {
        const size =
            window.innerWidth *
            (orb.sizePercent / 100) *
            scaleFactor;

        const color =
            orb.secondary ? secondary : accent;

        orb.el.style.width = `${size}px`;
        orb.el.style.height = `${size}px`;

        orb.el.style.background =
            `radial-gradient(circle, ${color} 0%, transparent 70%)`;

        orb.el.style.filter =
            `blur(${90 * blurFactor}px)`;

        orb.color = color;
    });
}

/* ==========================================
   CARD GLOW
========================================== */

function initMouseGlow() {
    document.querySelectorAll(".glass-card").forEach(card => {
        const blob = card.querySelector(".glow-blob");

        if (!blob) return;

        card.addEventListener("mouseenter", () => {
            blob.style.opacity = "1";
        });

        card.addEventListener("mouseleave", () => {
            blob.style.opacity = "0";
        });

        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();

            blob.style.left =
                `${e.clientX - rect.left}px`;

            blob.style.top =
                `${e.clientY - rect.top}px`;
        });
    });
}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    reveals.forEach(el => observer.observe(el));
}

/* ==========================================
   ARTICLE FILTER
========================================== */

function initCategoryFilter() {
    const buttons =
        document.querySelectorAll(".category-btn");

    const articles =
        document.querySelectorAll(".article-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            articles.forEach(article => {
                const category =
                    article.dataset.category;

                const show =
                    filter === "all" ||
                    category === filter;

                article.style.display =
                    show ? "block" : "none";
            });
        });
    });
}
