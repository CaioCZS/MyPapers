import axios from "axios"

function login(body) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/signIn`, body)
  return promise
}

function signUp(body) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/signUp`, body)
  return promise
}

const authApi = { login, signUp }

export default authApi
