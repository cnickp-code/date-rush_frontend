import React from 'react';
import { NavLink } from 'react-router-dom';

class MealItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let recipeArray = this.props.meal.strInstructions.split('! ').join('! ').split('.) ').join('.) ').split('. ')

        // let i = 1;
        // let ingredientArray = [];

        // while(this.props.meal[`strIngredient${i}`] !== "") {
        //     let ingredientString = this.props.meal[`strIngredient${i}`] + ': ' + this.props.meal[`strMeasure${i}`]
        //     ingredientArray.push(ingredientString);
        //     i++;
        // }

        // console.log(ingredientArray);

        // ingredientArray = ingredientArray.map((entry, i) => {
        //     return <p key={i} className="mb-5">{entry}</p>
        // })

        // recipeArray = recipeArray.map((entry, i) => {
        //     return <p key={i} className="mb-5">{i+1}{'.) '}{entry}{'.'}</p>
        // })

        return (
            <div className="main-container">
                <h3 className="text-center mb-10">{this.props.meal.strMeal}</h3>
                <p className="text-center">
                    <img src={this.props.meal.strMealThumb} className="preview-image mb-10" />
                </p>

                <p className="text-center mb-20">Category: {this.props.meal.strArea}</p>
                {/* <p className="text-justify mt-10 mb-10">Ingredients:</p>
                <ul>
                    {ingredientArray}
                </ul>
                <p className="text-justify">Recipe:</p>
                <ul>
                    {recipeArray}
                </ul> */}

                <div className="flex-center">
                    <a href={this.props.meal.strSource} className="recipe-link center" target="_blank">View Recipe</a>
                </div>

            </div>
        )
    }
}

export default MealItem;