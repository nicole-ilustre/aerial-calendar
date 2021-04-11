import React from 'react'

const Class = (props) => {
  const Classes = props.Class
  return (
    <select>
      {Classes.map((Class, i) => <option key={i}>{Class.title}</option>)}
    </select>
  )
}

export default Class
