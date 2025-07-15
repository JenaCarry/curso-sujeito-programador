import type { VercelRequest, VercelResponse } from "@vercel/node";

interface CoinProps {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string | null;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
}

interface CoinCapData {
    data: CoinProps[];
    timestamp: number;
}

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (!request.url) {
        return response.status(400).json({ error: "Request URL is missing" });
    }

    const { searchParams } = new URL(
        request.url,
        `http://${request.headers.host}`
    );
    const limit = searchParams.get("limit") || "10";
    const offset = searchParams.get("offset") || "0";

    const apiKey = process.env.VITE_COINCAP_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: "API key not configured" });
    }

    try {
        const fetchResponse = await fetch(
            `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        if (!fetchResponse.ok) {
            const errorData: unknown = await fetchResponse.json();
            return response.status(fetchResponse.status).json(errorData);
        }

        const data = (await fetchResponse.json()) as CoinCapData;

        response.setHeader(
            "Cache-Control",
            "s-maxage=60, stale-while-revalidate"
        );
        return response.status(200).json(data);
    } catch (error) {
        console.error(error);
        return response
            .status(500)
            .json({ error: "Failed to fetch data from CoinCap API" });
    }
}
