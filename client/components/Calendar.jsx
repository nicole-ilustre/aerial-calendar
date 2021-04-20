import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'
import Class from './Class.jsx'
import { Table } from 'semantic-ui-react'

const Calendar = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
      .catch(e => console.error(e.message))
  }, [])
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
    <div>
      <Table celled id='calendar'>
        <Table.Header>
          <Table.Row>
            {Object.keys(days).map((day, i) => <Table.HeaderCell key={i}>
              {day} <Class schedule={days} day={day} />
              </Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  )
}

export default Calendar 
