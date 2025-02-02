// Espera o DOM carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e o título no HTML
    const botao = document.querySelector("button");
    const titulo = document.querySelector("h1");

    // Função que altera o texto do título quando o botão é clicado
    botao.addEventListener("click", function() {
        titulo.textContent = "Você clicou no botão!";
    });
});
