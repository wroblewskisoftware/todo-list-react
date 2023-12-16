import { useSelector, useDispatch } from "react-redux";
import { StyledDiv, StyledButton } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <StyledDiv>
      <StyledButton onClick={() => dispatch(toggleHideDone())}>
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
