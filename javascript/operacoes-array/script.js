// Map
const mapList = ["Lucas", "João", "Maria", "Antônio"];
mapList.map((name, index) => {
    console.log(`${index + 1}° posição - ${name}`);
});
console.log();

// Reduce
const reduceList = [2, 6, 8, 12];
const reduceTotal = reduceList.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        console.log(`${previousValue}: valor anterior.`);
        console.log(`${currentValue}: valor atual.`);
        console.log(`${currentIndex}: posição atual.`);
        console.log(`${array}: array original.`);

        return (previousValue += currentValue);
    }
);
console.log(reduceTotal);
console.log();

// Find
const findList = [2, "Lucas", 6, "Pedro"];
const findItem = findList.find((item) => {
    if (item === "Lucas") {
        return console.log(`Item encontrado: ${item}`);
    }
});
console.log(findItem);
console.log();

// Filter
const filterList = ["Lucas", "João", "Maria", "Antônio", "Matheus", "Gabriel"];
const filterNames = filterList.filter((name) => {
    return name.length <= 5;
});
console.log(filterNames);
