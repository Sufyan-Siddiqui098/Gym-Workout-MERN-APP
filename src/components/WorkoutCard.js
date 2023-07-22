import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorkouts, deleteWorkout, fetchWorkout } from '../store/workoutSlice'
import {formatDistanceToNow} from 'date-fns'




const WorkoutCard = () => {
    const dispatch = useDispatch();
    const workout = useSelector((state)=>state.workout.workouts)

    useEffect(()=>{
        dispatch(fetchWorkouts())
        console.log("UseEffect is running inside WorkoutCard.js")
        
    }, [dispatch])

    const handleEdit = ()=>{
        document.getElementById("modal").classList.add("active")
        
    }

    

 return (workout && workout.map((el)=>{
    return(
    <div className="card" key={el._id}>
        <div className='flex-sp-bw'>
        <h3>{el.title}</h3>
        <div className="icons">
        <i className="fa-regular fa-pen-to-square" onClick={()=>{handleEdit(); return dispatch(fetchWorkout(el._id))}}></i>
        <i className="fa-solid fa-trash" onClick={()=>{return dispatch(deleteWorkout(el._id))}}></i>
        </div>
        </div>
        <p>{el.reps} Reps</p>
        <p>{el.load} Kg</p>
        <p className='createdAt'>{formatDistanceToNow(new Date(el.createdAt), {addSuffix: true})}</p>
    </div>
    )
 }))
}

export default WorkoutCard