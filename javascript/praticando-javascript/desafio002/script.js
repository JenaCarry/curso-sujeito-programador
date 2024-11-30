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
    } else if (array.find((num) => num === number)) {
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
