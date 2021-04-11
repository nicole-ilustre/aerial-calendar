import React from 'react'
import ClassData from '../../data/classes'
import ClassDetails from './ClassDetails'

const Calendar = () => {
  function getDays () {
    return ClassData.Schedule
  }
  const days = Object.entries(getDays())
  console.log(days)
  return (
    <div>
      <table id='calendar'>
        <tr>{days.map((day, i) => <th key={i}>{day[0]}</th>)}</tr>
        <tr>{days.map((Class, j) => <td><h5><ClassDetails classDetails={Class[1]} /></h5></td>)}</tr>
      </table>
    </div>
  )
}

export default Calendar
