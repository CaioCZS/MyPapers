import axios from "axios";
import DisplayProducts from "./ProductsTable";
import EmptyCart from "./EmptyCart";
import Header from "../../components/Header/index";
import SideBar from "../../components/SideBar";
import UserContext from "../../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import { MainContentContainer, ScreenContainer } from "./style";

export default function Cart() {
  const { user } = useContext(UserContext);
  const [hidden, setHidden] = useState(true);
  const [products, setProducts] = useState(undefined);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/cart`, config)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <ScreenContainer>
      {!products && "carregando..."}
      <Header hidden={hidden} setHidden={setHidden} />
      <SideBar hidden={hidden} setHidden={setHidden} />
      <MainContentContainer>
        <h2>Carrinho de Compras</h2>
        {products && products.length === 0 && <EmptyCart />}
        {products && products.length > 0 && <DisplayProducts products={products} />}
      </MainContentContainer>
    </ScreenContainer>
  );
}
