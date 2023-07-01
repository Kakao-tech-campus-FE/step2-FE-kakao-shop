import { styled } from "styled-components";

export const Location = styled.div`
  margin: 10px;
  span {
    cursor: pointer;
    color: #aaa;
    font-size: 15px;
    font-weight: 800;
    margin-left: 5px;
  }

  span:last-child {
    color: black;
  }

  span:not(:first-child)::before {
    content: "> ";
  }
`;

export const Category = styled.div`
  background-color: rgb(249, 249, 249);
  border-top: 1px solid rgb(242, 242, 242);
  margin: 10px;
  padding: 20px 20px 0 20px;
  display: flex;
  width: 780px;
  flex-wrap: wrap;
  font-size: 15px;
  color: rgb(153, 153, 153);
  p {
    cursor: pointer;
    font-weight: 600;
    height: 40px;
    width: 50%;
  }
`;
