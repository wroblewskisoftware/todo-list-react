import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: #ffffff;
  box-shadow: 0 0 5px #bababa;
`;

export const StyledHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;

  ${({ extraHeaderContent }) =>
    extraHeaderContent &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 20px;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const StyledBody = styled.div`
  padding: 20px;
`;
