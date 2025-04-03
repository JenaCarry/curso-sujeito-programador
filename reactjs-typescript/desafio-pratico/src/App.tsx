import { FormEvent, useRef, useState } from "react";
import "./App.css";

interface InfoProps {
    name: string;
    idade: number;
}

function App() {
    const [name, setName] = useState<string>("");
    const [nascimento, setNascimento] = useState<string | number>("");
    const [info, setInfo] = useState<InfoProps>();
    const inputRef = {
        inputName: useRef<HTMLInputElement>(null),
        inputNascimento: useRef<HTMLInputElement>(null),
    };

    function handleCalculate(e: FormEvent) {
        e.preventDefault();
        const currentYear: number = new Date().getFullYear();
        if (name === "" || nascimento === "") {
            alert("Informe os dados necessários...");
        } else if (
            Number(nascimento) < 1900 ||
            Number(nascimento) > currentYear
        ) {
            alert("Informe um ano válido!");
        } else {
            const idadeAtual: number = currentYear - Number(nascimento);
            setInfo({ name: name, idade: idadeAtual });
            setName("");
            setNascimento("");
            Object.values(inputRef).forEach((ref) => ref.current?.blur());
        }
    }

    return (
        <main>
            <h1>Descubra sua idade</h1>
            <form onSubmit={handleCalculate}>
                <div>
                    <label htmlFor="name">Digite seu nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite seu nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={inputRef.inputName}
                    />
                </div>
                <div>
                    <label htmlFor="nascimento">
                        Digite o ano de nascimento
                    </label>
                    <input
                        type="number"
                        name="nascimento"
                        id="nascimento"
                        placeholder="Digite o ano de nascimento..."
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                        ref={inputRef.inputNascimento}
                    />
                </div>
                <button type="submit">Descobrir idade</button>
            </form>

            {info?.idade !== undefined && (
                <div>
                    <h2 className="result">
                        {info?.name} você tem: {info?.idade} anos
                    </h2>
                </div>
            )}
        </main>
    );
}

export default App;
