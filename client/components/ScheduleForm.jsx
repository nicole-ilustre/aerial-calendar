import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'

const ScheduleForm = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
      .catch(e => console.error(e.message))
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

  }
  const Monday = classes.filter(classes =>
    classes.day === 'Monday')
  const Tuesday = classes.filter(classes =>
    classes.day === 'Tuesday')
  const Wednesday = classes.filter(classes =>
    classes.day === 'Wednesday')
  const Thursday = classes.filter(classes =>
    classes.day === 'Thursday')
  const Friday = classes.filter(classes =>
    classes.day === 'Friday')
  const Saturday = classes.filter(classes =>
    classes.day === 'Saturday')
  const Sunday = classes.filter(classes =>
    classes.day === 'Sunday')

  return (
    <div>
      <form id='choose-class'>
        <h4>Please choose your classes for the week.</h4>
        <label>Monday</label>
        <select>
          {Monday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Tuesday</label>
        <select>
          {Tuesday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Wednesday</label>
        <select>
          {Wednesday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Thursday</label>
        <select>
          {Thursday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Friday</label>
        <select>
          {Friday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Saturday</label>
        <select>
          {Saturday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <label>Sunday</label>
        <select>
          {Sunday.map((Class, i) => <option key={i}>{Class.title}</option>)}
        </select>
        <button className='btn'>Submit</button>
      </form>
    </div>

  )
}

export default ScheduleForm
