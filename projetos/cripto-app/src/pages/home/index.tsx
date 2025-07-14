import { FormEvent, useState, useEffect, useMemo } from "react";
import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { formatPrice, formatPriceCompact } from "../../utils/formatCurrency";
import { Loading } from "../../components/Loading";

export interface CoinsProps {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    rank: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    explorer: string;
    formattedPrice?: string;
    formattedMarket?: string;
    formattedVolume?: string;
}

interface DataProps {
    data: CoinsProps[];
}

export function Home() {
    const [input, setInput] = useState<string>("");
    const [coins, setCoins] = useState<CoinsProps[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [offset]);

    const filteredCoins = useMemo(() => {
        return coins.filter(
            (item) =>
                item.name.toLowerCase().startsWith(input.toLowerCase()) ||
                item.id.toLowerCase().startsWith(input.toLowerCase())
        );
    }, [coins, input]);

    async function getData() {
        fetch(
            `https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=af336c7f65325a71e38bada8ced538928aef5297c359c5c0177465b0ed5e4489`
        )
            .then((response) => response.json())
            .then((data: DataProps) => {
                const coinsData = data.data;

                const formattedResult = coinsData.map((item) => {
                    const formatted = {
                        ...item,
                        formattedPrice: formatPrice(item.priceUsd),
                        formattedMarket: formatPriceCompact(item.marketCapUsd),
                        formattedVolume: formatPriceCompact(item.volumeUsd24Hr),
                    };
                    return formatted;
                });
                const listCoins = [...coins, ...formattedResult];
                setCoins(listCoins);
            })
            .catch((error) => {
                console.error("Falha na busca: ", error);
            })
            .finally(() => setLoading(false));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (input.trim() === "" && input.length === 0) return;
        navigate(`/detail/${filteredCoins[0].id}`);
    }

    function handleGetMore() {
        setOffset((prev) => prev + 10);
    }

    return (
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Digite o nome da moeda... Ex.: bitcoin"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    <BsSearch size={30} color="#FFF" />
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor mercado</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Mudança 24h</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {filteredCoins.length > 0 &&
                        filteredCoins.map((item) => (
                            <tr className={styles.tr} key={item.id}>
                                <td
                                    className={styles.tdLabel}
                                    data-label="Moeda"
                                >
                                    <div className={styles.name}>
                                        <img
                                            className={styles.logo}
                                            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                                            alt="Logo Cripto"
                                        />
                                        <Link to={`/detail/${item.id}`}>
                                            <span>
                                                {item.name} | {item.symbol}
                                            </span>
                                        </Link>
                                    </div>
                                </td>

                                <td
                                    className={styles.tdLabel}
                                    data-label="Valor mercado"
                                >
                                    {item.formattedMarket}
                                </td>

                                <td
                                    className={styles.tdLabel}
                                    data-label="Preço"
                                >
                                    {item.formattedPrice}
                                </td>

                                <td
                                    className={styles.tdLabel}
                                    data-label="Volume"
                                >
                                    {item.formattedVolume}
                                </td>

                                <td
                                    className={
                                        Number(item.changePercent24Hr) > 0
                                            ? styles.tdProfit
                                            : styles.tdLoss
                                    }
                                    data-label="Mudança 24h"
                                >
                                    <span>
                                        {Number(item.changePercent24Hr).toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {loading && <Loading />}
            <div className={styles.buttonWrapper}>
                <button className={styles.buttonMore} onClick={handleGetMore}>
                    {loading ? "Carregando..." : "Carregar mais"}
                </button>
            </div>
        </main>
    );
}
