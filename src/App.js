import GlobalStyle from "./globalStyles";
import Container from "./Container";
import Header from "./Container/Header";
import Section from "./Container/Section";
import Form from "./Container/Section/Form";
import Buttons from "./Container/Section/Buttons";
import Tasks from "./Container/Section/Tasks";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </>
  );
}

export default App;
