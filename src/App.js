import "./App.css";
import HomePage from "./pages/HomePage";
import MessengerCustomerChat from "react-messenger-customer-chat";
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
      <MessengerCustomerChat pageId="100330828425458" appId="916945135550346" />
    </Router>
  );
}

export default App;
