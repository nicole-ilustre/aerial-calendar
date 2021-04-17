import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { LogIn } from './LogIn'
import Schedule from './Schedule'
import Calendar from './Calendar'
import UserWelcome from './UserWelcome'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/schedule/booking' component={Schedule}></Route>
      <Route path='/schedule' component={Calendar}></Route>
      <Route path='/schedule' component={UserWelcome}></Route>
    </Router>
  )
}

export default App
