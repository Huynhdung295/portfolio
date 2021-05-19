import "./App.css";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
