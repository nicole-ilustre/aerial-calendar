import React from 'react'
import { isAuthenticated } from 'authenticare/client'

export function ifAuthenticated ({ children }) {
  return isAuthenticated() ? children : null
}

export function ifNotAuthenticated ({ children }) {
  return !isAuthenticated() ? children : null
}
