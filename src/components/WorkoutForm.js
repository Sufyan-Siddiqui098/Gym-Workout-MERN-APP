import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addWorkout } from '../store/workoutSlice'

const WorkoutForm = () => {
  const  dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState('')
  let workout = {title, reps, load}

  const onSubmit = (e)=>{
    e.preventDefault();  
    setTitle("");
    setReps("");
    setLoad("")
    dispatch(addWorkout(workout))
  }

  return (
    <>
    <form action="" onSubmit={onSubmit}>
        <h1>Add Workout</h1>
        <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" required={true} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title} />
        </div>
        <div>
            <label htmlFor="reps">Reps:</label>
            <input type="number" name="reps" id="reps" required={true} placeholder='Reps' onChange={(e)=>setReps(e.target.value)} value={reps} />
        </div>

        <div>
            <label htmlFor="laod">Load (kg):</label>
            <input type="number" name="laod" id="load" required={true} placeholder='Load (Kg)' onChange={(e)=>setLoad(e.target.value)} value={load}/>
        </div>

        <button className='btn submit'  >Add</button>

    </form>
    
    </>
  )
}

export default WorkoutForm