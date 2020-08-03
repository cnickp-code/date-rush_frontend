import React from 'react';
import DRContext from '../../context/DRContext';

class RestaurantItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.restaurant);
        let restaurantMain = this.props.restaurant
        let featuredImg = restaurantMain.featured_image;

        if (restaurantMain.featured_image === '' || restaurantMain.featured_image === null) {
            featuredImg = "https://www.clipartkey.com/mpngs/m/77-776665_lunch-clipart-lunch-date-couple-date-night-cartoon.png"
        }

        return (
            <div className="main-container">
                <h3 className="text-center mb-10">{restaurantMain.name}</h3>
                <p className="text-center">
                    <img src={featuredImg} className="preview-image mb-10" />
                </p>

                <p className="text-center">{restaurantMain.location.address}</p>
                <p className="text-center">Phone Number: {restaurantMain.phone_numbers}</p>

                <div className="divider center mb-20 mt-20"></div>

                <p className="text-center">Cuisine Type: {restaurantMain.cuisines}</p>

                <div className="divider center mb-20 mt-20"></div>

                <p className="text-center">Price Range: {'$'.repeat(restaurantMain.price_range)}</p>
                <p className="text-center">Avg Cost for Two: {'$'}{restaurantMain.average_cost_for_two}</p>

                <div className="divider center mb-20 mt-20"></div>

                <p className="text-center"> Rating: {restaurantMain.user_rating.aggregate_rating} out of 5</p>

                <div className="divider center mb-20 mt-20"></div>

                <div className="flex-center flex-col">
                    <a href={restaurantMain.url} className="recipe-link center" target="_blank">See Full Details</a>
                    <p className="text-center fs-xs mt-5"><i>Powered By Zomato</i></p>
                </div>

            </div>
        )
    }


}

export default RestaurantItem;