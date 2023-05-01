import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1e7c5;
  color: #01172f;

  img {
    max-width: 6em;
    margin-right: 10px;
    /* border: 1px solid #f1e7c5;
    border-radius: 2px; */
    /* box-shadow: 0 0 7px 0 rgb(0 0 0 / 60%); */
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0;

    p {
      margin-bottom: 5px;
      font-size: 1rem;
    }

    span {
      align-self: flex-end;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
export const CloseIcon = styled(IoMdClose)`
  font-size: 10vw;
  max-block-size: 26px;
  color: #913437;
`;
