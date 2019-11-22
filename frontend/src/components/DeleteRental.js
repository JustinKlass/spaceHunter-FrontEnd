import React, { Component } from "react";
import axios from "axios";
class DeleteRental extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.deleteRental = this.deleteRental.bind(this);
    this.getRental = this.getRental.bind(this);
  }
  async getRental() {
    const apiData = await axios(`${baseurl}/rental`);
    const data = apiData.data;
    this.setState({
      rental: data
    });
  }
  async deleteRental(id) {
    await axios.delete(`${baseUrl}/rental/${id}`);
    const filteredrentals = this.state.rental.filter(rental => {
      return rental._id != id;
    });
    this.setState({
      rental: filteredRentals
    });
  }
  render() {
    return <button onClick={() => this.deleteRental(rental._id)}></button>;
  }
}
export default DeleteRental;
