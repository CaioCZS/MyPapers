import Header from "../../components/Header";
import {
  ContainerBody,
  ContainerAd,
  ContainerProduct,
  Product,
} from "./style";
import Search from "../../components/Search/index";

export default function HomePage() {
  return (
    <>
      <Header />
      <ContainerBody>
        <Search />
        <ContainerAd>
          <img alt="ad" src="" />
        </ContainerAd>
        <ContainerProduct>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
          <Product>
            <img alt="product" src=""></img>
            <h3>Name preço</h3>
          </Product>
        </ContainerProduct>
      </ContainerBody>
    </>
  );
}
