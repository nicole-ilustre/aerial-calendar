import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { register, isAuthenticated } from 'authenticare/client'

let userInfo = {}

const LogIn = (props) => {
  const [loginData, setLoginData] = useState({ name: '', password: '' })

  function handleChange (e) {
    const newLoginData = {
      [e.target.name]: e.target.value
    }
    setLoginData(newLoginData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    userInfo = loginData
    const { name, password } = loginData
    register({ name, password }, '/v1/classes')
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/home/schedule/form')
        }
      })
      .catch(err => {
        console.log(err)
      }
      )
  }
  return (
    <div>
      <img src='./images/aerial-logo.png' />
      <h1>Welcome to your Aerial Calendar</h1>
      <form>
        <div className="input">
          <label htmlFor="username">Username:</label>
          <input id="username" name="name" value={loginData.name} onChange={handleChange} type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" value={loginData.password} type="text" />
        </div>
        <div className="input">
          <Button.Group>
            <Button onClick={handleSubmit}>Sign Up</Button>
            <Button.Or />
            <Button positive>Log In</Button>
          </Button.Group>
        </div>
      </form>
    </div>
  )
}

export { LogIn, userInfo }
