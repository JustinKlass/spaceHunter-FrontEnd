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
      available: false,
      showEdit: false,
      rental: this.props.rental
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      owner: this.props.rental.owner,
      city: this.props.rental.city,
      state: this.props.rental.state,
      country: this.props.rental.country,
      price: this.props.rental.price,
      contactInfo: this.props.rental.contactInfo,
      occupancy: this.props.rental.occupancy,
      like: this.props.rental.like,
      description: this.props.rental.description,
      image: this.props.rental.image,
      available: this.props.rental.available
    });
  }

  handleOnchange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      const url = `http://localhost:3003/rental/${this.props.rental._id}`;
      const reload = {
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
      };
      const updatedRental = await axios.put(url, reload);
      console.log(updatedRental.data.city)
      this.setState({
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
    } catch (err) {}
    this.setState({
        showEdit: false,
    })
    this.props.getAll();
    this.props.update();
  }
//   owner: this.state.owner,
//   city: this.state.city,
//   state: this.state.state,
//   country: this.state.country,
//   price: this.state.price,
//   contactInfo: this.state.contactInfo,
//   occupancy: this.state.occupancy,
//   like: this.state.like,
//   description: this.state.description,
//   image: this.state.image,
//   available: this.state.available
  togglePopUp() {
    this.setState({
        showEdit: !this.state.showEdit
    })
  }  


  edit() {
        return (
        <div className = 'popup'>
            <div  className = 'popup\_inner'>
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

        <input type="submit" value="Submit"/>
      </form>
            </div>
        </div>
        );
  }

  render() {
    const showEditForm = this.state.showEdit ? this.edit() : null;
    return (
        <div>
            <button onClick = {() => {this.togglePopUp()}}>Edit</button>
            {showEditForm}
        </div>
    );
  }
}
export default UpdateRental;
