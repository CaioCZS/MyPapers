import Header from "../../components/Header";
import { ContainerBody, ContainerAd, ContainerProduct, Product } from "./style";
import Search from "../../components/Search/index";
import { useNavigate } from "react-router-dom";
import productApi from "../../services/productApi";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [itens, setItens] = useState();
  const navigate = useNavigate();

  useEffect(getItems, []);

  function getItems() {
    productApi
      .itens()
      .then((res) => setItens(res.data))
      .catch((err) => alert(err.response.data));
  }

  function Page(page) {
    if (page === "product") {
      navigate("/item");
    } else if (page === "ad") {
      navigate("/");
    }
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <Search />
        <ContainerAd>
          <img alt="ad" src="" onClick={() => Page("ad")} />
        </ContainerAd>
        <ContainerProduct>
          {itens &&
            itens.map((p) => (
              <Product key={p._id} onClick={() => Page("product")}>
                <img alt="product" src={p.image}></img>
                <h3>Name preço</h3>
              </Product>
            ))}
        </ContainerProduct>
      </ContainerBody>
    </>
  );
}
