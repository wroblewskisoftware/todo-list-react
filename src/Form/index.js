import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent !== "") {
      addNewTask(trimmedNewTaskContent);
    }
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
