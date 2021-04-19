import React, { useEffect, useState } from 'react'
import { getClasses } from '../apiClient'
import { Table } from 'semantic-ui-react'

const Calendar = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    getClasses()
      .then(classes => setClasses(classes))
      .catch(e => console.error(e.message))
  }, [])
  const days = {
    'Monday': [],
    'Tuesday': [],
    'Wednesday': [],
    'Thursday': [],
    'Friday': [],
    'Saturday': [],
    'Sunday': []
  }

  Object.keys(days).map(day => {
    return classes.map(classes => {
      if (classes.day == day) {
        days[day].push(classes)
      }})})

console.log(days)
  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            {Object.keys(days).map((day, i) => <Table.HeaderCell key={i}>{day}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        {/* <Table.Body>
          <Table.Row>
            {classes.map((Class) => <Table.Cell><h5>{Class.title}</h5><span>{Class.description}</span></Table.Cell>)}
          </Table.Row>
        </Table.Body> */}
      </Table>
    </div>
  )
}

export default Calendar
