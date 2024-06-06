import React, {useState} from 'react';
import Header from './components/Header';
import "./App.css";
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
    const [tasks, setTasks] = useState([
        {id:"tasks_1", title:"Learn JS", status: 0},
        {id:"tasks_2",title:"Code a Todo List", status: 1},
    ])
    const [showIncomplete, setShowIncomplete] = useState(true)
    const [newTask, setNewtask] = useState ("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (newTask){
            const task ={
                id: Date.now(),
                title: newTask,
                status: 0,
            }
            setTasks([...tasks, task])
            setNewtask("")
        }
    };
    const handleInputchange =(e)=>{
        setNewtask(e.target.value)
    }
    const setTaskStatus =(taskId, status)=>{
        setTasks(tasks.map(task =>{
            if(task.id === taskId){
                return {...task, status : status ? 1 : 0}
            }
            return task;
        }))
    }
    const removeTask = (taskId)=>{
        setTasks(tasks.filter((task)=>task.id !== taskId))
    }
  return (
        <div className="container">
            <Header/>
            <TaskList tasks={tasks} showIncomplete={showIncomplete}setTaskStatus={setTaskStatus}removeTask={removeTask}setShowIncomplete={setShowIncomplete}/>
            <AddTaskForm newTask={newTask} handleInputchange={handleInputchange}handleSubmit={handleSubmit}/>
        </div>
  )
};

export default App;
