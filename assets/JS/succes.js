// Recupere o valor do parâmetro de consulta da URL
const params = new URLSearchParams(window.location.search);
const email = params.get("email");

console.log(email)

document.addEventListener("DOMContentLoaded", funcaoPaginaCarregada);

function funcaoPaginaCarregada() {
   
    const criaCard = document.createElement("div"); // Correção: remova o ponto do ".card"
    criaCard.className = "card";
    criaCard.innerHTML = `
    <img class="succes__img" src="../images/icon-success.svg" alt="success icon">
    <h1 class="succes__title">Thanks for subscribing!</h1>
    <div class="succes__text">
        <p>A confirmation email has been sent to <strong>${email}</strong>. </p>
        <p>Please, open it and click the button to confirm your subscription </p>
    </div>

    <a class="succes__link" href="../../index.html">
     <button class="succes__button">
        Dismiss Message
     </button>
   </a>`;
    
    // Adicione o elemento criado ao corpo do documento
    document.body.appendChild(criaCard);
}

const buttonSucced = document.querySelector("succes__button")






