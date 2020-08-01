import React from 'react';
import DRContext from '../../context/DRContext';
import { NavLink, Redirect } from 'react-router-dom';
import ExtApiService from '../../services/external-api-service';
import { useContext, useState, useEffect } from 'react';
import config from '../../config';
import mapStyles from '../../services/map-style';

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import PlacesAutocomplete, {
    getGeoCode,
    getLatLng,
    getGeocode
} from 'use-places-autocomplete';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css'
import usePlacesAutocomplete from 'use-places-autocomplete';

const libraries = ['places'];
const mapContainerStyle = {
    width: '250px',
    height: '250px'
}
const center = {
    lat: 43.653225,
    lng: -79.383186
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
}

const google = window.google = window.google ? window.google : {};

const LocationForm = () => {

    const [forward, setForward] = useState(false);
    const { handleSetLocation } = useContext(DRContext);
    const [address, setAddress] = useState(null);
    const [latLng, setLatLng] = useState({});

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: config.GOOGLE_API_KEY,
        libraries
    })





    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.653225, lng: () => -79.383186 },
            radius: 200 * 1000,
        },
    });



    useEffect(() => {
        setForward(false);
        initMap();
    }, [])

    const initMap = () => {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 25.276987, lng: 55.296249 },
            zoom: 15
        });

        let service = new google.maps.places.PlacesService(map);
        let request = {
            location: new google.maps.LatLng(43.653225, -79.383186),
            radius: 500,
            type: ['restaurant']
        };
    
        service.nearbySearch(request, function(results, status, pagetoken) {
            console.log(results.length);
            for(let i = 0; i < results.length; i++) {
                console.log(results[i].name, results[i].types)
            }
            if(pagetoken.hasNextPage) {
                pagetoken.nextPage();
            }
        })
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submitted');
        console.log(latLng);
        console.log(address);
        handleSetLocation(latLng, address);
        // setForward(true);


        // ExtApiService.getLocation(location)
        //     .then(loc => {
        //         let lat = loc.data[0].latitude;
        //         let long = loc.data[0].longitude;

        //         let latLong = lat + ',' + long;
        //         handleSetLocation(latLong, location);
        //         setForward(true);
        //     })
    }

    if (forward) {
        return <Redirect to='qb-activity'></Redirect>
    }

    return (
        <div className="form-container">
            <h4 className="mb-10 text-center">Get Started!</h4>
            <form id="home-form" onSubmit={handleSubmit}>
                {/* <input
                    type="text"
                    className="location-input pad-5"
                    placeholder="Enter city here."
                    onChange={e => setLocation(e.target.value)}
                    required
                /> */}

                <div>
                    <Combobox
                        onSelect={async (address) => {
                            setValue(address, false);
                            clearSuggestions();
                            try {
                                const results = await getGeocode({ address });
                                const { lat, lng } = await getLatLng(results[0]);
                                const latLngObj = { lat: lat, lng: lng };
                                
                                setLatLng(latLngObj);
                                setAddress(address);
                            } catch (e) {
                                console.log('error!')
                            }
                        }}
                    >
                        <ComboboxInput
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                            disabled={!ready}
                            placeholder='Enter an address'
                            className='search'
                        />
                        <ComboboxPopover>
                            {status === 'OK' && data.map(({ id, description }, i) => <ComboboxOption key={i} value={description} />)}
                        </ComboboxPopover>
                    </Combobox>
                </div>

                <button type="submit" className="location-button pad-5">Start</button>


            </form>

            <div id='map'></div>
            {/* <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
            ></GoogleMap> */}
        </div>

        
    )
}

export default LocationForm;