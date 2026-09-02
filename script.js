alert("Bem-vindo ao meu site!");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    resultado.textContent =
        "Formulário enviado com sucesso! Obrigado, " + nome + ".";

    console.log("Nome:", nome);
    console.log("E-mail:", email);

    formulario.reset();
});
