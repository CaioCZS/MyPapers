import logo from "../../assets/img/logo_dark.png";
import {
  Background,
  CloseIcon,
  ContentContainer,
  ExitIcon,
  MenuContainer,
  StyledLink,
} from "./style";

export default function SideBar({ hidden, setHidden }) {
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
                onClick={() => alert("É nessa hora que você é deslogado")}
              />
            </span>
            Olá, Fulana
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
