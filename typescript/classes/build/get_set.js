"use strict";
// Exemplo em um Jogo
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    // GET - Obter o valor ao invés de acessa-lo diretamente
    get getServidorIP() {
        console.log("Método GET");
        return this.servidor;
    }
    // SET - Passar ou alterar um atributo
    set setServidorIP(newServidor) {
        if (this.servidor === newServidor) {
            throw new Error("O novo IP deve ser diferente do antigo!");
        }
        this.servidor = newServidor;
    }
}
const gta5 = new Jogo("192.168.55.10");
// console.log(gta5);
try {
    gta5.setServidorIP = "192.200.255.10";
}
catch (error) {
    const err = error;
    console.log(`Error: ${err.message}`);
}
console.log(`IP do servidor: ${gta5.getServidorIP}`);
