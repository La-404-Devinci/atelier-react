import Task from "../molecules/task";

function TaskList({ tasks, onTaskRefresh }) {
    // On crée une fonction pour supprimer une tâche
    const removeTaskHandler = (task) => {
        // On crée une copie du tableau (pour ne pas modifier le state directement)
        const newTasks = [...tasks];

        // On supprime la tâche
        newTasks.splice(newTasks.indexOf(task), 1);

        // On met à jour le state
        onTaskRefresh(newTasks);
    };

    return (
        <ul>
            {/*
                On affiche la liste des tâches avec la fonction map
                Voir: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            */}

            {tasks.map((task) => (
                // On affiche la tâche avec notre composant Task
                <Task
                    key={task + Math.random()} // On passe la clé pour éviter un warning (voir: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
                    task={task} // On passe la tâche à l'élément enfant pour l'afficher
                    onDelete={() => removeTaskHandler(task)} // On passe la fonction de callback à l'élément enfant pour supprimer la tâche
                />
            ))}
        </ul>
    );
}

export default TaskList;
