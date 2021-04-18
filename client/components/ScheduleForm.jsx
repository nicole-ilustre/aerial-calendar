import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'

let ClassesBooked = {}

const ScheduleForm = (props) => {
  const [classes, setClasses] = useState([])
  const [formData, setFormData] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
      .catch(e => console.error(e.message))
  }, [])

  function handleChange (e) {
    const value = e.target.options[e.target.selectedIndex].value
    const newFormData = {
      ...formData,
      [e.target.name]: value
    }
    setFormData(newFormData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    ClassesBooked = formData
    props.history.push('/bookedClasses')
    return null
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
        <select name="Monday" onChange={handleChange}>
          {Monday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Tuesday</label>
        <select name="Tuesday" onChange={handleChange}>
          {Tuesday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Wednesday</label>
        <select name="Wednesday" onChange={handleChange}>
          {Wednesday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Thursday</label>
        <select name="Thursday" onChange={handleChange}>
          {Thursday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Friday</label>
        <select name="Friday" onChange={handleChange}>
          {Friday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Saturday</label>
        <select name="Saturday" onChange={handleChange}>
          {Saturday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <label>Sunday</label>
        <select name="Sunday" onChange={handleChange}>
          {Sunday.map((Class, i) => <option value={Class.title} key={i}>{Class.title}</option>)}
        </select>
        <button onClick={handleSubmit} className='btn'>Submit</button>
      </form>
    </div>

  )
}

export { ScheduleForm, ClassesBooked }
