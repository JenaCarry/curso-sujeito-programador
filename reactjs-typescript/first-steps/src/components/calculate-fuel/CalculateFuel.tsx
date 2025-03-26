import "./CalculateFuel.css";
import logo from "../../assets/gasolina-alcool.png";
import { FormEvent, useEffect, useState } from "react";

interface InfoProps {
    title: string;
    alcool: number | string;
    gasolina: number | string;
}

export function CalculateFuel() {
    const [alcool, setAlcool] = useState("");
    const [gasolina, setGasolina] = useState("");
    const [info, setInfo] = useState<InfoProps>();

    useEffect(() => {
        document.title = "Calculadora Álcool X Gasolina";
    }, []);

    function calcular(e: FormEvent) {
        e.preventDefault();
        const calculo: number = Number(alcool) / Number(gasolina);

        if (calculo <= 0.7) {
            setInfo({
                title: "Compensa usar Álcool",
                alcool: formatarMoeda(Number(alcool)),
                gasolina: formatarMoeda(Number(gasolina)),
            });
        } else {
            setInfo({
                title: "Compensa usar Gasolina",
                alcool: formatarMoeda(Number(alcool)),
                gasolina: formatarMoeda(Number(gasolina)),
            });
        }
        setAlcool("");
        setGasolina("");
    }

    function formatarMoeda(valor: number): string {
        const valorFormatado: string = valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    }

    return (
        <main className="container">
            <img src={logo} alt="Bomba de abastecimento" />
            <h1 className="title">Qual a melhor opção?</h1>

            <form onSubmit={calcular}>
                <div>
                    <label htmlFor="alcool">Álcool (preço por litro):</label>
                    <input
                        type="number"
                        name="alcool"
                        id="alcool"
                        placeholder="3,90"
                        min="1"
                        step="0.01"
                        required
                        className="input"
                        value={alcool}
                        onChange={(e) => setAlcool(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="gasolina">
                        Gasolina (preço por litro):
                    </label>
                    <input
                        type="number"
                        name="gasolina"
                        id="gasolina"
                        placeholder="5,60"
                        min="1"
                        step="0.01"
                        required
                        className="input"
                        value={gasolina}
                        onChange={(e) => setGasolina(e.target.value)}
                    />
                </div>
                <input className="button" type="submit" value="Calcular" />
            </form>
            {info && (
                <div className="result">
                    <h2>{info?.title}</h2>
                    <p>Álcool: {info?.alcool}</p>
                    <p>Gasolina: {info?.gasolina}</p>
                </div>
            )}
        </main>
    );
}
