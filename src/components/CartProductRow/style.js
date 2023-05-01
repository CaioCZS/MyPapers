import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1e7c5;

  img {
    max-width: 7em;
    margin-right: 10px;
    /* border: 1px solid #f1e7c5;
    border-radius: 2px; */
    /* box-shadow: 0 0 7px 0 rgb(0 0 0 / 60%); */
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0;

    p {
      margin-bottom: 5px;
      font-size: 16px;
    }

    span {
      align-self: flex-end;
    }
  }
`;
