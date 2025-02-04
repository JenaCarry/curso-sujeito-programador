function greetings(username: string): void {
    console.log(`Bem vindo, ${username}!`);
}

greetings("Lucas");

function sum(num1: number, num2: number): number {
    let sum = num1 + num2;
    return sum;
}

console.log(sum(5, 20));

const urlAPI = (url: string): void => {
    console.log(`URL da API: ${url}`);
};

urlAPI("https://example-api.com");
