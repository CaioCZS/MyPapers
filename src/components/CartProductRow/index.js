import { Container } from "./style";
import QuantityButton from "../QuantityButton/index";

export default function ProductRow({ product }) {
  const { userId, productId, name, image, price, description, quantity } =
    product;
  // console.log(product);
  return (
    <Container>
      <span>
        <img src={image} />
        <QuantityButton />
      </span>
      <div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <span>{`R$ ${price.toFixed(2).toString().replace(".", ",")}`}</span>
      </div>
    </Container>
  );
}
