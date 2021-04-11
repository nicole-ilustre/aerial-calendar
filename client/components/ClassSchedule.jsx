import React from 'react'
import ClassData from '../../data/classes'

const ClassSchedule = () => {
  return (
    <div>
      <form id='choose-class'>
        <h4>Please choose your classes from the dropdown menu</h4>
        {ClassData.Schedule.map((day, i) => {
          return Object.values(day).map((Class, j) =>  <div><label key={i}>{Object.keys(day)}</label> <select><option key={j}>{Class[j].title}</option> </select></div>)})}
      </form>
    </div>

  )
}

export default ClassSchedule
