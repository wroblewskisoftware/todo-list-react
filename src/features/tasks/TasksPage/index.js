import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import Button from "./Button";
import Search from "./Search";
import TasksList from "./TasksList";
import Buttons from "./Buttons";

const TasksPage = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      body={<Form />}
      extraHeaderContent={<Button />}
    />
    <Section title="Wyszukiwarka" body={<Search />} />
    <Section
      title="Lista zadań"
      body={<TasksList />}
      extraHeaderContent={<Buttons />}
    />
  </Container>
);

export default TasksPage;
