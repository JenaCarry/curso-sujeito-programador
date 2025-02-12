"use strict";
/*
    Padrões
    S => State
    T => Type
    K => Key
    V => Value
    E => Element
*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDados) {
        dados = novoDados;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados("15");
console.log(repo1.getDados());
