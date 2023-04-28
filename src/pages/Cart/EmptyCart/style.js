import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 100%;
  max-height: 50vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f0cdab;

  p {
    color: #ffffff;
    line-height: 12px;
    font-size: 12px;
    letter-spacing: 0.055em;
    font-weight: 400;
    margin-top: 10px;
  }

  img {
    width: 20vw;
    max-width: 80px;
    opacity: 20%;
  }
`;
