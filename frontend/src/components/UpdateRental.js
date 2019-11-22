import React, { Component } from "react";
import axios from "axios";
class UpdateRental extends Component {
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
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      owner: this.props.rental.owner
    });
  }
  handleOnchange(event) {
    const { owner, value } = event.target;
    this.setState({
      [owner]: value
    });
  }
  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const url = `http://localhost:3003/rental/${rentalID}`;
      const reload = {};
      const updatedRental = await axios.put(url, reload);
      console.log("PUT: ", updatedRental);
      this.props.getrentals();
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
        available: false
      });
    } catch (err) {}
  }
  render() {
    return (
      <form onSubmit={this.handleEditSubmit}>
        <input
          type="text"
          name="owner"
          value={this.state.owner}
          onChange={this.handleOnchange}
        />

        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="country"
          value={this.state.country}
          onChange={this.handleOnchange}
        />
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="contactInfo"
          value={this.state.contactInfo}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="owneroccupancy"
          value={this.state.occupancy}
          onChange={this.handleOnchange}
        />
        <input
          type="number"
          name="like"
          value={this.state.like}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleOnchange}
        />
        <input
          type="radio"
          name="available"
          value={this.state.available}
          onChange={this.handleOnchange}
        />
      </form>
    );
  }
}
export default UpdateRentals;
