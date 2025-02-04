// Afirma um tipo

let currentStatus: unknown = 1;

let changeStatus: number = 0;

// Afirma que currentStatus é de fato um número
// changeStatus = <number>currentStatus;
changeStatus = currentStatus as number;

console.log(changeStatus);
