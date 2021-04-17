import React, { useState } from 'react'

let userInfo = {}

const LogIn = (props) => {
  const [loginData, setLoginData] = useState({ username: '' })
  function handleChange (e) {
    const newLoginData = {
      [e.target.name]: e.target.value
    }
    setLoginData(newLoginData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    userInfo = loginData
    props.history.push('/schedule/form')
    return null
  }
  return (
    <div>
      <h1>Welcome to your Aerial Calendar</h1>
      <form>
        <div className="input">
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" value={loginData.username} onChange={handleChange} type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input id="password" type="text" />
        </div>
        <div className="input">
          <button onClick={handleSubmit}>Sign Up</button>
          <button onClick={handleSubmit}>Log In</button>
        </div>
      </form>
    </div>
  )
}

export { LogIn, userInfo }
