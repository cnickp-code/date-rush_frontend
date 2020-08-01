/* global google */
import React from 'react';
import DRContext from '../../context/DRContext';
import { useContext, useState, useEffect } from 'react';

const google = window.google = window.google ? window.google : {};

const RestaurantItem = () => {

    const { latLong, location } = useContext(DRContext);
    const { lat, lng } = latLong;

    console.log(latLong);
    console.log(lat, lng);
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.276987, lng: 55.296249 },
        zoom: 15
    });

    let service = new google.maps.places.PlacesService(map);
    let request = {
        location: new google.maps.LatLng(lat, lng),
        radius: 500,
        type: ['restaurant']
    };

    service.nearbySearch(request, function(results) {
        console.log(results.length);
        for(let i = 0; i < results.length; i++) {
            console.log(results[i].name, results[i].types)
        }
    })

    return (
        <div className="main-container">
            <h3 className="text-center mb-10">Name</h3>
            <p className="text-center">
                <img src="https://via.placeholder.com/400" className="preview-image mb-10" />
            </p>

            <p className="text-center mb-20">Category: </p>

            <div className="flex-center">
                <a href="" className="recipe-link center" target="_blank">View Recipe</a>
            </div>

            <div id="map">

            </div>

        </div>
    )

}

export default RestaurantItem;