import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import LogIn from './LogIn'
import Caption from './Caption'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LogIn}></Route>
      <Route exact path='/caption' component={Caption}></Route>
    </Router>
  )
}

export default App
