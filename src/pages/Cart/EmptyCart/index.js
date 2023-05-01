import logoIcon from "../../../assets/img/logo_v2_icon.png";
import { ButtonsContainer, StyledLink } from "../style";
import { Container } from "./style";

export default function EmptyCart() {
  return (
    <>
      <Container>
        <img src={logoIcon} />
        <p>{"uhm...tão vazio :)"}</p>
      </Container>
      <ButtonsContainer>
        <button>
          <StyledLink to={"/"}>Continuar Comprando</StyledLink>
        </button>
      </ButtonsContainer>
    </>
  );
}
