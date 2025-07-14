import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CoinsProps } from "../home";
import { formatPrice, formatPriceCompact } from "../../utils/formatCurrency";
import { Loading } from "../../components/Loading";
import styles from "./detail.module.css";

interface ResponseData {
    data: CoinsProps;
}

interface ErrorData {
    error: string;
}

type DataProps = ResponseData | ErrorData;

export function Detail() {
    const [coinDetail, setCoinDetail] = useState<CoinsProps>();
    const [loading, setLoading] = useState<boolean>(true);
    const { cripto } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getCoin() {
            try {
                fetch(
                    `https://rest.coincap.io/v3/assets/${cripto}?apiKey=af336c7f65325a71e38bada8ced538928aef5297c359c5c0177465b0ed5e4489`
                )
                    .then((response) => response.json())
                    .then((data: DataProps) => {
                        if ("error" in data) {
                            navigate("/");
                            return;
                        }
                        const resultData = {
                            ...data.data,
                            formattedPrice: formatPrice(data.data.priceUsd),
                            formattedMarket: formatPriceCompact(
                                data.data.marketCapUsd
                            ),
                            formattedVolume: formatPriceCompact(
                                data.data.volumeUsd24Hr
                            ),
                        };
                        setCoinDetail(resultData);
                        setLoading(false);
                    });
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        getCoin();
    }, [cripto]);

    if (loading || !coinDetail) <Loading />;

    return (
        <div className={styles.container}>
            <h1 className={styles.center}>{coinDetail?.name}</h1>
            <h2 className={styles.center}>{coinDetail?.symbol}</h2>

            <section className={styles.content}>
                <img
                    src={`https://assets.coincap.io/assets/icons/${coinDetail?.symbol.toLowerCase()}@2x.png`}
                    alt="Logo da Cripto"
                    className={styles.logo}
                />
                <h2 className={styles.name}>
                    {coinDetail?.name} | {coinDetail?.symbol}
                </h2>
                <h3>
                    <strong>Preço: </strong>
                    {coinDetail?.formattedPrice}
                </h3>
                <h3>
                    <strong>Mercado: </strong>
                    {coinDetail?.formattedMarket}
                </h3>
                <h3>
                    <strong>Volume: </strong>
                    {coinDetail?.formattedVolume}
                </h3>
                <h3>
                    <strong>Mudança 24h: </strong>
                    <span
                        className={
                            Number(coinDetail?.changePercent24Hr) > 0
                                ? styles.profit
                                : styles.loss
                        }
                    >
                        {Number(coinDetail?.changePercent24Hr).toFixed(2)}%
                    </span>
                </h3>
            </section>
        </div>
    );
}
