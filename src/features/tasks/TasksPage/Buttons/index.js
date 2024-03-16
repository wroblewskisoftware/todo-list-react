import { useSelector, useDispatch } from "react-redux";
import { StyledDiv } from "./styled";
import { StyledButton } from "../../StyledButton";
import { selectTasksState, toggleHideDone, setAllDone } from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
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
        onClick={() => dispatch(setAllDone())}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledDiv>
  );
};

export default Buttons;
