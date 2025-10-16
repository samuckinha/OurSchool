// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Carrossel (Se você quiser controle via JS em vez de só CSS)
    
    // Se você está usando o carrossel puramente com CSS (@keyframes) 
    // como no exemplo anterior, o JS não é estritamente necessário para o movimento automático.
    // Mas vamos adicionar aqui um recurso simples de pausar a animação
    // ao passar o mouse.
    
    const carrosselSlide = document.querySelector('.carrossel-slide');
    if (carrosselSlide) {
        // Pausa a animação quando o mouse está sobre o carrossel
        carrosselSlide.addEventListener('mouseover', () => {
            carrosselSlide.style.animationPlayState = 'paused';
        });

        // Retoma a animação quando o mouse sai do carrossel
        carrosselSlide.addEventListener('mouseout', () => {
            carrosselSlide.style.animationPlayState = 'running';
        });
    }

    // 2. Animação Avançada para Alunos (Opcional, pois você já tem CSS :hover)
    
    // O seu efeito de zoom já está bem feito com CSS :hover. 
    // O JavaScript seria necessário apenas se você quisesse efeitos mais complexos,
    // como adicionar uma classe CSS ao rolar a página para 'revelar' os alunos.
    
    // Exemplo de "revelar" elementos ao entrar na tela (efeito muito comum):
    const estudanteDivs = document.querySelectorAll('.estudante-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona uma classe para iniciar uma animação CSS (ex: fade-in)
                entry.target.classList.add('is-visible');
                // Para de observar depois de exibir a primeira vez
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // Opções: inicia a exibição quando o elemento estiver 10% visível
        threshold: 0.1 
    });

    estudanteDivs.forEach(div => {
        // Adicionando uma classe inicial para esconder o elemento (via CSS)
        div.classList.add('fade-in-on-scroll');
        observer.observe(div);
    });

});
