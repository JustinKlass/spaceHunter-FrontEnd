import React, { Component } from "react";
import axios from "axios";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.getRentals();
  }

  async getRentals() {
    const response = await axios.get(`${this.props.baseURL}/rental`);
    const rental = response.data;
    this.setState({
      results: rental
    });
    console.log(this.state.results);
  }

  render() {
    return (
      <div className="parentContainer">
        {this.state.results.map(result => {
          return (
            <div className="childContainer" key={result._id}>
              <img
                className="childImage"
                src={result.image}
                alt={result.description}
              />
              <div className="block">
                <p>{result.location}</p>
                <p>{result.owner}</p>
                <p>{result.like}</p>
              </div>
              <p>{result.price}</p>
              <p>{result.occupancy}</p>
              <p>{result.contactInfo}</p>
              <p>{result.available}</p>
              <p>{result.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
