import axios from "axios"

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

function login(body) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/signIn`, body)
  return promise
}

function signUp(body) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/signUp`, body)
  return promise
}

function logOut(token) {
  const promise = axios.delete(
    `${process.env.REACT_APP_BASE_URL}/logout`,
    createConfig(token)
  )
  return promise
}

const authApi = { login, signUp, logOut }

export default authApi
