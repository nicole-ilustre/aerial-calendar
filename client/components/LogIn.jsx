import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { register, signIn, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

let userInfo = {}

const LogIn = (props) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' })

  function handleChange (e) {
    const newLoginData = {
      ...loginData,
      [e.target.name]: e.target.value
    }
    setLoginData(newLoginData)
  }

  function handleRegister (e) {
    e.preventDefault()
    userInfo = loginData
    const { username, password } = loginData
    register({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/home/schedule/form')
        }
        return null
      })
      .catch(err => {
        console.log(err)
      }
      )
  }

  function handleLogIn (e) {
    e.preventDefault()
    userInfo = loginData
    const { username, password } = loginData
    signIn({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/home/schedule/form')
        }
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <img src='./images/aerial-logo.png' />
      <h1>Welcome to your Aerial Calendar</h1>
      <form>
        <div className="input">
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" value={loginData.username} onChange={handleChange} type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" value={loginData.password} onChange={handleChange} type="text" />
        </div>
        <div className="input">
          <Button.Group>
            <Button onClick={handleRegister}>Sign Up</Button>
            <Button.Or />
            <Button positive onClick={handleLogIn}>Log In</Button>
          </Button.Group>
        </div>
      </form>
    </div>
  )
}

export { LogIn, userInfo }
