import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LogIn from './LogIn'
import ClassSchedule from './ClassSchedule'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route exact path='/schedule' component={ClassSchedule}></Route>
    </Router>
  )
}

export default App
