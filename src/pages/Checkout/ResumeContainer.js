import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ResumeContainer({ products, finalPrice }) {
  return (
    <OrderResume>
      <h1>Resumo do pedido</h1>
      <OrderItems>
        {products.map((p) => {
          return (
            <li key={p._id}>
              <p>{p.name}</p>
              <p>
                R$ {p.price.toFixed(2)} quantidade:{p.quantity}
              </p>
            </li>
          )
        })}
      </OrderItems>
      <FinalValue>
        <p>Total</p>
        <p>R$ {finalPrice.toFixed(2)}</p>
      </FinalValue>
    </OrderResume>
  )
}

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
  padding-right: 10px;
  font-size: 10px;
  display: flex;
  max-height: 27vh;
  flex-direction: column;
  margin-top: 15px;
  overflow-y: auto;
  gap: 10px;
  li {
    display: flex;
    justify-content: space-between;
    color: #01172f;
  }
`
const FinalValue = styled.div`
  padding-right: 10px;
  padding-left: 25px;
  color: #eb445b;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
