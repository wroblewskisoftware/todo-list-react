import { StyledList, StyledItem, StyledNavLink } from "../styled";
import { toTasks, toAuthor } from "../routes";

const Navigation = () => (
  <StyledList>
    <StyledItem>
      <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
    </StyledItem>
    <StyledItem>
      <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
    </StyledItem>
  </StyledList>
);

export default Navigation;
