import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import './index.css'

const TaskApp = () => {
    const [task, setTask] = useState("");
    const [taskList, addTask] = useState([]);

    const updateTask = (event) => {
        setTask(event.target.value);
    }

    const updatetaskList = () => {
        const newTask = {
            id : uuidv4(),
            task: task
        }
        addTask(preVal => [...preVal, newTask])
        setTask("");
    }

    return (
        <div className='task-app-bg'>
            <h1 className='headding'>Add Something you need to done,</h1>
            <div className='input-container'>
                <input className='input-box' type='text' placeholder='Enter task...' onChange={updateTask} value={task}/>
                <button className='add-btn' type='button' onClick={updatetaskList}>Add</button>
            </div>
            <div className='task-section'>
                {taskList.map(each => {
                    return (
                        <div className='task-container' key={each.id}>
                    <h1 className='task'>{each.task}</h1>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskApp