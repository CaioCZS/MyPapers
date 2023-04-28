import Header from "../../components/Header";
import { ContainerBody, ContainerAd, ContainerProduct, Product } from "./style";
import Search from "../../components/Search/index";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

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
          <Product onClick={() => Page("product")}>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
        </ContainerProduct>
      </ContainerBody>
    </>
  );
}
