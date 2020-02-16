import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import Study from "./components/Study";
import Living from "./components/Living";
import Exercise from "./components/Exercise";
import Parking from "./components/Parking";
import detailPage from "./components/Project/detailPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/study" component={Study} />
            <Route exact path="/living" component={Living} />
            <Route exact path="/exercise" component={Exercise} />
            <Route exact path="/parking" component={Parking} />
            <Route exact path="/detailPage" component={detailPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
