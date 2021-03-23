import React, {useEffect, useState} from 'react';
import './Tasks.css';

function Tasks() {
    const [tasks, setTasks] = useState([{
        title: "",
        content: ""
    }])

     useEffect(() => {
         fetch("http://localhost:3001/tasks").then(res => {
             if(res.ok) {
                 return res.json()
             }
         }).then(jsonRes => setTasks(jsonRes));
     })

    return (
        <div className="whole">
            <h1>Tasks</h1>
            {tasks.map(task =>
            <div  className="data">
            <h3>{task.title}</h3>
            <p>{task.content}</p>
            </div>
            )}

        </div>
    )
}

export default Tasks
