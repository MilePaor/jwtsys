import axios from 'axios'

export function createEvent(event) {
  return dispatch => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', event)
  }
}
 
