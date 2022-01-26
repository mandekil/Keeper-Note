import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input";


function App(){
    const [notes, setNote] = useState([]);

    function handleClick(noteInput){
        setNote(prevNotes => {
            return [...prevNotes, noteInput];
        });
    }

    function deleteNote(id){
        setNote(prevNotes => {
            return prevNotes.filter((note, index)=> index !== id)
        });
    }

    return (
        <div>
            <Header />
            <Input onAdd={handleClick}/>
            {notes.map((note, index) => <Note 
                key={index}
                id={index}
                title= {note.title}
                content= {note.note}
                onDelete= {deleteNote}
                />)
            }
            <Footer />
        </div>
    )
}

export default App;