function finalizarcompra() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;

    let preco= Number(document.getElementById("preco").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let total = preco * quantidade;
    let janela = window.open("", "Recibo", "width=450,height=500");
    janela.document.write(`
        <html>
            <head>
                <title>Recibo</title>
                <link rel="stylesheet" href="_css/style2.css">
            </head>
            <body>
            <h2>Recibo de compra</h2>
            <p><strong>Nome:</strong> ${nome}</p><br>
            <p><strong>Email:</strong> ${email}</p><br>
            <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p><br>
            <p><strong>CPF:</strong> ${cpf}</p><br>
            <p><strong>Telefone:</strong> ${telefone}</p><br>
            <p><strong>Endereço:</strong> ${endereco}</p><br>
            <p><strong>Preço:</strong> R$ ${preco.toFixed(2)}</p><br>
            <p><strong>Quantidade:</strong> ${quantidade}</p><br>
            <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p><br>
            <button onclick="window.print()">Imprimir Recibo</button>
            <button onclick="window.close()">Fechar</button>
            </body>
        </html>
        `);
}
function mostrarMensagem() {
    alert("Bem-vindo à loja de telha do meu pai!");
}