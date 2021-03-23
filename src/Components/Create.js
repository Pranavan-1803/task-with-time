import React, {useState} from 'react';
import './Create.css';
import axios from "axios";

function Create() {

    const [input, setInput] = useState({
        title:'',
        content:''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        const newTask = {
            title: input.title,
            content: input.content
        }

        axios.post('http://localhost:3001/create', newTask)
    }

    return (
        <div className="wholeContent">
            <h1> Create Task</h1>
            <form className="create">
                <h3>Task Name</h3>
                <input onChange={handleChange} name="title" value={input.title}></input>
                <h3>Description</h3>
                <textarea onChange={handleChange} name="content" value={input.content}></textarea>
                <h3>Hit!</h3>
                <button onClick={handleClick}>Add Task</button>
            </form>
        </div>
    )
}

export default Create
