import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../../queryParameters";
import { toTask } from "../../../../routes";
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
  const query = useQueryParameter(searchQueryParamName);

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
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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
