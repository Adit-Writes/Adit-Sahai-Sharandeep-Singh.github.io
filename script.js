const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

// Select all cards and observe them
document.querySelectorAll('.glass-card').forEach((el) => observer.observe(el));
