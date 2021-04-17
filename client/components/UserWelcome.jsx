import React from 'react'
import { userInfo } from './LogIn'

const UserWelcome = () => {
  return (
    <div>
           Welcome, {userInfo.username}
    </div>
  )
}

export default UserWelcome
