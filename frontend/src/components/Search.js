import React, { Component } from "react";
import PopUp from "./PopUp";
import axios from "axios";
import "bulma/css/bulma.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPop: null,
      bool: false,
      show: false,
      country: null,
      state: null,
      city: null,
      results: [],
      match: [],
      filtered: []
    };
    this.getAll = this.getAll.bind(this);
    this.update = this.update.bind(this);
    this.getRentals = this.getRentals.bind(this);
    this.togglePopUp = this.togglePopUp.bind(this);
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
      filtered: [],
      results: data
    });
    console.log(this.state.results);

    this.state.results.forEach(result => {
      if (
        result.city.toLowerCase() === this.state.city ||
        result.state.toLowerCase() === this.state.state ||
        result.country.toLowerCase() === this.state.country
      ) {
        this.state.filtered.push(result);
        this.setState({
          match: this.state.filtered
        });
        console.log(this.state.match);
      }
    });
  }

  handleChange(event) {
    if (event.target.value === "" || event.target.value === null) {
      this.setState({
        bool: false
      });
    } else {
      this.setState({
        bool: true,
        city: event.target.value.toLowerCase(),
        state: event.target.value.toLowerCase(),
        country: event.target.value.toLowerCase()
      });
    }
  }

  togglePopUp(event) {
    console.log(event.currentTarget.id);
    const selected = this.state.match.filter(selected => {
      return selected._id === event.currentTarget.id;
    });
    this.setState({
      currentPop: selected,
      show: !this.state.show
    });
  }

  update() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="searchParent">
        {/* SEARCH BAR */}
        <div className="searchContainer">
          <div className="searchChild1">
            <input
              type="text"
              placeholder="Where To Now?"
              onChange={this.handleChange}
              className="searchBar"
            ></input>
          </div>
          <div className="searchChild2">
            <input
              type="submit"
              placeholder="Search"
              className="button"
              onClick={() => {
                this.state.bool === false ? this.getAll() : this.getRentals();
              }}
            ></input>
          </div>
        </div>
        <div className="parentColumn">
          {this.state.match.map(match => {
            return (
              <div key={match._id} className="childColumn">
                {this.state.currentPop && this.state.show ? (
                  <PopUp
                    rental={this.state.currentPop[0]}
                    baseURL={this.props.baseURL}
                    getAll={this.getAll}
                    update={this.update}
                  />
                ) : null}
                <div
                  className="grandchild"
                  id={match._id}
                  onClick={this.togglePopUp}
                >
                  <img
                    className="childImage"
                    src={match.image}
                    alt={match.description}
                  />
                  <div className="searchRentalAvailable">
                    <table>
                      <th>Location</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>Owner</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>Likes:</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>&nbsp;&nbsp;&nbsp;</th>
                      <th>Occupancy</th>
                      <tr>
                        <td>
                          {match.city}, {match.state}, {match.country}
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>{match.owner}</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td class="like">{match.like}</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td> {match.occupancy}</td>
                      </tr>
                    </table>
                    <hr />
                    <h6 class="price"> Price: ${match.price} per night</h6>
                    <p></p>
                    <p>{match.available}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
