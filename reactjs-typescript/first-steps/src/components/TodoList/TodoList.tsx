import {
    FormEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
    useCallback,
} from "react";
import "./TodoList.css";

interface TasksProps {
    task: string;
    status: boolean;
}

export function TodoList() {
    const inputRef = useRef<HTMLInputElement>(null);
    const firstRender = useRef(true);
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState<TasksProps[]>([]);
    const [edit, setEdit] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Lista de Tarefas";
        getAllTasks();
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem("@tasks", JSON.stringify(tasks));
    }, [tasks]);

    // function setAllTasks(tarefas: TasksProps[]) {
    //     setTasks(tarefas);
    //     localStorage.setItem("@tasks", JSON.stringify(tarefas));
    // }

    function getAllTasks() {
        const tarefas = localStorage.getItem("@tasks");
        try {
            if (tarefas) {
                setTasks(JSON.parse(tarefas));
            }
        } catch (error) {
            console.error("Erro ao carregar as tarefas!", error);
        }
    }

    const handleTasks = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            let updateTasks: TasksProps[] = [...tasks];
            if (!input) {
                alert("Preencha o campo com alguma tarefa...");
                return;
            } else if (edit !== null) {
                updateTasks[edit].task = input;
                setEdit(null);
            } else {
                updateTasks = [...updateTasks, { task: input, status: false }];
            }
            setTasks(updateTasks);
            setInput("");
        },
        [input, tasks, edit]
    );

    function handleComplete(index: number) {
        const updateTasks: TasksProps[] = [...tasks];
        updateTasks[index].status = !updateTasks[index].status;
        setTasks(updateTasks);
    }

    function handleDelete(index: number) {
        const updateTasks: TasksProps[] = [...tasks];
        updateTasks.splice(index, 1);
        setTasks(updateTasks);
    }

    function handleEdit(index: number) {
        inputRef.current?.focus();
        setInput(tasks[index].task);
        setEdit(index);
    }

    const totalTarefas = useMemo(() => {
        return tasks.length;
    }, [tasks]);

    return (
        <main className="container">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={handleTasks}>
                <div>
                    <input
                        className="input"
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Digite alguma tarefa..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        ref={inputRef}
                    />
                </div>
                <input
                    className="button"
                    type="submit"
                    value={edit !== null ? "Atualizar" : "Adicionar"}
                />
            </form>
            {tasks.length !== 0 ? (
                <>
                    <h2>Tarefas</h2>
                    <ul className="list">
                        {tasks.map((task, index) => (
                            <li key={index}>
                                <div className="container-list">
                                    <h3
                                        className={
                                            task.status ? "completed" : ""
                                        }
                                    >
                                        {task.task}
                                    </h3>
                                    <div>
                                        <button
                                            className="button-action"
                                            onClick={() =>
                                                handleComplete(index)
                                            }
                                        >
                                            Concluir
                                        </button>
                                        <button
                                            className="button-action"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Excluir
                                        </button>
                                        <button
                                            className="button-action"
                                            onClick={() => handleEdit(index)}
                                        >
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Você tem {totalTarefas} tarefas...</h4>
                </>
            ) : null}
        </main>
    );
}
