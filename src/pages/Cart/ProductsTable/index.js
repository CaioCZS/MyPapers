import ProductRow from "../../../components/CartProductRow";
import { ButtonsContainer, StyledLink } from "../style";
import { ProductsContainer, ProductsList, TotalBar } from "./style";

export default function DisplayProducts({ products, getCartItens }) {
  function totalBalance() {
    const sum = products.reduce((acc, cu) => acc + cu.quantity * cu.price, 0);
    return sum.toFixed(2).toString().replace(".", ",");
  }
  const balance = products && totalBalance();

  return (
    <>
      <ProductsContainer>
        <ProductsList>
          <ul>
            {products.map((p) => (
              <ProductRow key={p._id} product={p} getCartItens={getCartItens} />
            ))}
          </ul>
        </ProductsList>
      </ProductsContainer>

      <TotalBar>
        <strong>Total</strong>
        <div>{`R$ ${balance}`}</div>
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
