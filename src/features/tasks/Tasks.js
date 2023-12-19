import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";

const Tasks = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section title="Dodaj nowe zadanie" body={<Form />} />
    <Section
      title="Lista zadań"
      body={<TasksList />}
      extraHeaderContent={<Buttons />}
    />
  </Container>
);

export default Tasks;
