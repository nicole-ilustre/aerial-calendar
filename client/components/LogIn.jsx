import React from 'react'

const LogIn = () => {
  return (
    <div>
      <h1>Welcome to your Aerial Calendar</h1>
      <form action="home.html" method="post">
        <div className="input">
          <label htmlfor="username">Username:</label>
          <input id="username" type="text" />
        </div>
        <div className="input">
          <label htmlfor="password">Password:</label>
          <input id="password" type="text" />
        </div>
        <div className="input">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn
