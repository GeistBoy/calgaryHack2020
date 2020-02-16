import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import pageLiving from './pageLiving';
import pageExercising from './pageExercising';
import pageStudy from './pageStudy';
import pageParking from './pageParking';
import pageRedGym from './pageRedGym';
import pageGoldGym from './pageGoldGym';
import pageJackSimpsonGym from './pageJackSimpsonGym';
import pageSwimmingPool from './pageSwimmingPool';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/study" component={pageStudy} />
        <Route exact={true} path="/living" component={pageLiving} />
        <Route exact={true} path="/exercising" component={pageExercising} />
        <Route exact={true} path="/parking" component={pageParking} />
        <Route exact={true} path="/red_gym" component={pageRedGym} />
        <Route exact={true} path="/gold_gym" component={pageGoldGym} />
        <Route exact={true} path="/jack_simpson_gym" component={pageJackSimpsonGym} />
        <Route exact={true} path="/swimming_pool" component={pageSwimmingPool} />
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
