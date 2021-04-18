import React from 'react'
import { ClassesBooked } from './ScheduleForm'

const BookedClasses = () => {
  const days = Object.keys(ClassesBooked)
  const classes = Object.values(ClassesBooked)
  return (
    <div>
      <table id='calendar'>
        <tr>{days.map((Class, i) => <th key={i}>{Class}</th>)}</tr>
        <tr>{classes.map((Class, j) => <td key={j}><h5 key={j}>{Class}</h5></td>)}</tr>
      </table>
    </div>
  )
}

export default BookedClasses
