const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const tarefas = [];

function atualizarDisplay() {
    listElement.innerHTML = "";
    tarefas.map((tarefa, index) => adicionarTarefaLista(tarefa, index));
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    atualizarDisplay();
}

function concluirTarefa(index) {
    tarefas[index].isCompleted = !tarefas[index].isCompleted;
    atualizarDisplay();
}

function adicionarTarefaLista(tarefa, index) {
    const liElement = document.createElement("li");
    liElement.id = index;
    liElement.classList = "item";
    liElement.innerHTML = `
        <div class="${tarefa.isCompleted ? "completed" : ""}">
            <input type="checkbox" name="completed-${index}" id="completed-${index}" 
            ${tarefa.isCompleted ? "checked" : ""} />
            <label for="completed-${index}">${tarefa.text}</label>
        </div>
        <button class="excluir">X</button>
        `;
    listElement.appendChild(liElement);
    liElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("excluir")) {
            excluirTarefa(index);
        } else {
            concluirTarefa(index);
        }
    });
}

function criarNovaTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefas!");
        return false;
    } else {
        let novaTarefa = inputElement.value;
        tarefas.push({ text: novaTarefa, isCompleted: false });
        atualizarDisplay();
        inputElement.value = "";
    }
}

buttonElement.addEventListener("click", criarNovaTarefa);

document
    .querySelector("form")
    .addEventListener("submit", (event) => event.preventDefault());

atualizarDisplay();
