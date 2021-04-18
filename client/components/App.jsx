import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { ScheduleForm } from './ScheduleForm'
import { LogIn } from './LogIn'
import Calendar from './Calendar'
import UserWelcome from './UserWelcome'
import BookedClasses from './BookedClasses'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/schedule/form' component={ScheduleForm}></Route>
      <Route path='/bookedClasses' component={BookedClasses}></Route>
      <Route path='/schedule' component={Calendar}></Route>
      <Route path='/schedule' component={UserWelcome}></Route>
    </Router>
  )
}

export default App
