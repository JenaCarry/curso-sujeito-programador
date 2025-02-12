// Conjunto de atributos e métodos

type Status = "ABERTO" | "FECHADO";

class Loja {
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void {
        console.log(`Loja: ${this.nome}, Categoria: ${this.categoria}`);
    }
    emitirPedido(mesa: number, ...pedidos: string[]): string {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa : ${mesa}`;
    }
    mudarStatus(status: Status): void {
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
