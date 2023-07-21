import { Unit, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Unit>
    <Header extraHeaderContent={extraHeaderContent}>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </Unit>
);

export default Section;
