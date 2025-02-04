type Uuid = string | number | null;

function useDetails(uui: Uuid, name: string) {
    console.log(`ID: ${uui} - Nome: ${name}`);
}

useDetails("125", "Pedro");

type Coin = "BRL" | "EUR" | "USD";

function buyCoins(coin: Coin) {
    console.log(`Comprando moedas: ${coin}`);
}

buyCoins("BRL");
