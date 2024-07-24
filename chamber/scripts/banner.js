document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    const today = new Date();
    const dayOfWeek = today.getDay();

   
    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
