import React from 'react';   

class PopUp extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props.match)
        return (
            <div className='popup'>  
                <div className='popup\_inner'>  
                <img className = 'cardImage' src = {this.props.rental.image} alt = {this.props.rental.description}/>
                            <div className = 'block'>
                                <p className = 'inline'>{this.props.rental.city}</p>
                                <p className = 'inline'>{this.props.rental.state}</p>
                                <p className = 'inline'>{this.props.rental.country}</p>
                                <p className = 'inline'>{this.props.rental.owner}</p>
                                <p className = 'inline like'>{this.props.rental.like}</p>
                            </div>
                            <p>{this.props.rental.price}</p>
                            <p>{this.props.rental.occupancy}</p>
                            <p>{this.props.rental.contactInfo}</p>
                            <p>{this.props.rental.available}</p>
                            <p>{this.props.rental.description}</p>
                </div>  
            </div>  
        );  
    }  
}  

export default PopUp;