document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitButton = document.querySelector('.submit-button');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Desativa o botão para evitar cliques duplos
            submitButton.disabled = true;
            submitButton.textContent = 'Verificando...';

            // Simulação de validação e delay (substitua por uma chamada AJAX real)
            setTimeout(() => {
                if (username === '' || password.length < 6) {
                    alert('Erro: Verifique seu usuário (RA/Email) e sua senha (mínimo 6 caracteres).');
                    
                    // Volta o estado original
                    submitButton.disabled = false;
                    submitButton.textContent = 'Entrar';
                    
                } else {
                    // Simulação de Sucesso
                    submitButton.textContent = 'Sucesso! Redirecionando...';
                    submitButton.style.backgroundColor = '#28a745'; // Cor verde
                    
                    // Redireciona após 1 segundo
                    setTimeout(() => {
                        alert(`Bem-vindo, ${username}! (Ação simulada, sem backend)`);
                        // Aqui você redirecionaria para a área logada do aluno:
                        // window.location.href = 'area_aluno.html';
                        
                        // Para este exemplo, voltamos ao estado inicial:
                        submitButton.disabled = false;
                        submitButton.textContent = 'Entrar';
                        submitButton.style.backgroundColor = '#40A2E3'; 
                    }, 1000);
                }
            }, 1500); // 1.5 segundos de "carregamento" simulado
        });
    }
});
