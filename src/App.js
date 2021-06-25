import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTaskForm from "./Components/AddTaskForm"
import { useState , useEffect } from 'react'
import React from 'react'

function App() {

  const [addTaskFormDisplay, setaddTaskFormDisplay] = useState(false)
  const[tasks, setTasks] = useState([ ])

  //use effect
  useEffect(() => {
    const gettasks = async () =>{
      const taskFromDB = await fetchtaskasync();
      setTasks(taskFromDB); 
    }
    gettasks()
  }, [])

 //fetch task
 const fetchtaskasync = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
} 
//add task
const addTask = async (task) => {
  const response = await fetch('http://localhost:5000/tasks', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(task)
  })

  const data = await response.json()
   setTasks([...tasks, data])
  }


//delete tasks
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
  setTasks (tasks.filter((task) => task.id !== id ))
}


const fetchtask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
} 

//toggle rimder
const toggleReminder = async (id) => {
const taskToToggle = await fetchtask(id)
const updTask = {...taskToToggle , reminder : !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PUT", 
    headers:{"Content-type" : 'application/json'},
    body: JSON.stringify(updTask)
  })

  const data =  await res.json() 

  setTasks(tasks.map((task) => task.id === id ? {...task,reminder: data.reminder} : task))

}

  return (
    <div className="container">
        <Header onAddClick = {() => setaddTaskFormDisplay(!addTaskFormDisplay)} 
        changeName= {addTaskFormDisplay} />

        {addTaskFormDisplay && <AddTaskForm onAddTask = {addTask}/>}
        {tasks.length > 0 ? (<Tasks tasks = {tasks} 
        onDelete={deleteTask}
        onToggle = {toggleReminder} 
        />)
        :('YAY!! You are done with your task')}
    </div>

    
  );
}

export default App;
