import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    const { id, limit, offset } = request.query;

    let apiUrl: string;

    if (id && typeof id === "string") {
        apiUrl = `https://rest.coincap.io/v3/assets/${id}`;
    } else {
        const validatedLimit = typeof limit === "string" ? limit : "10";
        const validatedOffset = typeof offset === "string" ? offset : "0";
        apiUrl = `https://rest.coincap.io/v3/assets?limit=${validatedLimit}&offset=${validatedOffset}`;
    }

    const apiKey = process.env.COINCAP_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: "API key not configured" });
    }

    try {
        const fetchResponse = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (!fetchResponse.ok) {
            const errorData = await fetchResponse.json();
            return response.status(fetchResponse.status).json(errorData);
        }

        const data = await fetchResponse.json();

        response.setHeader(
            "Cache-Control",
            "s-maxage=60, stale-while-revalidate"
        );
        return response.status(200).json(data);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Failed to fetch data" });
    }
}
