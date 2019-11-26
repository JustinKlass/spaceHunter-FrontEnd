// import React from "react";
import React, { Component } from "react";
// import axios from 'axios';
import Search from "./components/Search.js";
import NewProfile from "./components/NewProfile.js";
import "bulma/css/bulma.css";

let baseURL = process.env.REACT_APP_BASEURL;

// SETS BASE UTL TO LOCAL HOST 3003 OR HEROKU APP
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://spacehunter-backend.herokuapp.com";
}
// baseURL =
//   "https://spacehunter-backend.herokuapp.com" || "http://localhost:3003";

console.log("current base URL:", baseURL);

//WHERE TO BIND THE
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: [],
      showNew: false
    };
    this.togglePopUp = this.togglePopUp.bind(this);
    this.handleAddRental = this.handleAddRental.bind(this);
  }

  handleAddRental(NewProfile) {
    console.log(NewProfile);
    this.setState({
      rentals: [...this.state.rentals, NewProfile]
    });
  }

  togglePopUp() {
    this.setState({
      showNew: !this.state.showNew
    });
  }

  render() {
    return (
      // OUTER MOST DIV
      <div>
        <nav className="nav" role="navigation" aria-label="main navigation">
          <div className="navitem">
            <button className="button is-black" onClick={this.togglePopUp}>
              New
            </button>
          </div>
          <div className="navitem">
            <button className="button is-black ">Log In</button>
          </div>
          <div className="navitem">
            <button className="button is-black">Register</button>
          </div>
        </nav>
        {/* START OF HEADER */}
        <header className="header">
          <div>
            <img src="../images/spaceHunterLogo.png" alt="Space Hunters Logo" />
          </div>
        </header>
        <Search baseURL={baseURL} />
        {this.state.showNew ? (
          <div className="newRentalPopUp">
            <div className="newRentalPopUpInner">
              <NewProfile
                handleAddRental={this.handleAddRental}
                baseURL={baseURL}
                togglePopUp={this.togglePopUp}
              />
            </div>
            <button
              className="button is-white"
              onClick={this.togglePopUp}
              id="exitBtn"
            >
              X
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
