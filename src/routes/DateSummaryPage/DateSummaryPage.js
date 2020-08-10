import React from 'react';
import { useContext, useState, useEffect } from 'react';
import ActivityItem from '../../components/ActivityItem/ActivityItem';
import MealItem from '../../components/MealItem/MealItem';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import DrinkItem from '../../components/DrinkItem/DrinkItem';
import MovieItem from '../../components/MovieItem/MovieItem';
import DRContext from '../../context/DRContext';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ExtApiService from '../../services/external-api-service';
import { Redirect } from 'react-router-dom';
import SummaryActivityItem from '../../components/SummaryItem/SummaryActivityItem';
import { render } from '@testing-library/react';

const google = window.google = window.google ? window.google : {};

class DateSummaryPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            dateActivity: {},
            dateMeal: {},
            dateDrink: {},
            dateShow: {},
            mealBool: true
        }
    }



    // const { summaryDate } = useContext(DRContext);
    // const [dateActivity, setDateActivity] = useState(null);
    // const [dateMeal, setDateMeal] = useState(null);
    // const [dateDrink, setDateDrink] = useState(null);
    // const [dateShow, setDateShow] = useState(null);
    // const [mealBool, setMealBool] = useState(true);
    // const [loading, setLoading] = useState(true);


    componentDidMount() {
        // initMap();

        if (this.context.summaryDate.meal_type === 'Out') {
            ExtApiService.getRestaurantById(this.context.summaryDate.meal_id)
                .then(restaurant => {
                    this.setState({
                        dateMeal: restaurant,
                        mealBool: false
                    })
                })
        } else if (this.context.summaryDate.meal_type === 'In') {
            ExtApiService.getMealById(Number(this.context.summaryDate.meal_id))
                .then(results => {
                    console.log(results.meals[0]);
                    this.setState({
                        dateMeal: results.meals[0]
                    })
                })
        }

        ExtApiService.getDrinkById(Number(this.context.summaryDate.drink_id))
            .then(results => {
                console.log(results.drinks[0]);
                this.setState({
                    datDrink: results.drinks[0]
                })
            })

        if (this.context.summaryDate.show_type === 'Movie') {
            ExtApiService.getMovieById(this.context.summaryDate.show_id)
                .then(show => {
                    console.log(show);
                    this.setState({
                        dateShow: show
                    })
                })
        } else if (this.context.summaryDate.show_type === 'TV') {
            ExtApiService.getTvShowById(this.context.summaryDate.show_id)
                .then(show => {
                    console.log(show);
                    this.setState({
                        dateShow: show
                    })
                })
        }

    }







    // const initMap = () => {
    //     let map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: 43.653225, lng: -79.383186 },
    //         zoom: 15
    //     });
    //     let service = new google.maps.places.PlacesService(map);
    //     let request = {
    //         placeId: summaryDate.place_id
    //     }

    //     let placeObj = {};

    //     service.getDetails(request, function(results, status, pagetoken) {
    //         console.log(results);
    //         let latNum = results.geometry.location.lat();
    //         let lngNum = results.geometry.location.lng();
    //         let locationObj = { lat: latNum, lng: lngNum };
    //         let placeOpen = true;
    //         let placeRating = results.rating;
    //         let photoUrl = 'https://img.favpng.com/15/13/2/urban-park-cartoon-png-favpng-GyXzR7iKQadY6M60ED5b38UwK.jpg';

    //         placeObj = {
    //             id: results.place_id,
    //             name: results.name,
    //             photoUrl,
    //             types: results.types,
    //             location: locationObj,
    //             address: results.vicinity,
    //             isOpen: placeOpen,
    //             rating: placeRating
    //         }

    //         setDateActivity(placeObj);
    //     })
    // }

    render() {
        console.log('---------------------');
        console.log('DATE SUMMARY ', this.context.summaryDate);
        console.log('SUMMARY ACTIVITY: ', this.state.dateActivity)
        console.log('SUMMARY MEAL: ', this.state.dateMeal)
        console.log('SUMMARY DRINK: ', this.state.dateDrink)
        console.log('SUMMARY SHOW: ', this.state.dateShow)

        // if(summaryDate === null) {
        //     return <Redirect to="/profile"></Redirect>
        // }

        // if (dateMeal && dateDrink && dateShow) {
        //     setLoading(false);
        // }
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">Summary</h2>
                    <div className="add-button-container mt-20 mb-20">
                        <button className="add-button pad-5 center">Go Back</button>
                    </div>

                    {!this.state.loading &&
                        <>
                            <SummaryActivityItem />
                            {this.state.mealBool && <MealItem meal={this.state.dateMeal} />}
                            {!this.state.mealBool && <RestaurantItem restaurant={this.state.dateMeal} />}
                            <DrinkItem drink={this.state.dateDrink} />
                            <MovieItem show={this.state.dateShow} />
                        </>}

                    <div className="add-button-container mt-20 mb-20">
                        <button className="add-button pad-5 center">Go Back</button>
                    </div>

                    <div id='map'></div>

                </section>

            </main>
        )
    }


}

export default DateSummaryPage