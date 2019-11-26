import React, { Component } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

class NewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      city: "",
      state: "",
      country: "",
      price: 0,
      contactInfo: "",
      occupancy: "",
      like: 0,
      description: "",
      image: "",
      available: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleContactInfoChange = this.handleContactInfoChange.bind(this);
    this.handleOccupancyChange = this.handleOccupancyChange.bind(this);
    this.handleLikeChange = this.handleLikeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleAvailableChange = this.handleAvailableChange.bind(this);
  }

  handleOwnerChange(event) {
    this.setState({ owner: event.currentTarget.value });
  }
  handleCityChange(event) {
    this.setState({ city: event.currentTarget.value });
  }
  handleStateChange(event) {
    this.setState({ state: event.currentTarget.value });
  }
  handleCountryChange(event) {
    this.setState({ country: event.currentTarget.value });
  }
  handlePriceChange(event) {
    this.setState({ price: event.currentTarget.value });
  }
  handleContactInfoChange(event) {
    this.setState({ contactInfo: event.currentTarget.value });
  }
  handleOccupancyChange(event) {
    this.setState({ occupancy: event.currentTarget.value });
  }
  handleLikeChange(event) {
    this.setState({ like: event.currentTarget.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.currentTarget.value });
  }
  handleImageChange(event) {
    this.setState({ image: event.currentTarget.value });
  }
  handleAvailableChange(event) {
    this.setState({ available: event.currentTarget.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${this.props.baseURL}/rental`, {
      owner: this.state.owner,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      price: this.state.price,
      contactInfo: this.state.contactInfo,
      occupancy: this.state.occupancy,
      like: this.state.like,
      description: this.state.description,
      image: this.state.image,
      available: this.state.available
    });
    this.setState({
      owner: "",
      city: "",
      state: "",
      country: "",
      price: 0,
      contactInfo: "",
      occupancy: "",
      like: 0,
      description: "",
      image: "",
      available: true
    });
    this.props.handleAddRental(response.data);
    this.props.togglePopUp();
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <div className="newRentalInfo">
          <form className="newRental" onSubmit={this.handleSubmit}>
            <img
              class="newRentalLogo"
              src="/images/spaceHunterLogo4.png"
              alt="Space Hunters Logo"
            />
            <div className="field">
              <label htmlFor="owner">Owner</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="owner"
                  name="owner"
                  onChange={this.handleOwnerChange}
                  value={this.state.owner}
                  placeholder="add name"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="city" className="inline">
                City
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="city"
                  name="city"
                  className="input"
                  onChange={this.handleCityChange}
                  value={this.state.city}
                  placeholder="add city"
                />{" "}
              </div>
            </div>
            <div className="field">
              <label htmlFor="state" className="inline">
                State
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="state"
                  name="state"
                  onChange={this.handleStateChange}
                  value={this.state.state}
                  placeholder="add state"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="country" className="inline">
                Country
              </label>
              <input
                className="input"
                type="text"
                id="country"
                name="country"
                onChange={this.handleCountryChange}
                value={this.state.country}
                placeholder="add country"
              />
            </div>
            <div className="field">
              <label htmlFor="price" className="inline">
                Price
              </label>
              <input
                className="input"
                type="number"
                id="price"
                name="price"
                onChange={this.handlePriceChange}
                value={this.state.price}
                placeholder="add price"
              />
            </div>
            <div className="field">
              <label htmlFor="contactInfo" className="inline">
                Contact Info
              </label>
              <input
                className="input"
                type="text"
                id="contactInfo"
                name="contactInfo"
                onChange={this.handleContactInfoChange}
                value={this.state.contactInfo}
                placeholder="add contact info"
              />
            </div>
            <div className="field">
              <label htmlFor="occupancy" className="inline">
                Occupancy
              </label>
              <input
                className="input"
                type="string"
                id="occupancy"
                name=" occupancy"
                onChange={this.handleOccupancyChange}
                value={this.state.occupancy}
                placeholder="how many people?"
              />
            </div>
            <div className="field">
              <label htmlFor="like" className="inline">
                Like?
              </label>
              <input
                className="input"
                type="number"
                id="like"
                name="like"
                onChange={this.handleLikeChange}
                value={this.state.like}
              />
            </div>
            <div className="field">
              <label htmlFor="description" className="inline">
                Description
              </label>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="string"
                    id="description"
                    name="description"
                    onChange={this.handleDescriptionChange}
                    value={this.state.description}
                    placeholder="description"
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="image" className="inline">
                Image Url:
              </label>
              <input
                className="input"
                type="string"
                id="image"
                name="image"
                onChange={this.handleImageChange}
                value={this.state.image}
              />
            </div>
            <div className="field">
              <label htmlFor="available" className="inline">
                Available &nbsp;
              </label>
              <input
                className="radio"
                type="radio"
                id="available"
                name="available"
                onChange={this.handleAvailableChange}
                value={this.state.available}
              />
            </div>
            <input className="button" type="submit" value="Add Rental" />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default NewProfile;
