import { StyledForm, StyledInput, StyledButton } from "./styled";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent !== "") {
      addNewTask(trimmedNewTaskContent);
    }
    setNewTaskContent("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        className="form__input"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <StyledButton onClick={focusInput}>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};

export default Form;
