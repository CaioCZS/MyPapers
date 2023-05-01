import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function itens() {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/`);
  return promise;
}

function item(id) {
  const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/item/${id}`);
  return promise;
}

function buy(id, token) {
  const promise = axios.post(
    `${process.env.REACT_APP_BASE_URL}/buy/${id}`,
    createConfig(token)
  );
  return promise;
}

const productApi = { itens, item, buy };

export default productApi;
