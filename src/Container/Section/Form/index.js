import { Sheet, Input, Button } from "./styled";
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
    <Sheet onSubmit={onFormSubmit}>
      <Input
        className="form__input"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </Sheet>
  );
};

export default Form;
