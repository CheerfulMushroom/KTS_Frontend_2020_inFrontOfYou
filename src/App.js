import Comparison from "pages/Comparison/Comparison";
import History from "pages/History/History";
import Home from "pages/Home/Home";
import React from "react";
import {Route} from "react-router";
import {Router} from "react-router-dom";

import history from "./history";

import "./App.css";



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
