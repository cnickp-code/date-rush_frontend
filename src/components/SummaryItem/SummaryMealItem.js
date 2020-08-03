import React from 'react';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';

class SummaryMealItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            meal: null,
        }
    }

    componentDidMount() {
        console.log('meal mounted')
        if (this.context.dateMeal.type === 'In') {
            ExtApiService.getMealById(Number(this.context.dateMeal.id))
                .then(results => {
                    console.log(results.meals[0]);
                    this.setState({
                        meal: results.meals[0],
                        loading: false
                    })
                })
            // ExtApiService.getMealById(52905)
            //     .then(results => {
            //         console.log(results.meals[0]);
            //         this.setState({
            //             meal: results.meals[0]
            //         })
            //     })
        } else {
            ExtApiService.getRestaurantById(this.context.dateMeal.id)
                .then(restaurant => {
                    console.log(restaurant);
                    this.setState({
                        meal: restaurant,
                        loading: false
                    })
                })
        }

    }

    render() {
        console.log(this.context.dateMeal);
        return (
            <div className="summary-container">
                <div className=" edit-container">
                    <i className="fas fa-edit"></i>
                </div>
                
                {!this.state.loading && 
                <>
                    <h3 className="text-center mb-10">{this.state.meal.strMeal}</h3>
                    <p className="text-center">
                        <img src={this.state.meal.strMealThumb} className="preview-image mb-10" />
                    </p>

                    <p className="text-center mb-20">Category: {this.state.meal.strArea}</p>

                    <div className="flex-center">
                        <a href={this.state.meal.strSource} className="recipe-link center" target="_blank">View Recipe</a>
                    </div>
                </>}
            </div>
        )
    }
}

export default SummaryMealItem;