import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

let classDetails = []
const Class = (props) => {
  function handleClick (classes) {
    classDetails = classes
    props.history.push('/home/classInfo')
    return null
  }
  const todaysClasses = props.schedule[props.day]
  return (
    <>
      {todaysClasses.map((classes, i) => <Table.Row name='chevron left' key={i}><Link to={'/home/classInfo'}><Table.Cell key={i} onClick={() => handleClick(classes)} value={classes.teacher}>{classes.title}</Table.Cell></Link></Table.Row>)}
    </>
  )
}
export { Class, classDetails }
