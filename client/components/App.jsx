import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { ScheduleForm } from './ScheduleForm'
import { LogIn } from './LogIn'
import Calendar from './Calendar'
import BookedClasses from './BookedClasses'
import Navigation from './Navigation'
import ClassInfo from './ClassInfo'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/home' component={Navigation}></Route>
      <Route path='/home/schedule' component={ScheduleForm}></Route>
      <Route path='/home/bookedClasses' component={BookedClasses}></Route>
      <Route path='/home/schedule' component={Calendar}></Route>
      <Route path='/home/classInfo' component={ClassInfo}></Route>
    </Router>
  )
}

export default App
