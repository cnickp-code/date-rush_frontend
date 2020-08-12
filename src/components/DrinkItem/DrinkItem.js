import React from 'react';

class DrinkItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let i = 1;
        let ingredientArray = [];

        while (this.props.drink[`strIngredient${i}`]) {
            let measure = 'Not Specified'
            if (this.props.drink[`strMeasure${i}`]) {
                measure = this.props.drink[`strMeasure${i}`];
            }


            let ingredientString = this.props.drink[`strIngredient${i}`] + ': ' + measure
            ingredientArray.push(ingredientString);
            i++;
        }

        ingredientArray = ingredientArray.map((entry, i) => {
            return <p key={i} className="mb-5">{entry}</p>
        })

        return (
            <div className="main-container">
                <h3 className="text-center mb-10">{this.props.drink.strDrink}</h3>
                <div className="flex-container">
                    <div className="left-container">
                        <p className="text-center">
                            <img src={this.props.drink.strDrinkThumb} className="preview-image mb-10" />
                        </p>
                    </div>
                    <div className="right-drink-container">
                        <h4 className="mb-10 mt-10 text-center">{this.props.drink.strAlcoholic}</h4>

                        <div className="divider center mb-20 mt-20"></div>

                        <h4 className="text-center mb-10 mt-10">Ingredients:</h4>
                        {ingredientArray}

                        <div className="divider center mb-20 mt-20"></div>

                        <h4 className="text-center mt-10 mb-10">Instructions:</h4>
                        <p>{this.props.drink.strInstructions}</p>

                        <div className="flex-center">
                            {/* <a href={this.props.drink.strSource} className="recipe-link center" target="_blank">View Recipe</a> */}
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default DrinkItem;