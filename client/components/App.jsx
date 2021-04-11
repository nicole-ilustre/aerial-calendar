import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LogIn from './LogIn'
import ClassSchedule from './ClassSchedule'
import Calendar from './Calendar'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/schedule' component={ClassSchedule}></Route>
      <Route path='/schedule/calendar' component={Calendar}></Route>
    </Router>
  )
}

export default App
