import styled from "styled-components";

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  background-color: #f1e7c5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAd = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 90;
    height: 90;
  }
`;

export const ContainerProduct = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 21px;
`;

export const Product = styled.div`
  width: 90px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #b6d4bb;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    margin-top: 15px;
    width: 60px;
    height: 60px;
  }
  h3 {
    margin-bottom: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;
    color: #01172f;
  }
`;
