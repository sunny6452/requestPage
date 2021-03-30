//import logo from "./logo.svg";
import "./App.css";
import Main from "./view/Main";
import LoginView from "../src/view/LoginView";
import { Route } from "react-router";
import WriteView from "./view/WriteView";

function App() {
  return (
    <div>
      <Route path={["/main", "/"]} component={Main} exact={true} />
      <Route path="/login" component={LoginView} />
      <Route path="/writeRequest" component={WriteView} />
    </div>
  );
}

export default App;
