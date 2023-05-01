import styled from "styled-components";
import { IoIosClose, IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${(props) => (props.visibility ? "none" : "")};
  transition: all 150ms linear;
`;
export const MenuContainer = styled.aside`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  background-color: #b6d4bb;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 75%);
  transition: all 360ms ease-in-out;
  left: ${(props) => props.visibility};

  img {
    width: 45%;
    position: absolute;
    bottom: 0;
    left: 25%;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    font-size: 16px;
    letter-spacing: 1.95519px;
    text-transform: uppercase;
    color: #fff;
  }
  p {
    margin-top: 21px;
  }
`;
export const ExitIcon = styled(IoMdExit)`
  margin-top: 21px;
  font-size: 25px;
  margin-right: 5px;
  color: #fff;
`;
export const StyledLink = styled(Link)`
  width: 100%;
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 16px;
  color: #fff;
  border-bottom: 1px solid #fff;
  text-decoration: none;
  text-transform: uppercase;
`;
export const CloseIcon = styled(IoIosClose)`
  position: absolute;
  z-index: 9;
  right: 0;
  font-size: 2.5rem;
`;
