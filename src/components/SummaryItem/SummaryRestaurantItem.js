import React from 'react';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

class SummaryRestaurantItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            restaurant: null
        }
    }

    componentDidMount() {
        ExtApiService.getRestaurantById(this.context.summaryDate.meal_id)
            .then(restaurant => {
                this.setState({
                    restaurant: restaurant,
                    loading: false
                })
            })
    }

    render() {

        let restaurantMain = this.state.restaurant;
        let featuredImg;
        let avgCost;
        let ratingEl;
        let stars;

        if (restaurantMain) {
            restaurantMain = this.state.restaurant;
            featuredImg = restaurantMain.featured_image;
            avgCost = <p className="text-center">Avg Cost for Two: Not Available</p>
            ratingEl = <p className="text-center"> Rating: Not Available</p>

            if (restaurantMain.featured_image === '' || restaurantMain.featured_image === null) {
                featuredImg = "https://www.clipartkey.com/mpngs/m/77-776665_lunch-clipart-lunch-date-couple-date-night-cartoon.png"
            }
            if (restaurantMain.average_cost_for_two > 0) {
                avgCost = <p className="text-center">Avg Cost for Two: {'$'}{restaurantMain.average_cost_for_two}</p>
            }
            if (restaurantMain.user_rating.aggregate_rating === 0) {
                ratingEl = <p className="text-center"> Rating: {restaurantMain.user_rating.aggregate_rating} out of 5</p>
            }


            if (restaurantMain.user_rating.aggregate_rating) {
                stars = [];
                let ratingSplit = restaurantMain.user_rating.aggregate_rating.toString().split('.');
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
        }

        return (
            <div className="main-container">
                {!this.state.loading && this.state.restaurant &&
                    <>
                        <h3 className="text-center mb-10">{restaurantMain.name}</h3>
                        <div className="flex-container">
                            <div className="left-container">
                                <p className="text-center">
                                    <img src={featuredImg} className="preview-image mb-10" />
                                </p>
                            </div>
                            <div className="right-container">
                                <p className="text-center">{restaurantMain.location.address}</p>
                                <p className="text-center">Phone Number: {restaurantMain.phone_numbers}</p>

                                <div className="divider center mb-20 mt-20"></div>

                                <p className="text-center">Cuisine Type: {restaurantMain.cuisines}</p>

                                <div className="divider center mb-20 mt-20"></div>

                                <p className="text-center">Price Range: {'$'.repeat(restaurantMain.price_range)}</p>
                                {avgCost}

                                <div className="divider center mb-20 mt-20"></div>

                                <div className="rating-container">
                                    {stars}
                                </div>
                                <div className="divider center mb-20 mt-20"></div>

                                <div className="flex-center flex-col">
                                    <a href={restaurantMain.url} className="recipe-link center" target="_blank">See Full Details</a>
                                    <p className="text-center fs-xs mt-5"><i>Powered By Zomato</i></p>
                                </div>
                            </div>

                        </div>



                    </>}

            </div>
        )
    }
}

export default SummaryRestaurantItem;