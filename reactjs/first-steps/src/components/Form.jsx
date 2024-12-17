import { useState } from "react";

export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [user, setUser] = useState(null);

    const isFormValid = name && email && age && !isNaN(age);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        alert("Usuário criado com sucesso!");
        setUser({ name, email, age });
    };

    console.log(user);

    return (
        <>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Digite seu nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@test.com..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Idade: </label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Digite sua idade..."
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!isFormValid}>
                    Registrar
                </button>
            </form>

            {user && (
                <div>
                    <h3>Usuário Criado</h3>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Idade: {user.age}</p>
                </div>
            )}
        </>
    );
}
