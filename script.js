document.addEventListener('DOMContentLoaded', () => {

    // 1. CARROSSEL INTERATIVO (Pausing)
    const carrosselSlide = document.querySelector('.carrossel-slide');
    if (carrosselSlide) {
        // Pausa a animação quando o mouse está sobre o carrossel
        const carrosselContainer = document.querySelector('.carrossel-container');

        carrosselContainer.addEventListener('mouseenter', () => {
             // Pausa a animação via JavaScript
             carrosselSlide.style.animationPlayState = 'paused'; 
        });

        carrosselContainer.addEventListener('mouseleave', () => {
             // Retoma a animação
             carrosselSlide.style.animationPlayState = 'running'; 
        });
    }

    // 2. SCROLL REVEAL (Animação de entrada ao rolar)
    const estudanteDivs = document.querySelectorAll('.estudante-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' (definida no CSS)
                entry.target.classList.add('is-visible'); 
                // Para de observar depois que aparece
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // 10% do elemento precisa estar visível
    });

    estudanteDivs.forEach((div, index) => {
        // Adiciona um pequeno delay baseado na posição (para efeito cascata)
        div.style.transitionDelay = `${index * 0.1}s`; 
        
        // Adiciona a classe inicial de opacidade (você já tinha no CSS)
        div.classList.add('fade-in-on-scroll'); 
        
        observer.observe(div);
    });

    // 3. ADICIONAR FUNCIONALIDADE DE LOGIN NO HEADER
    // ------------------------------------------------------------------
    // Vamos adicionar um botão "Login" no cabeçalho via HTML (veja abaixo)
    // Este código JS garante que ao clicar, o usuário seja direcionado
    // ------------------------------------------------------------------
    const loginButton = document.getElementById('login-btn');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            // Redireciona para a nova página de login
            window.location.href = 'login.html'; 
        });
    }

});