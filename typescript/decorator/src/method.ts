function validarIdade(idade: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // Salva o método original
        const metodoOriginal = descriptor.value;

        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando uma pessoa menor de idade!");
            } else {
                console.log("Estamos cadastrando uma pessoa maior de idade!");
                return metodoOriginal.apply(this);
            }
        };
    };
}

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    @validarIdade(20)
    cadastrarPessoa() {
        console.log(`Bem vindo ao sistema, ${this.nome}`);
    }
}

const pessoa = new Pessoa("Jean");

pessoa.cadastrarPessoa();
