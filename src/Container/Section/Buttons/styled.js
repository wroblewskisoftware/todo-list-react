import styled from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled.button`
  justify-self: center;
  border: none;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.bondiBlue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
