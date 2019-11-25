// import React from "react";
import React, { Component } from "react";
// import axios from 'axios';
import Search from "./components/Search.js";
import NewProfile from "./components/NewProfile.js";
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
    })
  }  

  render() {
    return (
      // OUTER MOST DIV
      <div>
        <nav className = 'nav'>
            <ul>
                <li><button onClick = {this.togglePopUp}>New</button></li>
                <li><button>Log In</button></li>
                <li><button>Register</button></li>
            </ul>
        </nav>
        {/* START OF HEADER */}
        <header className="header">
          <div>
            <img src="../images/spaceHunterLogo.png" alt="Space Hunters Logo" />
          </div>
        </header>
        <Search baseURL={baseURL} />
        {this.state.showNew ?
        <div className = 'popup'>
            <div  className = 'popup\_inner'>
                <button onClick = {this.togglePopUp} className='popup\_inner'>Exit</button>
                <NewProfile handleAddRental={this.handleAddRental} baseURL={baseURL} />
            </div>
        </div>
        : null
        }
      </div>
    );
  }
}

export default App;
