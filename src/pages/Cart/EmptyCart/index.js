import logoIcon from "../../../assets/img/logo_v2_icon.png";
import { ButtonsContainer } from "../style";
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
          <p>Continuar Comprando</p>
        </button>
      </ButtonsContainer>
    </>
  );
}
