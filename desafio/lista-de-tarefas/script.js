const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const getAllTarefas = () => JSON.parse(localStorage.getItem("tarefas")) ?? [];

const setAllTarefas = (tarefas) =>
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

function atualizarDisplay() {
    listElement.innerHTML = "";
    const tarefas = getAllTarefas();
    tarefas.map((tarefa, index) => adicionarTarefaLista(tarefa, index));
}

function excluirTarefa(index) {
    const tarefas = getAllTarefas();
    tarefas.splice(index, 1);
    setAllTarefas(tarefas);
    atualizarDisplay();
}

function concluirTarefa(index) {
    const tarefas = getAllTarefas();
    tarefas[index].isCompleted = !tarefas[index].isCompleted;
    setAllTarefas(tarefas);
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
        const tarefas = getAllTarefas();
        tarefas.push({ text: novaTarefa, isCompleted: false });
        setAllTarefas(tarefas);
        atualizarDisplay();
        inputElement.value = "";
    }
}

buttonElement.addEventListener("click", criarNovaTarefa);

document
    .querySelector("form")
    .addEventListener("submit", (event) => event.preventDefault());

atualizarDisplay();
