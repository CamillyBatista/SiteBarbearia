const formulario = document.querySelector("#formulario-contato");

const mensagem =document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    mensagem.classList.remove("d-none");

    formulario.reset();
});

// const formulario = document.querySelector("#formulario-contato");
// const mensagem = document.querySelector("#mensagem-sucesso");

// console.log("Formulário:", formulario);
// console.log("Mensagem:", mensagem);

// formulario.addEventListener("submit", function(event) {
//     event.preventDefault();

//     console.log("O formulário foi submetido!");

//     mensagem.classList.remove("d-none");
//     mensagem.textContent = "A tua mensagem foi enviada com sucesso!";

//     formulario.reset();
// });
