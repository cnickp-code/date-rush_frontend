import React from 'react';
import { NavLink } from 'react-router-dom';
import mapStyles from '../../services/map-style';
import { useState, useContext, useEffect } from 'react';
import {
    GoogleMap,
    Marker,
} from '@react-google-maps/api';
import DRContext from '../../context/DRContext';

const google = window.google = window.google ? window.google : {};



const SummaryActivityItem = () => {

    const { latLong, dateActivity } = useContext(DRContext);
    const [place, setPlace] = useState({});

    useEffect(() => {
        initMap();
    }, [])

    const mapContainerStyle = {
        width: '250px',
        height: '250px'
    }
    const center = place.location;
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
    }

    const initMap = () => {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 43.653225, lng: -79.383186 },
            zoom: 15
        });
        let service = new google.maps.places.PlacesService(map);
        // let request = {
        //     placeId: dateActivity
        // }
        let request = {
            placeId: 'ChIJJVKKEbXKwoARY782FgZ49Y8'
        }

        let placeObj = {};
        
        service.getDetails(request, function(results, status, pagetoken) {
            console.log(results);
            let latNum = results.geometry.location.lat();
            let lngNum = results.geometry.location.lng();
            let locationObj = { lat: latNum, lng: lngNum };
            let placeOpen = true;
            let placeRating = results.rating;
            let photoUrl = 'https://img.favpng.com/15/13/2/urban-park-cartoon-png-favpng-GyXzR7iKQadY6M60ED5b38UwK.jpg';

            placeObj = {
                id: results.place_id,
                name: results.name,
                photoUrl,
                types: results.types,
                location: locationObj,
                address: results.vicinity,
                isOpen: placeOpen,
                rating: placeRating
            }

            setPlace(placeObj);
        })
    }

    let openDisplay = <p className="text-center">No</p>

    if (place.isOpen) {
        openDisplay = <p className="text-center">Yes</p>
    }

    console.log(place);

    return (
        <div className="summary-container">
            <div className=" edit-container">
                <i className="fas fa-edit"></i>
            </div>
            <h3 className="text-center mb-10">{place.name}</h3>
            <p className="text-center">
                <img src={place.photoUrl} className="preview-image mb-10" />
                {/* <img src='https://via.placeholder.com/400' className="preview-image mb-10" /> */}
            </p>

            <p className="text-center">{place.address}</p>


            <div className="divider center mb-20 mt-20"></div>

            <p className="text-center">Is it open?</p>
            {openDisplay}

            <div className="divider center mb-20 mt-20"></div>

            <p className="text-center"> Rating: {place.rating} out of 5</p>

            <div className="divider center mb-20 mt-20"></div>


            <div id='map'></div>

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

export default SummaryActivityItem;