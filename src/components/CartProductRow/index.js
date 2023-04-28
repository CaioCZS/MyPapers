import { Container } from "./style";
import QuantityButton from "../QuantityButton/index";

export default function ProductRow({ product }) {
  const { image, name, price } = product;
  return (
    <Container>
      <span>
        <img src={image} />
        <QuantityButton />
      </span>
      <div>
        <p>{name}</p>
        <p>{`R$ ${price}`}</p>
      </div>
    </Container>
  );
}
