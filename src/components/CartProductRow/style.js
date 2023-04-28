import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1e7c5;

  img {
    max-height: 7em;
    margin-right: 10px;
    border: 5px solid #f1e7c5;
    border-radius: 2px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0;
  }
`;
