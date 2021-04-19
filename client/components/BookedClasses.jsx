import React from 'react'
import { ClassesBooked } from './ScheduleForm'
import { Table } from 'semantic-ui-react'

const BookedClasses = () => {
  const days = Object.keys(ClassesBooked)
  const classes = Object.values(ClassesBooked)
  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            {days.map((Class, i) => <Table.HeaderCell key={i}>{Class}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {classes.map((Class, j) => <Table.Cell><h5>{Class}</h5></Table.Cell>)}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default BookedClasses
