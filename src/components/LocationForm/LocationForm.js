import React from 'react';

class LocationForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <h4 className="mb-10 text-center">Get Started!</h4>
                <form id="home-form">
                    <input type="text" className="location-input pad-5" placeholder="Enter location here." />
                    <button type="submit" className="location-button pad-5">Start</button>
                </form>
            </div>
        )
    }
}

export default LocationForm;