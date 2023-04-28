import { AddButton, AmountButton, SubButton } from "./style";

export default function QuantityButton() {
  return (
    <AmountButton>
      <SubButton>-</SubButton>
      <div>1</div>
      <AddButton>+</AddButton>
    </AmountButton>
  );
}
