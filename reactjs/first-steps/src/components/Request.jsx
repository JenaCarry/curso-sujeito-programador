import { useEffect, useState } from "react";
import styles from "./request.module.css";

export function Request() {
    const [nutri, setNutri] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadApi = () => {
            const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setNutri(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Erro ao carregar os dados!");
                    setLoading(false);
                });
        };

        loadApi();
    }, []);

    return (
        <div className={styles.container}>
            <h1>React Nutri</h1>

            <div className={styles.itens}>
                {loading ? (
                    <p>Carregando</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    nutri.map((item) => (
                        <article key={item.id}>
                            <h2>{item.titulo}</h2>
                            <img src={item.capa} alt={item.titulo} />
                            <p>{item.subtitulo}</p>
                            <button>{item.categoria}</button>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}
