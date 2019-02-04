import Axios from 'axios';

export function login(data) {
  return dispatch => {
    return Axios.post('https://jsonplaceholder.typicode.com/posts', data)
  }
}