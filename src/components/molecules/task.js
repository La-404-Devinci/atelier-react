import Button from "../atoms/button";

function Task({ task, onDelete }) {
    return (
        <div className="task">
            {/* On affiche la tâche */}
            <p>{task}</p>

            {/* On passe la fonction de callback à l'élément enfant */}
            <Button color="red" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
}

export default Task;
