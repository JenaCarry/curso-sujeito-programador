interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps {
    tecnologia: TecnologiaProps[];
}

const frontend: NomesProps = {
    tecnologia: [{ id: "26", nome: "Jean" }],
};

console.log(frontend.tecnologia);
