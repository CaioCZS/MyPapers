import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import {
  ContainerBody,
  ContainerItem,
  ContainerProduct,
  ShippingIcon,
  ContainerDescription,
} from "./style";
import productApi from "../../services/productApi";
import { useParams } from "react-router";

export default function Item() {
  const { id } = useParams();
  const [item, setItem] = useState();

  function getItem() {
    productApi
      .item(id)
      .then((res) => setItem(res.data))
      .catch((err) => alert(err.response.data));
  }

  useEffect(getItem, []);

  return (
    <>
      <Header />
      <ContainerBody>
        <Search />
        <ContainerItem>
          <img alt="product" src={item.price} />
        </ContainerItem>
        <ContainerProduct>
          <div className="title">
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
          </div>
          <div className="shipping">
            <ShippingIcon />
            <h3>FRETE GRÁTIS</h3>
          </div>
          <div className="buy">
            <button>COMPRAR</button>
          </div>
        </ContainerProduct>
        <ContainerDescription>
          <h2>DESCRIÇÃO</h2>
          <p>{item.description}</p>
        </ContainerDescription>
      </ContainerBody>
    </>
  );
}
