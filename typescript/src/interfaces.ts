interface LojaProps {
    nome: string;
    endereco?: string;
    status: boolean;
}

const burguerK: LojaProps = {
    nome: "Burguer K",
    endereco: "Rua logo ali",
    status: true,
};

// console.log(burguerK);

function novaLoja({ nome, endereco, status }: LojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}.`);
    console.log(`Status da loja: ${status}`);
}

novaLoja(burguerK);

interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
    greetings: (nome: string) => void;
}

const usuario: CadastroProps = {
    nome: "Lucas",
    email: "lucas@test.com",
    status: true,
    greetings: (nome: string): void => {
        console.log(`Bem vindo, ${nome}!`);
    },
};

function novoUsuario(usuario: CadastroProps): void {
    console.log(usuario.email);
}

novoUsuario(usuario);
usuario.greetings("Matheus");

interface SumProps {
    (num1: number, num2: number): number;
}

const soma: SumProps = (num1: number, num2: number): number => {
    const total = num1 + num2;
    return total;
};

console.log(soma(10, 20));
