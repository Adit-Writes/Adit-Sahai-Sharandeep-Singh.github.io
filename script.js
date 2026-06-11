document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Grab all elements that need to fade in
    const fadeElements = document.querySelectorAll('.fade-target');
    fadeElements.forEach((el) => {
        observer.observe(el);
    });
});
