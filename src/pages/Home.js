import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  return (
    <>
    <div className='container'>
        <h1>Workouts</h1>
        <div className="content">
          <div className="card-container">
          <WorkoutCard/>
          </div>
          <div className="form">
            <WorkoutForm/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home