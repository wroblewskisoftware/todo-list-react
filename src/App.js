import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledList, StyledItem, StyledNavLink } from "./styled";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

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
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
