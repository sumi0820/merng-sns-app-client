import "./assets/main.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Menu from "./components/Menu";

function App(routeProps) {
  return (
    <div className="App">
      <Menu {...routeProps} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
