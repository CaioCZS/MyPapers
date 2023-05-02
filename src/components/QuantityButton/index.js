import { AddButton, AmountButton, SubButton } from "./style";
import { useContext, useState } from "react";
import { useUpdateCartItem } from "../../services/cartApi";

export default function QuantityButton({ quantity, productId, getCartItens }) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const updateCartItem = useUpdateCartItem();

  function adOneItem() {
    const amount = newQuantity + 1;
    if (amount >= 100) return;
    updateCartItem(productId, { quantity: amount });
    setNewQuantity(amount);
    getCartItens();
  }

  function removeOneItem() {
    const amount = newQuantity - 1;
    if (amount <= 0) return;
    updateCartItem(productId, { quantity: amount });
    setNewQuantity(amount);
    getCartItens();
  }

  return (
    <AmountButton>
      <SubButton onClick={removeOneItem} />
      <p>{newQuantity}</p>
      <AddButton onClick={adOneItem} />
    </AmountButton>
  );
}
