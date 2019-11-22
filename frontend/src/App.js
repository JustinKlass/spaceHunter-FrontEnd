// import React from "react";
import React, { Component } from "react";
// import axios from 'axios';
import Search from "./components/Search.js";
import NewProfile from "./components/NewProfile.js";
// import Show from './components/Show.js'
import "./css/skeleton.css";
import "./css/bulma.css";
import "./css/App.css";

let baseURL = process.env.REACT_APP_BASEURL;

// SETS BASE UTL TO LOCAL HOST 3003 OR HEROKU APP
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

//WHERE TO BIND THE
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: []
    };
    this.handleAddRental = this.handleAddRental.bind(this);
  }
  handleAddRental(NewProfile) {
    console.log(NewProfile);
    this.setState({
      results: [...this.state.results, NewProfile]
    });
  }

  render() {
    return (
      // OUTER MOST DIV
      <div>
        {/* START OF HEADER */}
        <header className="header">
          <div>
            <img src="../images/spaceHunterLogo.png" alt="Space Hunters Logo" />
          </div>
        </header>
        {/* <Show baseURL = {baseURL}/> */}
        <NewProfile handleAddRental={this.handleAddRental} baseURL={baseURL} />
        <Search baseURL={baseURL} />
      </div>
    );
  }
}

export default App;
