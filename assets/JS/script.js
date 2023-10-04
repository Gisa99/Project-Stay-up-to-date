const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");


formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  
  const campoEmail = document.querySelector('[name="email"]').value;

  const listaRespostas ={
    "email": campoEmail,
   
  }
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
  localStorage.setItem("email", campoEmail);
  

  window.location = `assets/Pages/succes.html?email=${campoEmail}`;

})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
  
  })
  
  
  const tiposDeErro = [
      'valueMissing', //campo vazio 
      'typeMismatch', //dado inserido divergente
      'patternMismatch', //padrão irregular
      'tooShort', //poucos caracteres
      'customError'
  ]
  
  const mensagens = {
 
    email: {
      valueMissing: "Valid email required.",
      typeMismatch: "Valid email required.",
      tooShort: "Valid email required."
    }
  }
  
  function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');
  
     tiposDeErro.forEach( erro => {
      if (campo.validity[erro]) {
        mensagem = mensagens[campo.name][erro];
        console.log(mensagem)
      }
     })
     const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
     const validadorDeInput = campo.checkValidity();
     const campoEmail = document.querySelector('#email');
  
     if (!validadorDeInput){
      mensagemErro.textContent = mensagem;
      campoEmail.style.background = 'rgb(243, 185, 185)';
      campoEmail.style.color = 'red';
      campoEmail.style.border = '1px solid red'

     }else{
      mensagemErro.textContent = "";
      campoEmail.style.background = '';
      campoEmail.style.color = '';
      campoEmail.style.border = '';
     }
  
     
  }


  
 