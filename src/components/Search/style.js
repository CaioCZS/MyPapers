import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const ContainerSearch = styled.div`
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
