export function Signup({
    email,
    setEmail,
    password,
    setPassword,
    handleCreateUser,
    setInitial,
}) {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Seu email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Crie uma senha..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleCreateUser}>Criar Conta</button>
            </form>
            <div className="initial">
                <p>Já possui uma conta?</p>
                <button onClick={() => setInitial(true)}>Entrar</button>
            </div>
        </div>
    );
}
