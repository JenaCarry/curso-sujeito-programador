"use strict";
// Valor default
function cadastro(email, password, name = "Aluno") {
    const data = { email, password, name };
    console.log(data);
}
cadastro("test@test.com", "123456", "Lucas");
