import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import getClasses from '../apiClient'

import LogIn from './LogIn'
import Schedule from './Schedule'
import Calendar from './Calendar'

const App = () => {
 useEffect(() => {
    return getClasses()
    .then(classes => {
      setClasses(classes)
    })
    .catch(err => {
      setErrorMessage(err.message)
  }, [])
}

  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route path='/schedule/schedule' component={Schedule}></Route>
      <Route path='/schedule' component={Calendar}></Route>
    </Router>
  )
}

export default App
