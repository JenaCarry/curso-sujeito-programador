interface DadosConta {
    nome: string;
    numero: number;
    email: string;
}

abstract class Banco {
    abstract abrirConta(dados: DadosConta): boolean;
}

class Pessoa extends Banco {
    abrirConta(dados: DadosConta): boolean {
        console.log(`Nova conta criada com sucesso! Olá, ${dados.nome}!`);

        return true;
    }
}

const user = new Pessoa();

user.abrirConta({ nome: "Jean", numero: 123, email: "test@test.com" });
