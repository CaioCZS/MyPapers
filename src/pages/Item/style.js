import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  background-color: #f1e7c5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerItem = styled.div`
  width: 100vw;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 120px;
  }
`;

export const ContainerProduct = styled.div`
  margin-top: 21px;
  margin-bottom: 21px;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #B6D4BB;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  .title {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-right: 21px;
    margin-left: 21px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #01172f;
  }
  .shipping {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    margin-top: -8px;
    margin-left: 25px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: #01172f;
  }
  .buy {
    display: flex;
    justify-content: end;
    margin-right: 21px;
  }
  button {
    width: 80px;
    height: 30px;
    background: #f1e7c5;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: #01172f;
  }
`;

export const ShippingIcon = styled(FaShippingFast)`
  margin-right: 4px;
  font-size: 12px;
`;

export const ContainerDescription = styled.div`
  width: 220px;
  height: 80px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin-bottom: 8px;
    text-align: start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #01172f;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #01172f;
  }
`;
