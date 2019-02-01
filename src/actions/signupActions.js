import Axios from "axios";

export function userSignupRequest (userData) {
  return dispatch => {
    return Axios.post('https://jsonplaceholder.typicode.com/posts', userData)
  }
}
export function isUserExists (identifier) {
  return dispatch => {
    return Axios.get(`/api/users/${identifier}`)
  }
}