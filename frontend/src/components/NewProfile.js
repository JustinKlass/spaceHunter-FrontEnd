import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://localhost:3003";

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
    const response = await axios.post(`${baseURL}/rental/`, {
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
  }

  render() {
    return (
      <form className="newRental" onSubmit={this.handleSubmit}>
        <label htmlFor="owner">Owner</label>
        <input
          className="newChild1"
          type="text"
          id="owner"
          name="owner"
          onChange={this.handleOwnerChange}
          value={this.state.owner}
          placeholder="add name"
        />
        <label htmlFor="city">City</label>
        <input
          className="newChild1"
          type="text"
          id="city"
          name="city"
          onChange={this.handleCityChange}
          value={this.state.city}
          placeholder="add city"
        />
        <label htmlFor="state">State</label>
        <input
          className="newChild1"
          type="text"
          id="state"
          name="state"
          onChange={this.handleStateChange}
          value={this.state.state}
          placeholder="add state"
        />
        <label htmlFor="country">Country</label>
        <input
          className="newChild1"
          type="text"
          id="country"
          name="country"
          onChange={this.handleCountryChange}
          value={this.state.country}
          placeholder="add country"
        />
        <label htmlFor="price">Price</label>
        <input
          className="newChild1"
          type="number"
          id="price"
          name="price"
          onChange={this.handlePriceChange}
          value={this.state.price}
          placeholder="add price"
        />
        <label htmlFor="contactInfo">Contact Info</label>
        <input
          className="newChild1"
          type="text"
          id="contactInfo"
          name="contactInfo"
          onChange={this.handleContactInfoChange}
          value={this.state.contactInfo}
          placeholder="add contact info"
        />
        <label htmlFor="occupancy">Occupancy</label>
        <input
          className="newChild1"
          type="string"
          id="occupancy"
          name=" occupancy"
          onChange={this.handleOccupancyChange}
          value={this.state.occupancy}
          placeholder="how many people?"
        />
        <label htmlFor="like">Like?</label>
        <input
          className="newChild1"
          type="number"
          id="like"
          name="like"
          onChange={this.handleLikeChange}
          value={this.state.like}
        />
        <label htmlFor="description">Description</label>
        <input
          className="newChild1"
          type="string"
          id="description"
          name="description"
          onChange={this.handleDescriptionChange}
          value={this.state.description}
          placeholder="description"
        />
        <label htmlFor="image">Image</label>
        <input
          className="newChild1"
          type="string"
          id="image"
          name="image"
          onChange={this.handleImageChange}
          value={this.state.image}
        />
        <label htmlFor="available">Available</label>
        <input
          className="newChild1"
          type="radio"
          id="available"
          name="available"
          onChange={this.handleAvailableChange}
          value={this.state.available}
        />
        <br />
        <input className="newChild3" type="submit" value="Add Rental" />
      </form>
    );
  }
}

export default NewProfile;
