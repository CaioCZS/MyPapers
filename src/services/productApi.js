import axios from "axios";

function itens() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/`);
  return promise;
}

const productApi = { itens };

export default productApi;
