import { applyMixins } from "./mixin/applyMixin.js";
class Automovel {
    ligar() {
        console.log("Carro ligado com sucesso!");
    }
    desligar() {
        console.log("Carro desligado com sucesso!");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
applyMixins(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol");
gol.descricao = "Modelo completo";
console.log(gol);
gol.ligar();
