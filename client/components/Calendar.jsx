import React, { useEffect, useState } from 'react'
import ClassDetails from './ClassDetails'
import { getClasses } from '../apiClient'

const Calendar = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
  }, [])

  return (
    <div>
      <table id='calendar'>
        <tr>{classes.map((day, i) => <th key={i}>{day[0]}</th>)}</tr>
        {/* <tr>{days.map((Class, j) => <td><h5><ClassDetails classDetails={Class[1]} /></h5></td>)}</tr> */}
      </table>
    </div>
  )
}

export default Calendar
