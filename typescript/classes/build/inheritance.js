"use strict";
// Uma classe que herda outra.
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class Admin extends User {
    constructor(name, email, password, position, level) {
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
    changePassword(newPassword) {
        return (this.password = newPassword);
    }
    showNewPassword() {
        console.log(`Nova senha: ${this.changePassword("654321")}`);
    }
}
const newUser = new Admin("Jean", "jean@test.com", "123456", "Programador", 1);
newUser.showUserDetails();
newUser.showNewPassword();
