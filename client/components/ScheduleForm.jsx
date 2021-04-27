import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'
import ClassOptions from './ClassOptions'
import { ifAuthenticated } from './Authenticated'

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
    props.history.push('/home/bookedClasses')
    return null
  }

  const days = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  }
  Object.keys(days).forEach(day => {
    classes.forEach(Class => {
      if (Class.day === day) {
        days[day].push(Class)
      }
    })
  })

  return (
    <ifAuthenticated>
      <div>
        <form id='choose-class'>
          <h4>Please choose your classes for the week.</h4>
          {Object.keys(days).map((day, i) => <div key={i}><label key={i}>{day}</label><select key={i} name={day} onChange={handleChange}><option value="" disabled selected>Choose a class</option><ClassOptions schedule={days} day={day} /> </select></div>)}
          <button onClick={handleSubmit} className='btn'>Submit</button>
        </form>
      </div>
    </ifAuthenticated>

  )
}

export { ScheduleForm, ClassesBooked }
