import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
 } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import CoinTracker from "./components/CoinTracker";

function App() {
  return <Router>
    <Switch>
    < Route path="/coin">
        <CoinTracker />
      </Route>
      <Route path="/button">
        <Button text="test" />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
      <Route path="/movie/:id">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
