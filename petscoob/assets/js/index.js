// Criando uma variável do tipo constante para armazenar a Classe Duvidas e suas variações

const elementoDuvida = document.querySelectorAll(".duvidas")

elementoDuvida.forEach(function(duvidas){
    duvidas.addEventListener("click", function(){
        duvidas.classList.toggle("ativa");
    });
});