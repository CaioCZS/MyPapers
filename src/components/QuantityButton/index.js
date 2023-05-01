import { AddButton, AmountButton, SubButton } from "./style";
import { useState } from "react";
import { useUpdateCartItem } from "../../services/cartApi";

export default function QuantityButton({ quantity, productId }) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const updateCartItem = useUpdateCartItem();

  function adOneItem() {
    const amount = newQuantity + 1;
    if (amount >= 100) return;
    updateCartItem(productId, { quantity: amount });
    setNewQuantity(amount);
  }

  function removeOneItem() {
    const amount = newQuantity - 1;
    if (amount <= 0) return;
    updateCartItem(productId, { quantity: amount });
    setNewQuantity(amount);
  }

  return (
    <AmountButton>
      <SubButton onClick={removeOneItem} />
      <p>{newQuantity}</p>
      <AddButton onClick={adOneItem} />
    </AmountButton>
  );
}
