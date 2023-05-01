import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #b6d4bb;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  img {
    width: 60px;
  }
`;
export const MenuIcon = styled(IoMenuOutline)`
  font-size: 40px;
  margin-left: 21px;
  color: #f1e7c5;
`;
export const CartIcon = styled(HiOutlineShoppingCart)`
  font-size: 30px;
  margin-right: 21px;
  color: #f1e7c5;
`;
