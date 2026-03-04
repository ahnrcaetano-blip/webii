function mostrarMensagem() {
    alert("Olá, mundo! Este é um alerta em JavaScript.");
}

function mostrarMensagem2() {
    alert("Você clicou no segundo botão! JavaScript é divertido!");
}
function mostrarMensagem3() {
    confirm("Escolha qual site entrar");
}  


function irParaSite(){
    var opcaos = document.getElementsByName("busca");
    for (var i = 0; i < opcaos.length; i++) {
        if (opcaos[i].checked) {
            var valorSelecionado = opcaos[i].value;
            if (valorSelecionado === "Google") {
                window.open("https://www.google.com", "_blank");
            } else if (valorSelecionado === "Bing") {
                window.open("https://www.bing.com", "_blank");
            }
                else if (valorSelecionado === "Pinterest") {
                window.open("https://www.br.pinterest.com", "_blank");
            }
               else if (valorSelecionado === "Youtube") {
                window.open("https://www.youtube.com/", "_blank");
            }

            break;
        }
    }
}

const botao = document.getElementById("toggle");
botao.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});

