import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledList, StyledItem, StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <StyledList>
        <StyledItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledItem>
      </StyledList>
    </nav>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
