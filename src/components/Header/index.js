import { ContainerHeader, MenuIcon, CartIcon } from "./style";
import logo from "../../assets/img/logo_v2_white.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function Page(page) {
    if (page === "cart") {
      navigate("/carrinho");
    } else if (page === "logo") {
      navigate("/");
    }
  }

  return (
    <ContainerHeader>
      <MenuIcon />
      <img alt="logo" src={logo} onClick={() => Page("logo")}  />
      <CartIcon onClick={() => Page('cart')} />
    </ContainerHeader>
  );
}
