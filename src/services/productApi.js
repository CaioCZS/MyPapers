import axios from "axios"

function itens() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/`)
  return promise
}

function item(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/item/${id}`)
  return promise
}

function buy(id) {
  const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/buy/${id}`)
  return promise
}

const productApi = { itens, item, buy }

export default productApi
