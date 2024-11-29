const numberChecker = document.querySelector("#numberChecker");
const numberCheckerButton = document.querySelector(".numberCheckerButton");
const numberCheckerResult = document.querySelector(".numberCheckerResult");

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

function addInfo(element, msg = "") {
    element.innerHTML = msg;
}

numberChecker.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberCheckerFunction(numberChecker.value);
    }
});

numberCheckerButton.addEventListener("click", () =>
    numberCheckerFunction(numberChecker.value)
);
