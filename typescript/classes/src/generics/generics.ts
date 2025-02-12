/*
    Padrões
    S => State
    T => Type
    K => Key
    V => Value
    E => Element
*/

function repositorio<T extends number | string>() {
    let dados: T;

    function getDados(): T {
        return dados;
    }

    function setDados(novoDados: T): void {
        dados = novoDados;
    }

    return { getDados, setDados };
}

const repo1 = repositorio<string>();

repo1.setDados("15");
console.log(repo1.getDados());
