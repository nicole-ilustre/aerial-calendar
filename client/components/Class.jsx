import React from 'react'
import { Table } from 'semantic-ui-react'

const Class = (props) => {
  const Schedule = props.schedule
  const todaysClasses = props.schedule[props.day]
  console.log(todaysClasses)
  return (
    <>
      {todaysClasses.map((classes, i) => <div>{classes.title}</div>)}
      {/* {Schedule.map(Classes => {
        return Classes.map((Class, i) => <Table.Cell key={i}><div>{Class}</div></Table.Cell>)
      })} */}
    </>
  )
}
export default Class
