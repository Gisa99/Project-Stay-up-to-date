// Recupere o valor do parâmetro de consulta da URL
const params = new URLSearchParams(window.location.search);
const email = params.get("email");

console.log(email)

document.addEventListener("DOMContentLoaded", funcaoPaginaCarregada);

function funcaoPaginaCarregada() {
   
    const criaCard = document.createElement("div"); // Correção: remova o ponto do ".card"
    criaCard.className = "card";
    criaCard.innerHTML = `
    <img src="../images/icon-success.svg" alt="success icon">
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation email has been sent to <strong>${email}</strong>. </p>
    <p>Please, open it and click the button to confirm your subscription </p>

    <button class="button-sent">
        Dismiss message
    </button>`;
    
    // Adicione o elemento criado ao corpo do documento
    document.body.appendChild(criaCard);
}




