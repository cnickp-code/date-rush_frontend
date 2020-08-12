import React from 'react';
import { NavLink } from 'react-router-dom';
import mapStyles from '../../services/map-style';
import { useState, useContext, useEffect } from 'react';
import {
    GoogleMap,
    Marker,
} from '@react-google-maps/api';
import DRContext from '../../context/DRContext';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const google = window.google = window.google ? window.google : {};



const SummaryActivityItem = () => {

    const { summaryDate } = useContext(DRContext);
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
        let request = {
            placeId: summaryDate.place_id
        }

        let placeObj = {};

        service.getDetails(request, function (results, status, pagetoken) {
            console.log(results);
            let latNum = results.geometry.location.lat();
            let lngNum = results.geometry.location.lng();
            let locationObj = { lat: latNum, lng: lngNum };
            let placeOpen = true;
            let placeRating = results.rating;
            let photoUrl = 'https://img.favpng.com/15/13/2/urban-park-cartoon-png-favpng-GyXzR7iKQadY6M60ED5b38UwK.jpg';
            if (results.photos && results.photos.length > 0) {
                photoUrl = results.photos[0].getUrl({ maxHeight: 250 });
            }


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

    let openDisplay = <p className="text-center closed">Closed</p>

    if (place.isOpen) {
        openDisplay = <p className="text-center open">Open Now</p>
    }

    let stars;

    if (place.rating) {
        stars = [];
        let ratingSplit = place.rating.toString().split('.');
        let wholeStars = Number(ratingSplit[0]);
        let decimal = Number(ratingSplit[1]);

        for (let i = 0; i < 5; i++) {
            if (i < wholeStars) {
                stars.push(0);
            } else if (i === wholeStars && decimal >= 5) {
                stars.push(1);
            } else {
                stars.push(2);
            }
        }

        stars = stars.map(num => {
            if (num === 0) {
                return <div className="star"><i class="fas fa-star"></i></div>
            } else if (num === 1) {
                return <div className="star"><i class="fas fa-star-half-alt"></i></div>
            } else {
                return <div className="star"><i class="far fa-star"></i></div>
            }
        })
    } else {
        stars = <p className="text-center">No rating found</p>
    }

    console.log(place);

    return (
        <div className="main-container">
            {/* <div className=" edit-container">
                <i className="fas fa-edit"></i>
            </div> */}
            <h3 className="text-center mb-10">{place.name}</h3>
            <p className="text-center">
                <img src={place.photoUrl} className="preview-image mb-10" />
                {/* <img src='https://via.placeholder.com/400' className="preview-image mb-10" /> */}
            </p>

            <div className="flex-container">
                <div className="left-container">
                    <p className="text-center">{place.address}</p>


                    <div className="divider center mb-20 mt-20"></div>

                    <div className="open-container center">
                        {openDisplay}
                    </div>


                    <div className="divider center mb-20 mt-20"></div>

                    <div className="rating-container">
                        {stars}
                    </div>

                    <div className="divider center mb-20 mt-20"></div>
                </div>

                <div className="right-container">
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
            </div>



            <div id='map'></div>


        </div>
    )

}

export default SummaryActivityItem;