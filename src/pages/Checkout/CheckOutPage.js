import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ResumeContainer from "./ResumeContainer.js"
import { useState } from "react"
export default function CheckOutPage() {
  const [form, setForm] = useState({ name: "", cardNumber: "", address: "" })
  const navigate = useNavigate()
  function handleForm(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate("/")
  }

  return (
    <Screen>
      <CheckoutContainer>
        <Header>Checkout</Header>
        <StyledForm onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            type="text"
            name="name"
            value={form.name}
            onChange={handleForm}
            required
          />
          <input
            placeholder="Endereço da entrega"
            name="address"
            type="text"
            value={form.address}
            onChange={handleForm}
            required
          />
          <input
            placeholder="Número do cartão"
            name="cardNumber"
            type="number"
            value={form.cardNumber}
            onChange={handleForm}
            required
          />
          <ResumeContainer />
          <Buttons>
            <StyledLink to="/carrinho">voltar</StyledLink>
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
  border: thin dashed #01172f33;
  border-radius: 20px;
  width: 90vw;
  min-height: 95vh;
  position: relative;
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
const Buttons = styled.div`
  width: 93%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 10px;
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
