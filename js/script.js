const formulario = document.querySelector("#formulario-contato");

const mensagem =document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    mensagem.classList.remove("d-none");

    formulario.reset();

    setTimeout(function(){
        mensagem.classList.add("d-none");
    }, 4000);
});

