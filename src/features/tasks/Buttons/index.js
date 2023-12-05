import { StyledDiv, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <StyledDiv>
      <StyledButton onClick={toggleHideDone}>
        {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
      </StyledButton>
      <StyledButton
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledDiv>
  );
};

export default Buttons;
