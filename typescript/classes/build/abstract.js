"use strict";
class Banco {
}
class Pessoa extends Banco {
    abrirConta(dados) {
        console.log(`Nova conta criada com sucesso! Olá, ${dados.nome}!`);
        return true;
    }
}
const user = new Pessoa();
user.abrirConta({ nome: "Jean", numero: 123, email: "test@test.com" });
