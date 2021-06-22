import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import { useState } from 'react'

function App() {
  const[tasks, setTasks] = useState(
    [ {
         id:1,
         desc:'Doctors appointment',
         day:'20 feb 2022',
         reminder:true
     },
     {
         id:2,
         desc:'Pitching',
         day:'20 feb 2022',
         reminder:true
     },
     {
         id:3,
         desc:'goto club',
         day:'20 feb 2022',
         reminder:true
     }
 ]
 )

const deleteTask = (id) => {
  setTasks (tasks.filter((task) => task.id !== id ))
}
  return (
    <div className="container">
      <Header/>
     {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete={deleteTask} />):('YAY!! You are done with your task')}
    </div>
  );
}

export default App;
