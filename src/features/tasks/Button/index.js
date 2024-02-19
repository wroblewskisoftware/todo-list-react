import { useDispatch } from "react-redux";
import { StyledButton } from "../StyledButton";
import { fetchExampleTasks } from "../tasksSlice";

const Button = () => {
  const dispatch = useDispatch();

  return (
    <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </StyledButton>
  );
};

export default Button;
