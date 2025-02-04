interface ProdutoProps {
    readonly id: string;
    nome: string;
    descricao: string;
}

const produto: ProdutoProps = {
    id: "18",
    nome: "Camiseta",
    descricao: "Camiseta Verde",
};

console.log(produto);
