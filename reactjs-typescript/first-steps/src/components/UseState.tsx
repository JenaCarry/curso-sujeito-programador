import { useState } from "react";

interface AlunoProps {
    nome: string;
    idade: string;
}

export function UseState() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [infoAluno, setInfoAluno] = useState<AlunoProps>();
    const [count, setCount] = useState(0);

    function mostrarAluno() {
        setInfoAluno({
            nome: nome,
            idade: idade,
        });
        setNome("");
        setIdade("");
    }

    function diminuir() {
        if (count <= 0) return;

        setCount((currentCount) => currentCount - 1);
    }

    function aumentar() {
        setCount((currentCount) => currentCount + 1);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="idade"
                    id="idade"
                    placeholder="Digite sua idade..."
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
            </div>
            <button onClick={mostrarAluno}>Mostrar aluno</button>
            {infoAluno && (
                <div>
                    <p>Bem vindo, {infoAluno.nome}</p>
                    <p>Idade: {infoAluno.idade}</p>
                </div>
            )}
            <hr />
            <h2>Contador</h2>
            <div>
                <button onClick={diminuir}>-</button>
                {count}
                <button onClick={aumentar}>+</button>
            </div>
        </div>
    );
}
