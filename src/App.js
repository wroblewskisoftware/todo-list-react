import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toTasks, toAuthor, toTask } from "./routes";
import Navigation from "./Navigation";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
