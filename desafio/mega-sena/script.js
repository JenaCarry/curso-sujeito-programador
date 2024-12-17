const number = document.querySelector("#number");
const generateButton = document.querySelector(".generate");
const resultList = document.querySelector(".resultList");

const checkNumber = (num) => {
    if (isNaN(num) || number.value === "" || num < 6 || num > 9) {
        alert("Digite um número válido de 6 a 9...");
    } else {
        generateList(num);
        number.value = "";
    }
};

const addListDisplay = (list) => {
    resultList.innerHTML = `A lista de ${
        number.value
    } números sorteada é: "${list.join(", ")}".`;
};

const generateList = (num) => {
    const randomList = [];
    while (randomList.length < num) {
        const actualNumber = Math.floor(Math.random() * 60) + 1;
        if (!randomList.includes(actualNumber)) {
            randomList.push(actualNumber);
        }
    }
    addListDisplay(randomList);
};

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkNumber(number.value);
    }
});

generateButton.addEventListener("click", () => {
    console.log("click");
    checkNumber(number.value);
});
