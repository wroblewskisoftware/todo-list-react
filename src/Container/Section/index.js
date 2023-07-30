import { StyledSection, StyledHeader, StyledH2, StyledBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledHeader extraHeaderContent={extraHeaderContent}>
      <StyledH2>{title}</StyledH2>
      {extraHeaderContent}
    </StyledHeader>
    <StyledBody>{body}</StyledBody>
  </StyledSection>
);

export default Section;
