import axios from "axios";

export function userSignupRequest (userData) {
  return dispatch => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', userData)
  }
}

export function isUserExists (identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`)
  }
}