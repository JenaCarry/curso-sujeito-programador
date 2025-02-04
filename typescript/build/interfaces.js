"use strict";
const burguerK = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
};
// console.log(burguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}.`);
    console.log(`Status da loja: ${status}`);
}
novaLoja(burguerK);
const usuario = {
    nome: "Lucas",
    email: "lucas@test.com",
    status: true,
    greetings: (nome) => {
        console.log(`Bem vindo, ${nome}!`);
    },
};
function novoUsuario(usuario) {
    console.log(usuario.email);
}
novoUsuario(usuario);
usuario.greetings("Matheus");
const soma = (num1, num2) => {
    const total = num1 + num2;
    return total;
};
console.log(soma(10, 20));
