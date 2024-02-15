import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
