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
  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            {classes.map((Class, i) => <Table.HeaderCell key={i}>{Class.day}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {classes.map((Class) => <Table.Cell><h5>{Class.title}</h5><span>{Class.description}</span></Table.Cell>)}<Table.Cell>John</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default Calendar
