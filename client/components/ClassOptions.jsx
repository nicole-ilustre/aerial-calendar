import React from 'react'

export default function ClassOptions (props) {
  const todaysClasses = props.schedule[props.day]
  return (
    <>
      {todaysClasses.map((classes, i) => <option key={i}>{classes.title}</option>)}
    </>
  )
}
