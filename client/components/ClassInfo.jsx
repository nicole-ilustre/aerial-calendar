import React from 'react'
import { classDetails } from './Class'

export default function ClassInfo () {
  return (
    <table className="ui celled table">
      <thead>
        <tr><th>Class Title</th>
          <th>About Class</th>
          <th>Teacher</th>
        </tr></thead>
      <tbody>
        <tr>
          <td data-label="Title">{classDetails.title}</td>
          <td data-label="Description">{classDetails.description}</td>
          <td data-label="Teacher">{classDetails.teacher}</td>
        </tr>
      </tbody>
    </table>
  )
}
