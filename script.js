// script.js
document.addEventListener('DOMContentLoaded', () => {

    const carrosselSlide = document.querySelector('.carrossel-slide');
    if (carrosselSlide) {
        // Pausa a animação quando o mouse está sobre o carrossel
        carrosselSlide.addEventListener('mouseover', () => {
            carrosselSlide.style.animationPlayState = 'paused';
        });

        carrosselSlide.addEventListener('mouseout', () => {
            carrosselSlide.style.animationPlayState = 'running';
        });
    }
    const estudanteDivs = document.querySelectorAll('.estudante-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    estudanteDivs.forEach(div => {
        div.classList.add('fade-in-on-scroll');
        observer.observe(div);
    });

});
