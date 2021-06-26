import { useState } from "react"
import React from 'react'


const AddTaskForm = ({onAddTask}) => {

const[desc , setDesc]= useState('');
const[day , setDay]= useState('');
const[reminder , setReminder]= useState(false);

const onSubmit = (e) => {
    e.preventDefault()

    if(!desc){
        alert('Please add a task');
        return
    }

    if(!day){
        alert('Please add a date');
        return
    }

    onAddTask({desc, day , reminder}); 

    //clearing form 
    setDesc('');
    setDay('');
    setReminder(false);

}
    return (
        <div>
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control' >
                <label>Task</label>
                <input 
                type='text' 
                placeholder='add task' 
                value = {desc}
                onChange ={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className='form-control' >
                <label>Date and Time</label>
                <input 
                type='text'  
                placeholder='add date and time' 
                value = {day}
                onChange ={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check' >
                <label>Set Reminder</label>
                <input 
                type='checkbox'
                checked ={reminder}
                value = {reminder}
                onChange ={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Save' className='btn btn-block'></input>
        </form>
        </div>
    )
}

export default AddTaskForm
