import { ContainerHeader, MenuIcon, CartIcon } from "./style";
import logo from "../../assets/img/logo_v2_white.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function Page(page) {
    navigate(page);
  }

  return (
    <ContainerHeader>
      <MenuIcon />
      <img alt="logo" src={logo} onClick={() => Page("/")} />
      <CartIcon onClick={() => Page("/carrinho")} />
    </ContainerHeader>
  );
}
