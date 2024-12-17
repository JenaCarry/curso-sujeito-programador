const area = document.getElementById("area");

function entrar() {
    const name = prompt("Digite seu nome: ");

    if (name === "" || name === null) {
        alert("Ops algo deu errado!");
        area.innerHTML = "Clique no botão acessar...";
    } else {
        area.innerHTML = `Bem vindo, ${name}!`;

        const buttonExit = document.createElement("button");
        buttonExit.innerHTML = "Sair da conta";
        buttonExit.onclick = sair;
        document.body.appendChild(buttonExit);
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}

function mediaAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        console.log(`Aluno aprovado com a média ${media}`);
    } else if (media < 7 && media >= 5) {
        console.log(`Aluno em recuperação com a média ${media}`);
    } else {
        console.log(`Aluno reprovado com a média ${media}`);
    }
}
