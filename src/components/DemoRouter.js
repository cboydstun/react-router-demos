import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Topics from './Topics'

export default function DemoRouter() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users name={"Chris"} />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return(
      <div>
        <h2>Home</h2>
        <p>This is a render of the home page.</p>
      </div>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
        <p>This is a render of the about page.</p>
      </div>
  );
}

function Users(props) {
  return (
      <div>
        <h2>Users</h2>
        <p>This is a render of the user page.</p>
        <br />
        <p>Hello my name is {props.name}</p>
      </div>
  );
}