import ProductRow from "../../../components/CartProductRow";
import { ButtonsContainer, StyledLink } from "../style";
import { ProductsContainer, ProductsList, TotalBar } from "./style";

export default function DisplayProducts({ products }) {
  return (
    <>
      <ProductsContainer>
        <ProductsList>
          <ul>
            {products.map((p) => (
              <ProductRow key={p._id} product={p} />
            ))}
          </ul>
        </ProductsList>
      </ProductsContainer>

      <TotalBar>
        <strong>Total</strong>
        <div>R$ 50,00</div>
      </TotalBar>

      <ButtonsContainer>
        <button>
          <StyledLink to={"/finalizar-compra"}>Finalizar Pedido</StyledLink>
        </button>
        <button>
          <StyledLink to={"/"}>Continuar Comprando</StyledLink>
        </button>
      </ButtonsContainer>
    </>
  );
}
