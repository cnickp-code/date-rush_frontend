import React from 'react';

class RestaurantItem extends React.Component {
    render() {
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

            </div>
        )
    }
}

export default RestaurantItem;