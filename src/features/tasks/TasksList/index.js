import { useSelector } from "react-redux";
import { StyledList, StyledItem, StyledSpan, StyledButton } from "./styled";
import { selectTasks } from "../tasksSlice";

const TasksList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <StyledList>
      {tasks.map((task) => (
        <StyledItem key={task.id} hidden={task.done && hideDone}>
          <StyledButton toggleDone onClick={() => toggleTaskDone(task.id)}>
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
