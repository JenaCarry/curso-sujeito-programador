"use strict";
function totalSales(...sales) {
    const salesQuantity = sales.length;
    console.log(`Você fez ${salesQuantity} vendas hoje!`);
}
totalSales(10, 20, 50);
function showNames(...names) {
    names.map((name) => {
        console.log(name);
    });
}
showNames("Jean", "Lucas", "Matheus", "Gustavo");
