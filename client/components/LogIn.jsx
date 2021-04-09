import React from 'react'

const LogIn = () => {
  return (
    <div>
      <h1>Welcome to Caption Contest</h1>
      <form action="home.html" method="post">
        <div className="input">
          <label htmlFfor="username">Username:</label>
          <input id="username" type="text" />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
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
