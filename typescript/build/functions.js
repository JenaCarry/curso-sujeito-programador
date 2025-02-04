"use strict";
function greetings(username) {
    console.log(`Bem vindo, ${username}!`);
}
greetings("Lucas");
function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(sum(5, 20));
const urlAPI = (url) => {
    console.log(`URL da API: ${url}`);
};
urlAPI("https://example-api.com");
