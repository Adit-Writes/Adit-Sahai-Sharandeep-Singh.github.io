document.addEventListener("DOMContentLoaded", () => {
    // Elegant logging to show the fresh layout structure initialized
    console.log("Portfolio interface loaded seamlessly.");
    
    // Auto-scrolling highlight navigation behavior safely
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigating directly to section target`);
        });
    });
});
