document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .animated-text, .slide-in-left, .slide-in-right, .name-animation');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        return (
            elementTop <= window.innerHeight / dividend &&
            elementBottom >= 0
        );
    };

    const displayScrollAnimations = () => {
        elements.forEach(el => {
            if (elementInView(el, 1.25)) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', displayScrollAnimations);
    window.addEventListener('load', displayScrollAnimations);
});
