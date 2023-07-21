import React, {   useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkout } from '../store/workoutSlice';

const UpdateModal = () => {
  const dispatch = useDispatch();
  const workout = useSelector((state)=>state.workout.workout)
  // console.log(workout)
  let {title, reps,load} = workout
  const [uTitle, setUTitle] = useState("")
  const [uReps, setUReps] = useState("")
  const [uLoad, setULoad] = useState("")  

  useEffect(()=>{
    setUTitle(title || "");
    setUReps(reps || "");
    setULoad(load || "")
    console.log("update modal useEffect..")
  }, [title, reps,load])
  
  
  let updatedWorkout = {
    title: uTitle,
    reps: parseInt(uReps),
    load: parseInt(uLoad),
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log("updated workout from form ", updatedWorkout)
    let arg = {id: workout._id, updatedWorkout}
    dispatch(updateWorkout(arg)); //pass arg because throwing error when passing two arguements
    document.getElementById('modal').classList.remove('active')
  }

  return (
    
        <form action="" id='form-modal' onSubmit={handleSubmit} >
          <h2>Update Workout</h2>
            <input type="text" name="title" id="title" placeholder='Update Title Here.' value={uTitle} onChange={(e)=>setUTitle(e.target.value)} />
            <input type="number" name="reps" id="reps" placeholder='Update Reps Here.'  value={uReps} onChange={(e)=>setUReps(e.target.value)} />
            <input type="number" name="load" id="load" placeholder='Update Load Here.'  value={uLoad} onChange={(e)=>setULoad(e.target.value)} />
            <button>Update</button>
        </form>
 
  )
}

export default UpdateModal