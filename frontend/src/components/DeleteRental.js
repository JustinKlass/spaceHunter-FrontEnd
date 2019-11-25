import React, { Component } from "react";
import axios from "axios";
class DeleteRental extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rental: []
    };

    this.deleteRental = this.deleteRental.bind(this);
    this.getRental = this.getRental.bind(this);
  }

  async getRental() {
    const apiData = await axios(`${this.props.baseURL}/rental`);
    const data = apiData.data;
    this.setState({
      rental: data
    });
  }
  async deleteRental(id) {
    await axios.delete(`${this.props.baseURL}/rental/${id}`);
    const filteredRentals = this.state.rental.filter(rental => {
      return rental._id !== id;
    });
    this.setState({
      rental: filteredRentals
    });
  }
  render() {
      return (
        <button onClick={() => this.deleteRental(this.props.rental._id)}>Delete</button>
      )
  }
}
export default DeleteRental;
