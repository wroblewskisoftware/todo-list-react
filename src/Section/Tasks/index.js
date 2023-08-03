import { StyledList, StyledItem, StyledSpan, StyledButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default Tasks;
