import React, { useRef } from 'react'
import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from '../components/WorkoutForm'
import UpdateModal from '../components/UpdateModal'

const Home = () => {
  const modalRef = useRef()
  const handleClick = (e)=>{
    if(e.target.id==='modal'){
      return modalRef.current.classList.remove("active")
    }
  }
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
    <div className="modal" id='modal' ref={modalRef}  onClick={handleClick}>
        <UpdateModal/>
    </div>
    </>
  )
}

export default Home