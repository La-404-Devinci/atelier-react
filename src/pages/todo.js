import { useState } from "react";
import AddForm from "../components/organisms/addForm";
import TaskList from "../components/organisms/taskList";
import "../styles/todo.css";

function TodoPage() {
    // On crée le state pour stocker les tâches
    const [tasks, setTasks] = useState([]);

    // On crée une fonction pour ajouter une tâche
    const addTasks = (task) => {
        // On crée une copie du tableau (pour ne pas modifier le state directement)
        const newTasks = [...tasks];

        // On ajoute la tâche
        newTasks.push(task);

        // On met à jour le state
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>Todo</h1>

            {/* On ajoute notre formulaire avec la fonction de callback pour ajouter une tâche */}
            <AddForm onTaskAdded={addTasks} />

            {/* On ajoute notre liste de tâches avec la fonction de callback pour rafraîchir la liste */}
            <TaskList tasks={tasks} onTaskRefresh={setTasks} />
        </div>
    );
}

export default TodoPage;
