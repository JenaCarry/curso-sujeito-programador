"use strict";
/*
    Uso dos Decorators:
    Class
    Propriedades
    Métodos
    Parâmetros - pouco usado
    Getters / Setters - pouco usado
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target - recebe o construtor da classe
// function logInfo(target: any) {
//     console.log(target);
// }
// Padrão Factory (Fabrica) - Função que vai retornar a criação do decorator
// function logInfo(mensagem: string) {
//     return (target: any) => {
//         console.log(`Mensagem: ${mensagem}`);
//         console.log(`Target: ${target}`);
//     };
// }
// @logInfo("Sistema está online!")
// class Sistema {}
function setIpServer(newIp) {
    return (target) => {
        // target é o construtor da classe
        return class extends target {
            ip = newIp;
        };
    };
}
let Server = class Server {
    constructor() {
        console.log("Servidor criado!");
    }
};
Server = __decorate([
    setIpServer("192.168.10.20")
], Server);
const server = new Server();
console.log(server);
