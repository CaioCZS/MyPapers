import axios from "axios"

export default function checkout(body, config) {
  const promise = axios.post(
    `${process.env.REACT_APP_BASE_URL}/checkout`,
    body,
    config
  )
  return promise
}
