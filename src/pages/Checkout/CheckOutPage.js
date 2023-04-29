import { Link } from "react-router-dom"
import styled from "styled-components"

export default function CheckOutPage() {
  return (
    <Screen>
      <CheckoutContainer>
        <Header>Checkout</Header>
        <StyledForm>
          <input placeholder="Nome" />
          <input placeholder="Endereço da entrega" />
          <input placeholder="Número do cartão" />
          <OrderResume>
            <h1>Resumo do pedido</h1>
            <OrderItems>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
              <li>
                <p>Nome produto</p>
                <p>R$ valor</p>
              </li>
            </OrderItems>
            <FinalValue>
              <p>Total</p>
              <p>R$ valor</p>
            </FinalValue>
          </OrderResume>
          <Buttons>
            <StyledLink>voltar</StyledLink>
            <button type="submit">Finalizar compra</button>
          </Buttons>
        </StyledForm>
      </CheckoutContainer>
    </Screen>
  )
}

const Screen = styled.div`
  background-color: #f1e7c5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CheckoutContainer = styled.div`
  margin-top: 50px;
  border: thin dashed #01172f33;
  border-radius: 20px;
  width: 90vw;
  height: 90vh;
`
const Header = styled.header`
  height: 13vh;
  font-family: "inter";
  color: #eb445b;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 24px;
  text-transform: uppercase;
`
const StyledForm = styled.form`
  margin-top: 10px;
  height: 72vh;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  input {
    background-color: #f1e7c5;
    border: none;
    border-bottom: thin solid #01172f;
    width: 95%;
    height: 50px;
    padding-top: 20px;
    padding-left: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border-bottom: 1px solid #000000;
    outline: 0;
  }
`

const OrderResume = styled.div`
  background-color: #f0cdab;
  width: 93%;
  min-height: 40vh;
  margin: 0 auto;
  padding: 15px;
  h1 {
    font-size: 10px;
    font-weight: 700;
  }
  letter-spacing: 2px;
  font-family: "inter";
  text-transform: uppercase;
  border-radius: 15px;
  position: relative;
`
const OrderItems = styled.ul`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
  li {
    display: flex;
    justify-content: space-between;
    color: #01172f;
  }
`
const FinalValue = styled.div`
  color: #eb445b;
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const Buttons = styled.div`
  width: 93%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  button {
    background-color: #eb445b80;
    width: 125px;
    height: 30px;
    border-radius: 5px;
    border: none;
    color: #f1e7c5;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 8px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 8px;
  font-family: "inter";
  font-weight: 700;
  color: #eb445b;
  text-transform: uppercase;
  letter-spacing: 2px;
`
