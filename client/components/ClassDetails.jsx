import React from 'react'

const ClassDetails = (props) => {
  const Classes = props.classDetails
  console.log(Classes)
  return (
    <td>
      {Classes.map((Class, k) => <div><td key={k}>{Class.title}</td> <span key={k}>{Class.description}</span></div>)}
    </td>
  )
}

export default ClassDetails
