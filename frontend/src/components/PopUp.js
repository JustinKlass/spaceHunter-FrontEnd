import React from 'react';   
import DeleteRental from './DeleteRental.js';
import UpdateRental from './UpdateRental.js'

class PopUp extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className = 'block'>  
                        <img className = 'cardImage' src = {this.props.rental.image} alt = {this.props.rental.description}/>
                        <p className = 'desc'>{this.props.rental.description}</p>
                    </div>
                    <div className = 'block'>
                        <p className = 'inline'>{this.props.rental.city}, {this.props.rental.state}, {this.props.rental.country}</p>
                        <p className = 'block'>{this.props.rental.owner} - ({this.props.rental.contactInfo})</p>
                        <p>{this.props.rental.available}</p>
                        <p>{this.props.rental.occupancy}</p>
                        <p>{this.props.rental.price}$/Night</p>
                    </div>
                    <div className = 'inline buttons'>
                        <DeleteRental baseURL = {this.props.baseURL} rental = {this.props.rental} getAll = {this.props.getAll} update = {this.props.update}/>
                        <UpdateRental baseURL = {this.props.baseURL} rental = {this.props.rental} getAll = {this.props.getAll} update = {this.props.update}/>
                    </div>
                        {/* <p className = 'inline like'>{this.props.rental.like}</p> */}
                </div>
            </div>
        );  
    }  
}  

export default PopUp;