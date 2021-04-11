import React from 'react'
import ClassData from '../../data/classes'
import Class from './Class'

const ClassSchedule = () => {
  function getDays () {
    return ClassData.Schedule
  }

  const days = Object.entries(getDays())

  return (
    <div>
      <form id='choose-class'>
        <h4>Please choose your classes for the week.</h4>
        {days.map((day, i) => { 
          return <div><label key={i}>{day[0]}</label> <Class Class={day[1]} /></div>})}
        <button className='btn'>Submit</button>
      </form>
    </div>

  )
}

export default ClassSchedule
