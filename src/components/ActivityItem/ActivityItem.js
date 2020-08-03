import React from 'react';
import mapStyles from '../../services/map-style';

import {
    GoogleMap,
    Marker,
} from '@react-google-maps/api';

const ActivityItem = (props) => {

    console.log(props.activity);
    const mapContainerStyle = {
        width: '250px',
        height: '250px'
    }
    const center = props.activity.location;
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
    }

    let openDisplay = <p className="text-center">No</p>

    if (props.activity.isOpen) {
        openDisplay = <p className="text-center">Yes</p>
    }

    return (
        <div className="main-container">
            <h3 className="text-center mb-10">{props.activity.name}</h3>
            <p className="text-center">
                <img src={props.activity.photoUrl} className="preview-image mb-10" />
            </p>

            <p className="text-center">{props.activity.address}</p>

            <div className="divider center mb-20 mt-20"></div>

            <p className="text-center">Is it open?</p>
            {openDisplay}

            <div className="divider center mb-20 mt-20"></div>

            <p className="text-center"> Rating: {props.activity.rating} out of 5</p>

            <div className="divider center mb-20 mt-20"></div>


            <div className="map-container" >
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={center}
                    options={options}
                >
                    <Marker position={center} />

                </GoogleMap>
            </div>


        </div>
    )

}

export default ActivityItem;