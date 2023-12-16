import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useTasks } from "../../useTasks";

const Tasks = () => {
  const { removeTask, toggleTaskDone, setAllDone } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <TasksList removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
      />
    </Container>
  );
};

export default Tasks;
