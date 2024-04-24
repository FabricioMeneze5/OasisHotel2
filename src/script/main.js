document.addEventListener('DOMContentLoaded', function() {
    const linkHead = document.head.querySelectorAll('a');

    linkHead.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destiny = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: destiny.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});