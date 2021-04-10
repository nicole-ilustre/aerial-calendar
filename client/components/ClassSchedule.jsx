import React from 'react'
// import Class from './Class.jsx'
import ClassData from '../../data/classes'

const ClassSchedule = () => {
  const schedule = Object.keys(ClassData.Schedule)
  const classes = ClassData.Schedule
  console.log(classes)
  return (
    <div>
      <form id='choose-class'>
        <h4>Please choose your classes from the dropdown menu</h4>
        <div>
          {schedule.map((day, i) => <label key={i}>{day}</label>)}
        </div>
      </form>
    </div>

  )
}

export default ClassSchedule
