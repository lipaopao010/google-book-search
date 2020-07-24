import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NavSection from "./components/Nav"
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Router>
    <Container>
      <NavSection /> 
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>

        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </Container>
  </Router>
  );
}


export default App;
