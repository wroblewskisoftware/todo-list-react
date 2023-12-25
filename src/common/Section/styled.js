import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.silver};
`;

export const StyledHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};

  ${({ extraHeaderContent }) =>
    extraHeaderContent &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const StyledBody = styled.div`
  padding: 20px;
`;
