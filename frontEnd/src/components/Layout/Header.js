import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="Dashboard.html">
            Scheduler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/study">
                  Study
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/living">
                  Living
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/exercise">
                  Exercise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/parking">
                  Parking
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  NotifyMe
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  ArrangeMe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
