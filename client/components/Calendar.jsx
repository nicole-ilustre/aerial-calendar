import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'

const Calendar = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
      .catch(e => console.error(e.message))
  }, [])

  return (
    <div>
      <table id='calendar'>
        <tr>{classes.map((Class, i) => <th key={i}>{Class.day}</th>)}</tr>
        <tr>{classes.map((Class) => <td><h5>{Class.title}</h5><span>{Class.description}</span></td>)}</tr>
      </table>
    </div>
  )
}

export default Calendar
