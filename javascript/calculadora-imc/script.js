const form = document.querySelector("form");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);
    const imc = (pesoValue / (alturaValue * alturaValue)).toFixed(2);

    if (isNaN(pesoValue) || isNaN(alturaValue)) {
        resultado.innerHTML = "Digite as informações para saber seu IMC.";
    } else {
        if (imc < 17) {
            resultado.innerHTML = `Seu IMC é igual a ${imc}, você está muito abaixo do peso.`;
        } else if (imc >= 17 && imc < 18.5) {
            resultado.innerHTML = `Seu IMC é igual a ${imc}, você está abaixo do peso.`;
        } else if (imc >= 18.5 && imc < 24.5) {
            resultado.innerHTML = `Seu IMC é igual a ${imc}, você está com o peso ideal.`;
        } else if (imc >= 24.5 && imc < 30) {
            resultado.innerHTML = `Seu IMC é igual a ${imc}, você está acima do peso.`;
        } else {
            resultado.innerHTML = `Seu IMC é igual a ${imc}, cuidado com a obesidade!`;
        }

        peso.value = "";
        altura.value = "";
    }
});
