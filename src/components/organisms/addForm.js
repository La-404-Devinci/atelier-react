import { useState } from "react";
import Button from "../atoms/button";

function AddForm({ onTaskAdded }) {
    // On stocke la valeur du champ dans le state
    const [text, setText] = useState("");

    // On met à jour le state à chaque changement de valeur
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    // On appelle la fonction de callback avec la valeur du champ
    const handleSubmit = (event) => {
        event.preventDefault();
        onTaskAdded(text);
        setText("");
    };

    return (
        <form>
            <input type="text" value={text} onChange={handleTextChange} />
            <Button color="green" onClick={handleSubmit}>
                Add
            </Button>
        </form>
    );
}

export default AddForm;
