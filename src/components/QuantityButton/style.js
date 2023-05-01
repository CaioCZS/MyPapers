import styled from "styled-components";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const AmountButton = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  box-sizing: border-box;
  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 0.977597px solid rgba(1, 23, 47, 0.2);
    box-sizing: border-box;
    font-size: 14px;
    :hover {
      cursor: default;
    }
  }
`;
export const AddButton = styled(IoIosAdd)`
  width: 100%;
  height: 100%;
  background-color: #b6d4bb;
  border: 0.977597px solid #01172f;
  border-radius: 0px 10px 10px 0px;
  opacity: 20%;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
  }
`;
export const SubButton = styled(IoIosRemove)`
  width: 100%;
  height: 100%;
  background-color: #b6d4bb;
  border: 0.977597px solid #01172f;
  border-radius: 10px 0px 0px 10px;
  opacity: 20%;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
  }
`;
