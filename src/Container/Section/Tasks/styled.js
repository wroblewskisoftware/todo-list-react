import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const StyledSpan = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  color: white;
  transition: background 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.laurel};

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.brightLaurel};
      }

      &:active {
        background-color: ${({ theme }) => theme.color.green};
        border: 2px solid ${({ theme }) => theme.color.black};
        border-radius: 3px;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.amaranth};
      }

      &:active {
        background-color: ${({ theme }) => theme.color.brightAmaranth};
        border: 2px solid ${({ theme }) => theme.color.black};
        border-radius: 3px;
      }
    `}
`;
