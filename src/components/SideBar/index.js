import logo from "../../assets/img/logo_dark.png";
import authApi from "../../services/authApi";
import {
  Background,
  CloseIcon,
  ContentContainer,
  ExitIcon,
  MenuContainer,
  StyledLink,
} from "./style";
import { useContext } from "react";
import UserContext from "../../Context/UserContext.js";
import { useNavigate } from "react-router-dom";

export default function SideBar({ hidden, setHidden }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function logOut() {
    const confirmed = window.confirm("Sair?");
    if (confirmed) {
      authApi
        .logOut(user.token)
        .then(() => {
          navigate("/");
          localStorage.removeItem("user");
        })
        .catch((err) => alert(err.response.data));
    }
  }

  return (
    <>
      <Background
        visibility={hidden ? "none" : ""}
        onClick={() => (hidden ? "" : setHidden(!hidden))}
      >
        <CloseIcon />
      </Background>

      <MenuContainer visibility={hidden ? "-280px" : ""}>
        <ContentContainer>
          <div>
            <span>
              <ExitIcon
                onClick={
                  user.userName
                    ? () => logOut()
                    : () => alert(`Você não está logado`)
                }
              />
            </span>
            {user.userName ? `Olá, ${user.userName}` : "Olá, faça seu login"}
          </div>
          <StyledLink>Categoria 1</StyledLink>
          <StyledLink>Categoria 2</StyledLink>
          <StyledLink>Categoria 3</StyledLink>
        </ContentContainer>

        <img alt="logo" src={logo} />
      </MenuContainer>
    </>
  );
}
