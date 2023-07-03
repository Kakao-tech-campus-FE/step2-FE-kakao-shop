import { styled } from "styled-components";

export const Location = styled.div`
  margin: 10px;

  span {
    margin-left: 5px;
    font-size: 15px;
    font-weight: 800;
    color: #aaa;
    cursor: pointer;
  }

  span:last-child {
    color: black;
  }

  span:not(:first-child)::before {
    content: "> ";
  }
`;

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 780px;
  margin: 10px;
  padding: 20px 20px 0 20px;
  border-top: 1px solid rgb(242, 242, 242);
  background-color: rgb(249, 249, 249);
  font-size: 15px;
  color: rgb(153, 153, 153);
  p {
    width: 50%;
    height: 40px;
    font-weight: 600;
    cursor: pointer;
  }
`;
