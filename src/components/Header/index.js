import { ContainerHeader, MenuIcon, CartIcon } from "./style";
import logo from "../../assets/img/logo_v2_white.png"

export default function Header() {
  return (
    <ContainerHeader>
      <MenuIcon />
      <img alt="logo" src= {logo} />
      <CartIcon />
    </ContainerHeader>
  );
}
