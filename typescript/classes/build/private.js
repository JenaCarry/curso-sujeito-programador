"use strict";
class Conta {
    constructor() {
        // Pode ser acessado e modificado apenas por meio da classe em que foi criado
        this.limite = 450;
    }
    aumentarLimite(novoLimite) {
        if (novoLimite < 1000) {
            this.limite = novoLimite;
            console.log(`Agora seu novo limite é: ${this.limite}`);
        }
        else {
            console.log("Infelizmente seu limite foi reprovado!");
        }
    }
    solicitarLimite(autenticado, novoLimite) {
        if (autenticado) {
            this.aumentarLimite(novoLimite);
            console.log("Limite alterado com sucesso!");
        }
        else {
            console.log("Erro ao alterar o limite!");
        }
    }
    mostrarLimite() {
        console.log(`Novo Limite: ${this.limite}`);
    }
}
const cliente = new Conta();
cliente.solicitarLimite(true, 820);
// cliente.mostrarLimite();
