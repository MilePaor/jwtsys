import Axios from 'axios';

export function login(data) {
  return dispatch => {
    return Axios.post('https://e-wallet.rs/api/admin/auth/login', data)
  }
}