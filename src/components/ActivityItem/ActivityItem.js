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

    let openDisplay = <p className="text-center closed">Closed</p>

    if (props.activity.isOpen) {
        openDisplay = <p className="text-center open">Open Now</p>
    }

    let stars;

    if(props.activity.rating) {
        stars = [];
        let ratingSplit = props.activity.rating.toString().split('.');
        let wholeStars = Number(ratingSplit[0]);
        let decimal = Number(ratingSplit[1]);
    
        for(let i = 0; i < 5; i++) {
            if(i < wholeStars) {
                stars.push(0);
            } else if(i === wholeStars && decimal >= 5) {
                stars.push(1);
            } else {
                stars.push(2);
            } 
        }
    
        stars = stars.map(num => {
            if(num === 0) {
                return <div className="star"><i class="fas fa-star"></i></div>
            } else if(num === 1) {
               return <div className="star"><i class="fas fa-star-half-alt"></i></div> 
            } else {
                return <div className="star"><i class="far fa-star"></i></div>
            }
        })
    } else {
        stars = <p className="text-center">No rating found</p>
    }



    return (
        <div className="main-container">
            <h3 className="text-center mb-10">{props.activity.name}</h3>
            <p className="text-center">
                <img src={props.activity.photoUrl} className="preview-image mb-10" />
            </p>

            <p className="text-center">{props.activity.address}</p>

            <div className="divider center mb-20 mt-20"></div>

           <div className="open-container center">
            {openDisplay}
           </div>
            

            <div className="divider center mb-20 mt-20"></div>

            <div className="rating-container">
                {stars}
            </div>

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