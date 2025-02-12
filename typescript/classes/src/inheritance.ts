// Uma classe que herda outra.
class User {
    // Pode ser acessado e modificado por todo o código
    public name: string;
    email: string;
    // Pode ser acessado e modificado por meio da classe em que foram criados e por subclasses
    protected password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class Admin extends User {
    position: string;
    level: number;

    constructor(
        name: string,
        email: string,
        password: string,
        position: string,
        level: number
    ) {
        super(name, email, password);

        this.position = position;
        this.level = level;
    }

    showUserDetails() {
        console.log(`Nome: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Senha: ${this.password}`);
        console.log(`Cargo: ${this.position}`);
        console.log(`Nível: ${this.level}`);
    }

    protected changePassword(newPassword: string): string {
        return (this.password = newPassword);
    }

    showNewPassword(): void {
        console.log(`Nova senha: ${this.changePassword("654321")}`);
    }
}

const newUser = new Admin("Jean", "jean@test.com", "123456", "Programador", 1);

newUser.showUserDetails();
newUser.showNewPassword();
