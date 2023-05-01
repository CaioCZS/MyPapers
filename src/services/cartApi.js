import axios from "axios";
import UserContext from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";

export function useGetCartItens() {
  const [products, setProducts] = useState(undefined);
  const { user } = useContext(UserContext);

  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  function getCartItens() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/cart`, config)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  useEffect(() => {
    getCartItens();
  }, []);

  return { products, getCartItens };
}

export function useDeleteCartItem() {
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  return (id, getCartItens) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/cart/${id}`, config)
      .then((res) => getCartItens())
      .catch((err) => console.log(err.response.data));
  };
}

export function useUpdateCartItem() {
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  return (id, body) => {
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/cart/${id}`, body, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };
}
