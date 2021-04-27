import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const serverURL = 'http://localhost:3000/v1/classes'

export function getClasses() {
  return request.get(`${serverURL}`)
  .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
}
