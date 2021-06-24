import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTaskForm from "./Components/AddTaskForm"
import { useState , useEffect } from 'react'


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
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
   const newTask = {id, ...task};
   setTasks([...tasks, newTask]);
}


//delete tasks
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
  setTasks (tasks.filter((task) => task.id !== id ))
}

//toggle rimder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))

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
