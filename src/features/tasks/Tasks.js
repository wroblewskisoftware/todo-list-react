import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useState } from "react";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

const Tasks = () => {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    // addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <TasksList
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
  );
};

export default Tasks;
