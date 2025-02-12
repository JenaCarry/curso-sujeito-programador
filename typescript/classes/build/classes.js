"use strict";
// Conjunto de atributos e métodos
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa : ${mesa}`;
    }
    mudarStatus(status) {
        return status === "ABERTO"
            ? console.log("Loja ABERTA com sucesso!")
            : console.log("Loja FECHADA com sucesso!");
    }
}
const redBurger = new Loja("Red Burger", "Lanches");
// console.log(redBurger);
redBurger.criarLoja();
// console.log(redBurger.emitirPedido(2, "x-salada", "x-tudo"));
redBurger.mudarStatus("ABERTO");
