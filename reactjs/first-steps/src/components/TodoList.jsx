import { useEffect, useState } from "react";

export function TodoList() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosStorage = localStorage.getItem("@todos");
        if (todosStorage) setTodos(JSON.parse(todosStorage));
    }, []);

    useEffect(() => {
        localStorage.setItem("@todos", JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo === "") {
            alert("Digite uma tarefa válida!");
        } else {
            setTodos([
                ...todos,
                { todo: newTodo, isCompleted: false, id: crypto.randomUUID() },
            ]);
            setNewTodo("");
        }
    };

    const handleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    const handleDeleted = (id) => {
        setTodos(
            todos.filter((todo) => (todo.id !== id ? { ...todo, todo } : null))
        );
    };

    return (
        <>
            <h2>Crie uma tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Crie uma nova tarefa..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.isCompleted
                                ? "line-through"
                                : "",
                        }}
                    >
                        <button onClick={() => handleCompleted(todo.id)}>
                            Concluir
                        </button>
                        {todo.todo}
                        <button onClick={() => handleDeleted(todo.id)}>
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
