import styled from "styled-components";

export const Sheet = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #e6e6e6;

  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #008080;
  color: #ffffff;
  border: 2px solid #008080;
  transition: background 0.3s, transform 0.3s;

  @media (max-width: 767px) {
    font-size: 17px;
  }

  &:hover {
    cursor: pointer;
    background-color: #009999;
    border: 2px solid #009999;
    transform: scale(1.1);

    @media (max-width: 767px) {
      transform: none;
    }
  }

  &:active {
    background-color: #00b3b3;
    border: 2px solid #000000;
    border-radius: 3px;
  }
`;
