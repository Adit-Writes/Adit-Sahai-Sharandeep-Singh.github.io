document.addEventListener("DOMContentLoaded", () => {
  // We use 0.1 (10%) threshold so the animation triggers 
  // slightly before the card is fully in view for a smoother feel.
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // When the element enters the viewport
      if (entry.isIntersecting) {
        // This adds the class that triggers the CSS transition
        entry.target.classList.add('fade-in');
        
        // Stop observing this element once it's visible 
        // to keep your site fast and performance-optimized.
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // This selects all your cards. 
  // Because you added 'glass-card' to your HTML, this matches perfectly.
  document.querySelectorAll('.glass-card').forEach((el) => {
    observer.observe(el);
  });
});
