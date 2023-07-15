import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorkouts } from '../store/workoutSlice'




const WorkoutCard = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchWorkouts())
        //eslint-disable-next-line
    }, [])
    const workout = useSelector((state)=>state.workout.workouts)

 return (workout && workout.map((el)=>{
    return(
    <div className="card" key={el._id}>
        <div className='flex-sp-bw'>
        <h3>{el.title}</h3>
        <div className="icons">
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
        </div>
        </div>
        <p>{el.reps} Reps</p>
        <p>{el.load} Kg</p>
    </div>
    )
 }))
}

export default WorkoutCard