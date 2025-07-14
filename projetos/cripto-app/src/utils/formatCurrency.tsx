export function formatPrice(value: string) {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(Number(value));
}

export function formatPriceCompact(value: string) {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
    }).format(Number(value));
}
