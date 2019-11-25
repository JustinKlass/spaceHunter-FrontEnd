import React, { Component } from "react";
import PopUp from "./PopUp";
import axios from "axios";
import "../css/App.css";
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
        }
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
      results: data
    });
    this.state.results.map(result => {
      if (
        result.city.toLowerCase() === this.state.city ||
        result.state.toLowerCase() === this.state.state ||
        result.country.toLowerCase() === this.state.country
      ) {
        this.state.filtered.push(result);
        this.setState({
            filtered: [],
            results: data
        })
        this.state.results.forEach(result => {
            if (result.city.toLowerCase() === this.state.city || 
                result.state.toLowerCase() === this.state.state || 
                result.country.toLowerCase() === this.state.country) {
                this.state.filtered.push(result)
                this.setState({
                    match: this.state.filtered
                });
                console.log(this.state.match);
            }
        })
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
        const selected = this.state.match.filter((selected) => {
            return selected._id === event.currentTarget.id;
        })
        this.setState({
            currentPop: selected,
            show: !this.state.show
        })
    }  

    update() {
        this.setState({
            show: !this.state.show
        })
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
            <div key={match._id} className="childContainer">
              {this.state.currentPop && this.state.show ? (
                <div className="popup">
                  <div className="popup\_inner">
                    <button onClick={this.togglePopUp} className="popup\_inner">
                      Exit
                    </button>
                    <PopUp
                      rental={this.state.currentPop[0]}
                      baseURL={this.props.baseURL}
                    />
                  </div>
                </div>
                {
                    this.state.match.map((match) => {
                        return(
                            <div key={match._id} className = 'childContainer'>
                                {
                                    this.state.currentPop && this.state.show ? 
                                    <div className = 'popup'>
                                        <div className='popup\_inner'>
                                            <button onClick = {this.togglePopUp} className='popup\_inner'>Exit</button>
                                            <PopUp rental = {this.state.currentPop[0]} baseURL={this.props.baseURL} getAll = {this.getAll} update = {this.update}/>
                                        </div>
                                    </div>
                                    : null
                                }
                                <div className = '' id = {match._id} onClick = {this.togglePopUp}>
                                    <img className = 'childImage' src = {match.image} alt = {match.description}/>
                                    <div className = 'block'>
                                        <p className = 'inline'>{match.city}</p>
                                        <p className = 'inline'>{match.state}</p>
                                        <p className = 'inline'>{match.country}</p>
                                        <p className = 'inline'>{match.owner}</p>
                                        <p className = 'inline like'>{match.like}</p>
                                        <p className = 'inline'>{match.price}</p>
                                        <p className = 'inline'>{match.occupancy}</p>
                                        <p className = 'inline'>{match.available}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
