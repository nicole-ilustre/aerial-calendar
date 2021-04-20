import React from 'react'
import { Table } from 'semantic-ui-react'

const Class = (props) => {
  const Schedule = props.schedule
  const todaysClasses = props.schedule[props.day]
  return (
    <>
      {todaysClasses.map((classes, i) => <div>{classes.title}</div>)}
    </>
  )
}
export default Class
