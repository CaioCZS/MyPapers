import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 80px;
  background-color: #f1e7c5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.div`
  margin-top: 21px;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #01172f;
  border-radius: 489px;
  input {
    border: transparent;
    background-color: transparent;
    margin-left: 21px;
    color: #01172f;
  }
`;

export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 25px;
  margin-right: 21px;
  color: #01172f;
`;

export const ContainerAd = styled.div`
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0cdab;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    size: 90px;
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
