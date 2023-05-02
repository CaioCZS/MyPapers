import QuantityButton from "../QuantityButton/index"
import { CloseIcon, Container } from "./style"
import { useDeleteCartItem } from "../../services/cartApi"

export default function ProductRow({ product, getCartItens }) {
  const { productId, name, image, price, description, quantity } = product
  const deleteItem = useDeleteCartItem()

  function onClickDelete() {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja remover do carrinho o produto ${name}?`
    )
    if (confirmDelete) deleteItem(productId, getCartItens)
  }

  return (
    <Container>
      <span>
        <img src={image} alt="imagem produto" />
        <QuantityButton
          quantity={quantity}
          productId={productId}
          name={name}
          getCartItens={getCartItens}
        />
      </span>
      <div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <span>{`R$ ${price.toFixed(2).toString().replace(".", ",")}`}</span>
      </div>
      <CloseIcon onClick={onClickDelete} />
    </Container>
  )
}
