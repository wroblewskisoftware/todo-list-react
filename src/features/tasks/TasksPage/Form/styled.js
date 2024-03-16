import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.mercury};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.teal};
  transition: background 0.3s, transform 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.persianGreen};
    border: 2px solid ${({ theme }) => theme.color.persianGreen};
    transform: scale(1.1);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      transform: none;
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.bondiBlue};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 3px;
  }
`;
