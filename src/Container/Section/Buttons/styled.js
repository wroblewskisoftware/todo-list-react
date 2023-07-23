import styled from "styled-components";

export const ButtonPanel = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  justify-self: center;
  border: none;
  font-size: 18px;
  background-color: #ffffff;
  color: #008080;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: #00cccc;
  }

  &:disabled {
    color: #bebebe;
  }
`;
