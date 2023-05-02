import axios from "axios"

function itens() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/`)
  return promise
}

function item(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/item/${id}`)
  return promise
}

function buy(id, userId) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/buy/${id}`, {
    userId,
  })
  return promise
}

const productApi = { itens, item, buy }

export default productApi
