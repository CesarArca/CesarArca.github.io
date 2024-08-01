const nome = document.getElementById("nome");
const email = document.querySelector("#email");
const button = document.querySelector("#btn");
const cor = document.querySelector("#cor");
const titulo = document.querySelector("#titulo");

cor.addEventListener("change", function(){
    alert("Cor: " + cor.value);
    document.body.style.backgroundColor = cor.value;
});


button.addEventListener("click", function(e) {

    e.preventDefault();
    if (nome.value === ""){
        alert("Por favor, digite seu nome.");
        nome.focus();
    }  else {

    alert("Bem-vindo, " + nome.value + ".");
    }
}); 


window.onload = function() {

    let corFavorita = prompt("Digite uma cor:");
    let eixoX = prompt("Digite um valor de posição Eixo X: ");
    let eixoY = prompt("Digite um valor de posição Eixo Y: ");

    let alvo = document.querySelector("#alvo");

    //mudar cor da bolinha
    alvo.style.backgroundColor = corFavorita;

   //move a bolinha para a direita
   alvo.style.left = eixoX +"vw";

   //move a bolinha para baixo
   alvo.style.top = eixoY + "vw";

};