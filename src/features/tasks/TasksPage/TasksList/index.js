import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledList,
  StyledItem,
  StyledSpan,
  StyledButton,
  StyledLink,
} from "./styled";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <StyledList>
      {tasks.map((task) => (
        <StyledItem key={task.id} hidden={task.done && hideDone}>
          <StyledButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </StyledButton>
          <StyledSpan done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </StyledSpan>
          <StyledButton remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default TasksList;
