import request from 'superagent'

const serverURL = 'http://localhost:3000/v1/classes'

export function getClasses() {
  return request.get(`${serverURL}`)
    .then(res => res.body)
}
