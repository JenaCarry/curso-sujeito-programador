import { applyMixins } from "./mixin/applyMixin.js";

class Automovel {
    ligar(): void {
        console.log("Carro ligado com sucesso!");
    }
    desligar(): void {
        console.log("Carro desligado com sucesso!");
    }
}

class Especificacao {
    descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }
}

class Carro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao {}

applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol");

gol.descricao = "Modelo completo";
console.log(gol);
gol.ligar();
