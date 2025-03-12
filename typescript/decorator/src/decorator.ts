/*
    Uso dos Decorators:
    Class
    Propriedades
    Métodos
    Parâmetros - pouco usado
    Getters / Setters - pouco usado
*/

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

function setIpServer(newIp: string) {
    return (target: any) => {
        // target é o construtor da classe
        return class extends target {
            ip = newIp;
        };
    };
}

@setIpServer("192.168.10.20")
class Server {
    constructor() {
        console.log("Servidor criado!");
    }
}

const server = new Server();
console.log(server);
