import React from 'react'
import { Table } from 'semantic-ui-react'

const Class = (props) => {
  const todaysClasses = props.schedule[props.day]
  return (
    <>
      {todaysClasses.map((classes, i) => <Table.Row name='chevron left' key={i}><Table.Cell key={i}>{classes.title}</Table.Cell></Table.Row>)}
    </>
  )
}
export default Class
