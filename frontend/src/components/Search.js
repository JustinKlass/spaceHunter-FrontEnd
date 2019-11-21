import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.getRentals();
      }

    async getRentals() {
        const response = await axios.get(`${this.props.baseURL}/rental`);
        const rental = response.data
        this.setState({
                results: rental
            })
      }


    render() {
        return (
            <div>
                {/* SEARCH BAR */}
                <div className = 'form'>
                    {/* <label ></label> */}
                    <input type='text' placeholder='Enter Location' className = 'searchBar'></input>
                    <input type='submit'placeholder='Search' onClick={() => {console.log('It Work')}}></input>
                </div>
            </div>
        );
    }
}

export default Search