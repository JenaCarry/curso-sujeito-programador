// Valor default

function cadastro(
    email: string,
    password: string,
    name: string = "Aluno"
): void {
    const data = { email, password, name };
    console.log(data);
}

cadastro("test@test.com", "123456", "Lucas");
