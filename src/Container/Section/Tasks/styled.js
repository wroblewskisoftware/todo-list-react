import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  color: white;
  transition: background 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #008000;

      &:hover {
        cursor: pointer;
        background-color: #009900;
      }

      &:active {
        background-color: #00b300;
        border: 2px solid #000000;
        border-radius: 3px;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: #db143c;

      &:hover {
        cursor: pointer;
        background-color: #ea1f48;
      }

      &:active {
        background-color: #ec365b;
        border: 2px solid #000000;
        border-radius: 3px;
      }
    `}
`;
