import React from "react";
import "./styles.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./Login";
import Employees from "./Employees";
import Logout from "./Logout";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route path="/employees" component={Employees} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
