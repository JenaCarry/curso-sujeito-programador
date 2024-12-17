const productList = document.querySelector(".product-list");
const numbersList = document.querySelector(".numbers-list");
const dateList = document.querySelector(".date-list");

// Crie uma lista de produtos
const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

// Listando todos os produtos
const listandoProdutos = `Listando todos os produtos: ${produtos.join(", ")}.`;

// Mostrando a quantidade de produtos na lista
const quantidadeProdutos = `Quantidade de produtos: ${produtos.length}.`;

// Removendo o produto "Mouse" da lista
const filtrandoProdutos = `Tirando o produto "Mouse" da lista:  ${produtos
    .filter((product) => product !== "Mouse")
    .join(", ")}.`;

// Procurando por um produto na lista
const encontrandoProduto = produtos.find((product) => product === "Computador");
const produtoEncontrado = encontrandoProduto
    ? `O produto "${encontrandoProduto}" foi encontrado em sua lista!`
    : `Não foi possível localizar o produto em sua lista!`;

// Removendo o segundo produto da lista
produtos.splice(1, 1);
const removendoProduto = `Meus produtos: ${produtos.join(", ")}.`;

function addInfo(element, msg = "") {
    const liElement = document.createElement("li");
    liElement.innerHTML = msg;
    element.appendChild(liElement);
}

addInfo(productList, listandoProdutos);
addInfo(productList, quantidadeProdutos);
addInfo(productList, filtrandoProdutos);
addInfo(productList, produtoEncontrado);
addInfo(productList, removendoProduto);

// Crie uma lista de apenas números
const num = [1, 3, 5, 7, 0, 9];

// Ordenando a lista do menor para o maior
const sortNum = `Ordenando do menor para o maior: ${num.sort().join(", ")}.`;

// Removendo o primeiro número da lista
const removendoNum = `O número "${num.shift()}" da lista.`;

// Ordenando a lista do maior para o menor
const reverseNum = `Ordenando do maior para o menor: ${num
    .reverse()
    .join(", ")}.`;

addInfo(numbersList, sortNum);
addInfo(numbersList, removendoNum);
addInfo(numbersList, reverseNum);

// Crie uma string que contenha o dia, mês e ano
const date = new Date();

const day = `Dia: ${date.getDate()}.`;
const month = `Mês: ${date.getMonth()}.`;
const year = `Ano: ${date.getFullYear()}.`;

addInfo(dateList, day);
addInfo(dateList, month);
addInfo(dateList, year);
