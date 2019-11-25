import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
      country: null,
      state: null,
      city: null,
      results: [],
      match: []
    };
    this.getRentals = this.getRentals.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    const response = await axios.get(`${this.props.baseURL}/rental`);
    const rental = response.data;
    this.setState({
      match: rental
    });
    console.log(this.state.match);
  }

  async getRentals() {
    const response = await axios.get(`${this.props.baseURL}/rental`);
    const data = response.data;
    this.setState({
      results: data
    });
    this.state.results.map(result => {
      if (result.location === this.state.location) {
        this.setState({
          match: [result]
        });
        console.log(this.state.match);
      }
    });
  }

  handleChange(event) {
    if (event.target.value === "" || event.target.value === null) {
      this.setState({
        bool: false,
        location: event.target.value
      });
    } else {
      this.setState({
        bool: true,
        location: event.target.value.toLowerCase()
      });
    }
  }

  render() {
    return (
      <div>
        {/* SEARCH BAR */}
        <div className="form">
          {/* <label ></label> */}
          <input
            type="text"
            placeholder="Where To Now?"
            onChange={this.handleChange}
            className="searchBar"
          ></input>
          <input
            type="submit"
            placeholder="Search"
            onClick={() => {
              this.state.bool === false ? this.getAll() : this.getRentals();
            }}
          ></input>
        </div>

        {this.state.match.map(match => {
          return (
            <div className="childContainer" key={match._id}>
              <img
                className="childImage"
                src={match.image}
                alt={match.description}
              />
              <div className="block">
                <p className="inline">{match.location}</p>
                <p className="inline">{match.owner}</p>
                <p className="inline like">{match.like}</p>
              </div>
              <p>{match.price}</p>
              <p>{match.occupancy}</p>
              <p>{match.contactInfo}</p>
              <p>{match.available}</p>
              <p>{match.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
