import Header from "../../components/Header";
import { ContainerBody, ContainerAd, ContainerProduct, Product } from "./style";
import Search from "../../components/Search/index";
import { useNavigate } from "react-router-dom";
import productApi from "../../services/productApi";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";

export default function HomePage() {
  const [itens, setItens] = useState();
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  function getItems() {
    productApi
      .itens()
      .then((res) => setItens(res.data))
      .catch((err) => alert(err.response.data));
  }

  useEffect(getItems, []);

  function Page(page) {
    navigate(page);
  }

  return (
    <>
      <Header hidden={hidden} setHidden={setHidden} />
      <SideBar hidden={hidden} setHidden={setHidden} />
      <ContainerBody>
        <Search />
        <ContainerAd>
          <img alt="ad" src="" onClick={() => Page("/")} />
        </ContainerAd>
        <ContainerProduct>
          {itens &&
            itens.map((p) => (
              <Product key={p._id} onClick={() => Page(`/item/${p._id}`)}>
                <img alt="product" src={p.image}></img>
                <h3>Name preço</h3>
              </Product>
            ))}
        </ContainerProduct>
      </ContainerBody>
    </>
  );
}
