import { useEffect, useState } from "react";
import logo from "../src/assets/logo.png";
import "./App.css";

interface DataProps {
    id: number;
    nome: string;
    frases: string[];
}

function App() {
    const [textoFrase, setTextoFrase] = useState<string>("");
    const [categoria, setCategoria] = useState<number>(0);
    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Erro ao carregar JSON: ", error));
    }, []);

    function gerarFrase() {
        const frases = data[categoria]?.frases;
        const fraseAleatoria = Math.floor(Math.random() * frases.length);
        setTextoFrase(`"${frases[fraseAleatoria]}"`);
    }

    return (
        <>
            <main className="container">
                <img src={logo} alt="Dev Frases" />
                <h1>Categorias</h1>
                <section className="category-area">
                    {data?.map((item, index) => (
                        <button
                            className="category-button"
                            style={{
                                borderWidth:
                                    item.nome === data[categoria]?.nome ? 2 : 0,
                                borderColor: "#1fa4db",
                            }}
                            key={item.id}
                            onClick={() => setCategoria(index)}
                        >
                            {item.nome}
                        </button>
                    ))}
                </section>
                <button className="button-frase" onClick={gerarFrase}>
                    Gerar Frase
                </button>
                {textoFrase !== "" && (
                    <div className="frase">
                        <p>{textoFrase}</p>
                    </div>
                )}
            </main>
        </>
    );
}

export default App;
