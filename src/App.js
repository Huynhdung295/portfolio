import "./App.css";
import HomePage from "./pages/HomePage";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <div>
      <HomePage />
      <MessengerCustomerChat
        pageId="100330828425458"
        appId="916945135550346"
      />
      ,
    </div>
  );
}

export default App;
