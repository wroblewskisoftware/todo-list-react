import { useSelector, useDispatch } from "react-redux";
import { StyledList, StyledItem, StyledSpan, StyledButton } from "./styled";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TasksList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
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
          <StyledSpan done={task.done}>{task.content}</StyledSpan>
          <StyledButton remove onClick={() => removeTask(task.id)}>
            🗑
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default TasksList;
