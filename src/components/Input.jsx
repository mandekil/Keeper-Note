import React, { useState } from "react";

function Input(props){
    
    const [noteInput, setNoteInput] = useState({
        title: "",
        note: ""
    });

    function handleChange(e){
        const {name, value} = e.target;

        setNoteInput(prevValue => { return {...prevValue, [name]:value}} );
    }

    function submitNote(e){
        props.onAdd(noteInput);
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={noteInput.title}></input>
                <textarea name="note" placeholder="Put your note here ..." rows={3} onChange={handleChange} value={noteInput.note}></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default Input;