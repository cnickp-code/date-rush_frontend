import React from 'react';
import DRContext from '../../context/DRContext';
import { NavLink } from 'react-router-dom';
import ExtApiService from '../../services/external-api-service';

class LocationForm extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            location: null,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        ExtApiService.getLocation(this.state.location)
            .then(location => {
                let lat = location.data[0].latitude;
                let long = location.data[0].longitude;

                let latLong = lat + ',' + long;
                this.context.handleSetLocation(latLong);
            })

        
    }

    changeHandler = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    render() {
        return (
            <div className="form-container">
                <h4 className="mb-10 text-center">Get Started!</h4>
                <form id="home-form" onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        className="location-input pad-5"
                        placeholder="Enter city here."
                        onChange={this.changeHandler}
                        required
                    />

                        <button type="submit" className="location-button pad-5">Start</button>


                </form>
            </div>
        )
    }
}

export default LocationForm;