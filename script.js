function entrar(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
        alert("Login feito com sucesso!");
        window.location.href = "contaBancaria.html";
    }   else {
        alert("Usuário ou senha incorretos");
    }
}

let saldoAtual = 1000;

function fazerOperacao() {
    const valorInput = document.getElementById('valor');
    const tipoInput = document.getElementById('tipo');
    const listaTransacoes = document.getElementById('lista-transacoes');
    const saldoEl = document.getElementById('saldo');
}
