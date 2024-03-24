import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.mercury};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;
