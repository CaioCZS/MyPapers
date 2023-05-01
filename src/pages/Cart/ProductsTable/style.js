import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 90vw;
  height: 100%;
  max-height: 50vh;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border: 1px solid #f0cdab;
`;

export const ProductsList = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    overflow-y: auto;
    scrollbar-width: none;
    padding: 12px;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }
`;

export const TotalBar = styled.section`
  min-height: 10%;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eb445b;
  background-color: #f0cdab;

  strong {
    font-weight: 700;
    text-transform: uppercase;
  }
`;
