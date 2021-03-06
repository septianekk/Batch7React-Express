import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UsersList from "./components/UserList";

function App() {
  return (
    <div>
      <nav
        className="navbar navbar-expand navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/users"]} component={UsersList} />
          <Route exact path="/add" component={AddUser} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
