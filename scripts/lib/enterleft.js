document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.m-enter_left');

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of element is visible
    });

    elements.forEach(el => observer.observe(el));
});
