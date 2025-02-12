class Conta {
    // Pode ser acessado e modificado apenas por meio da classe em que foi criado
    private limite: number = 450;

    private aumentarLimite(novoLimite: number): void {
        if (novoLimite < 1000) {
            this.limite = novoLimite;
            console.log(`Agora seu novo limite é: ${this.limite}`);
        } else {
            console.log("Infelizmente seu limite foi reprovado!");
        }
    }

    solicitarLimite(autenticado: boolean, novoLimite: number) {
        if (autenticado) {
            this.aumentarLimite(novoLimite);
            console.log("Limite alterado com sucesso!");
        } else {
            console.log("Erro ao alterar o limite!");
        }
    }

    mostrarLimite(): void {
        console.log(`Novo Limite: ${this.limite}`);
    }
}

const cliente = new Conta();

cliente.solicitarLimite(true, 820);
// cliente.mostrarLimite();
