import React from "react";
import DeleteRental from "./DeleteRental.js";
import UpdateRental from "./UpdateRental.js";
import "../css/App.css";
import "bulma/css/bulma.css";

let baseURL = process.env.REACT_APP_BASEURL;

// SETS BASE UTL TO LOCAL HOST 3003 OR HEROKU APP
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

console.log("current base URL:", baseURL);

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false
    };
  }

  render() {
    let cityState = `${this.props.rental.city},${this.props.rental.state}`;
    return (
      <div class="modal is-active">
        <div class="modal-background has-background-grey-darker"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Rental Information</p>
            <a href={`${baseURL}`}>
              <button class="delete">CLOSE BUTTON</button>
            </a>
          </header>
          <section class="modal-card-body">
            <div>
              <div>
                <img
                  className=""
                  src={this.props.rental.image}
                  alt={this.props.rental.description}
                />
                <div class="parentRentalInfoPop">
                  <p className="desc">
                    <strong>Description:</strong> <br />
                    {this.props.rental.description}
                  </p>
                  <br />
                  <strong>Location:</strong> <br />
                  <p>
                    {this.props.rental.city}, {this.props.rental.state},{" "}
                    {this.props.rental.country}
                  </p>
                  <br />
                  <strong>Contact Info:</strong> <br />
                  <p className="">
                    {this.props.rental.owner} <br />
                    <br />
                    <strong>Owner:</strong> <br />
                    {this.props.rental.contactInfo}
                  </p>
                  <br />
                  <strong>The Important Stuff:</strong>
                  <p>{this.props.rental.available}</p>
                  <p>{this.props.rental.occupancy}</p>
                  <p>${this.props.rental.price} /Night</p>
                </div>
                <br />
                <div className="parentIframe">
                  <iframe
                    title="location"
                    samesite="None"
                    width="300"
                    height="300"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB0KXJrVh4G4vAfEoEU2_fEcjXsQDKpuvE&q=${cityState}`}
                  ></iframe>
                </div>
                {/* <p className = 'inline like'>{this.props.rental.like}</p> */}
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <div class="">
              <DeleteRental
                baseURL={this.props.baseURL}
                rental={this.props.rental}
                getAll={this.props.getAll}
                update={this.props.update}
              />
            </div>
            &nbsp;&nbsp;
            <div class="">
              <UpdateRental
                baseURL={this.props.baseURL}
                rental={this.props.rental}
                getAll={this.props.getAll}
                update={this.props.update}
              />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default PopUp;
