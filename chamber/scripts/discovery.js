document.addEventListener('DOMContentLoaded', () => {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit, 10));
        const daysBetween = Math.floor((currentVisit - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentVisit);

    const lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
    });

    lazyImages.forEach(img => observer.observe(img));
});