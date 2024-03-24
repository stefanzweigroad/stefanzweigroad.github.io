document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-section');
    let rafScheduled = false;

    function revealSections() {
        rafScheduled = false;

        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;

            if (sectionTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.7){
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        }
    }

    function requestAnimation() {
        if (rafScheduled) return;
        rafScheduled = true;
        requestAnimationFrame(revealSections);
    }

    window.addEventListener('scroll', requestAnimation);
    revealSections();
});