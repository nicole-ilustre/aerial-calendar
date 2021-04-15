import React, { useEffect } from 'react'
import ClassDetails from './ClassDetails'
import { getClasses } from '../apiClient'

const Calendar = () => {
  const classes = getClasses()

  console.log(getClasses())
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
