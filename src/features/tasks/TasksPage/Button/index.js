import { useSelector, useDispatch } from "react-redux";
import { selectLoadingState, fetchExampleTasks } from "../../tasksSlice";
import { StyledButton } from "../../StyledButton";

const Button = () => {
  const isLoading = useSelector(selectLoadingState);
  const dispatch = useDispatch();

  return (
    <StyledButton
      onClick={() => dispatch(fetchExampleTasks())}
      disabled={isLoading}
    >
      {isLoading === false ? "Pobierz przykładowe zadania" : "Ładowanie..."}
    </StyledButton>
  );
};

export default Button;
