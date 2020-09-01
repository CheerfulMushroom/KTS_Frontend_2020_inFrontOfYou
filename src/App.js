import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Router } from "react-router-dom";
import { Route } from "react-router";
import history from "./history";
import Comparison from "./pages/Comparison/Comparison";
import History from "./pages/History/History";

const App = () => (
  <div className="App">
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/compare" component={Comparison} />
        <Route exact path="/history" component={History} />
      </div>
    </Router>
  </div>
);

export default App;
