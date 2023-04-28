import styled from "styled-components";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const AmountButton = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #f1e7c5;
    border: 0.977597px solid rgba(1, 23, 47, 0.2);
    box-sizing: border-box;
    font-size: 11px;
  }
`;

export const AddButton = styled(IoIosAdd)`
  width: 100%;
  height: 100%;
  background-color: #f1dab8;
  border: 0.977597px solid #01172f;
  border-radius: 0px 5px 5px 0px;
  opacity: 20%;
  box-sizing: border-box;
`;

export const SubButton = styled(IoIosRemove)`
  width: 100%;
  height: 100%;
  background-color: #f1dab8;
  border: 0.977597px solid #01172f;
  border-radius: 5px 0px 0px 5px;
  opacity: 20%;
  box-sizing: border-box;
`;
