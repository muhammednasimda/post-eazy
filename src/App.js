import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Poster from "./Poster";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:user" component={Poster} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
