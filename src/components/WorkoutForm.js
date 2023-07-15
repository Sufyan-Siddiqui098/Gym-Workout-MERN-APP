import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addWorkout } from '../store/workoutSlice'

const WorkoutForm = () => {
  const  dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState('')
  let workout = {title, reps, load}

  return (
    <form action="">
        <h1>Add Workout</h1>
        <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title} />
        </div>
        <div>
            <label htmlFor="reps">Reps:</label>
            <input type="number" name="reps" id="reps" placeholder='Reps' onChange={(e)=>setReps(e.target.value)} value={reps} />
        </div>

        <div>
            <label htmlFor="laod">Load (kg):</label>
            <input type="number" name="laod" id="load" placeholder='Load (Kg)' onChange={(e)=>setLoad(e.target.value)} value={load}/>
        </div>

        <button className='btn submit' onClick={(e)=>{ e.preventDefault(); dispatch(addWorkout(workout))}} >Add</button>
    </form>
  )
}

export default WorkoutForm