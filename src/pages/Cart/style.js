import { Link } from "react-router-dom";
import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding-top: 80px; */
  box-sizing: border-box;
  background-color: #f1e7c5;
  font-family: "Inter", sans-serif;
`;
export const MainContentContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h2 {
    /* height: 25vh; */
    /* max-height: 25vw; */
    width: 100%;
    align-items: center;
    display: flex;

    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.055em;
    font-weight: 200;
    color: #b63f4d;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  }
`;
export const StyledLink = styled(Link)`
  margin-left: 16px;
  font-size: 11px;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: #f1e7c5;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 15px;

  button {
    width: 70%;
    max-width: 500px;
    height: 40px;
    display: flex;
    align-items: center;

    border: none;
    border-radius: 5px;
    background-color: #ee8983;

    color: #f1e7c5;
    font-weight: 800;
    line-height: 12px;
    letter-spacing: 1.95519px;
    text-transform: uppercase;
  }
`;
