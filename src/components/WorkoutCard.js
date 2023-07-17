import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorkouts, deleteWorkout } from '../store/workoutSlice'




const WorkoutCard = () => {
    const dispatch = useDispatch();
    const workout = useSelector((state)=>state.workout.workouts)

    useEffect(()=>{
        dispatch(fetchWorkouts())
        //eslint-disable-next-line
    }, [])

    const handleEdit = ()=>{
        document.getElementById("modal").classList.add("active")
    }

    

 return (workout && workout.map((el)=>{
    return(
    <div className="card" key={el._id}>
        <div className='flex-sp-bw'>
        <h3>{el.title}</h3>
        <div className="icons">
        <i className="fa-regular fa-pen-to-square" onClick={handleEdit}>r</i>
        <i className="fa-solid fa-trash" onClick={()=>{console.log(el._id);return dispatch(deleteWorkout(el._id))}}>d</i>
        </div>
        </div>
        <p>{el.reps} Reps</p>
        <p>{el.load} Kg</p>
    </div>
    )
 }))
}

export default WorkoutCard