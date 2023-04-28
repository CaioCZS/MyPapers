import Header from "../../components/Header";
import Search from "../../components/Search";
import {
  ContainerBody,
  ContainerItem,
  ContainerProduct,
  ShippingIcon,
  ContainerDescription,
} from "./style";

export default function Item() {
  return (
    <>
      <Header />
      <ContainerBody>
        <Search />
        <ContainerItem>
          <img alt="product" src="" />
        </ContainerItem>
        <ContainerProduct>
          <div className="title">
            <h2>NOME DO PRODUTO</h2>
            <h2>PREÇO</h2>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </ContainerDescription>
      </ContainerBody>
    </>
  );
}
