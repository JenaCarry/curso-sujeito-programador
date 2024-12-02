const numberChecker = document.querySelector("#numberChecker");
const numberCheckerButton = document.querySelector(".numberCheckerButton");
const numberCheckerResult = document.querySelector(".numberCheckerResult");

function addInfo(element, msg = "") {
    element.innerHTML = msg;
}

const numberCheckerFunction = (number) => {
    numberCheckerResult.innerHTML = "";
    if (isNaN(number) || number === "") {
        alert("Digite um número válido!");
    } else {
        if (number > 0) {
            addInfo(numberCheckerResult, `O número "${number}" é Positivo!`);
        } else if (number < 0) {
            addInfo(numberCheckerResult, `O número "${number}" é Negativo!`);
        } else {
            addInfo(numberCheckerResult, `O número informado é Zero!`);
        }
    }
    numberChecker.value = "";
};

numberChecker.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberCheckerFunction(numberChecker.value);
    }
});

numberCheckerButton.addEventListener("click", () =>
    numberCheckerFunction(numberChecker.value)
);

const addNumArray = document.querySelector("#addNumArray");
const addNumberButton = document.querySelector(".addNumberButton");
const numArrayInput = document.querySelector("#numArray");
const listDisplay = document.querySelector("#listDisplay");

const numArray = [];

const addNumArrayFunction = (array, number) => {
    if (isNaN(number) || number === "") {
        alert("Digite um número válido!");
    } else if (array.includes(number)) {
        alert(
            `O número "${number}" já está em sua lista, por favor digite outro número!`
        );
    } else {
        numArray.push(number);
        addInfo(listDisplay, `Sua lista de números: ${numArray.join(", ")}...`);
    }
    addNumArray.value = "";
};

addNumArray.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addNumArrayFunction(numArray, addNumArray.value);
    }
});

addNumberButton.addEventListener("click", () =>
    addNumArrayFunction(numArray, addNumArray.value)
);

const productDisplay = document.querySelector(".productDisplay");
const productSearch = document.querySelector("#productSearch");

const products = [
    { name: "Maça", price: 2.5 },
    { name: "Coca Cola", price: 8 },
    { name: "Guaraná", price: 5 },
    { name: "Chocolate", price: 20 },
    { name: "Salgado", price: 5.5 },
    { name: "Suco", price: 6 },
    { name: "Bolo", price: 22 },
];

const allProductDisplay = (products) => {
    productDisplay.innerHTML = `
        <tr>
            <th>Produto</th>
            <th>Price</th>
        </tr>
    `;

    if (products.length === 0)
        return (productDisplay.innerHTML = "Nenhum produto encontrado!");

    products.map((product) => {
        const trElement = document.createElement("tr");
        const productElement = document.createElement("td");
        const priceElement = document.createElement("td");

        productElement.innerHTML = `${product.name}`;
        priceElement.innerHTML = `R$ ${product.price}`;

        trElement.appendChild(productElement);
        trElement.appendChild(priceElement);
        productDisplay.appendChild(trElement);
    });
};

allProductDisplay(products);

const searchNameProduct = (products) => {
    const search = productSearch.value;
    if (search === "") return allProductDisplay(products);

    if (!isNaN(search)) {
        const filterProducts = products.filter((product) => {
            return String(product.price).startsWith(search);
        });
        allProductDisplay(filterProducts);
    } else {
        const filterProducts = products.filter((product) => {
            return product.name.toUpperCase().startsWith(search.toUpperCase());
        });
        allProductDisplay(filterProducts);
    }
};

productSearch.addEventListener("keyup", () => searchNameProduct(products));

const equalTwenty = products.find((product) => product.price === 20);
console.log(equalTwenty);

console.log(products.filter((product) => product.price < 8));
