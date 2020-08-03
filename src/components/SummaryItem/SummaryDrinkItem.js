import React from 'react';
import DRContext from '../../context/DRContext';
import ExtApiService from '../../services/external-api-service';


class SummaryDrinkItem extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            drink: null
        }

    }

    componentDidMount() {
        console.log('mounted')
        ExtApiService.getDrinkById(Number(this.context.dateDrink))
            .then(results => {
                console.log(results.drinks[0]);
                this.setState({
                    drink: results.drinks[0],
                    loading: false
                })
            })
    }

    render() {

        console.log(this.state.drink);
        let i = 1;
        let ingredientArray = [];

        if (!this.state.loading) {
            while (this.state.drink[`strIngredient${i}`]) {
                let measure = 'Not Specified'
                if (this.state.drink[`strMeasure${i}`]) {
                    measure = this.state.drink[`strMeasure${i}`];
                }


                let ingredientString = this.state.drink[`strIngredient${i}`] + ': ' + measure
                ingredientArray.push(ingredientString);
                i++;
            }

            ingredientArray = ingredientArray.map((entry, i) => {
                return <p key={i} className="mb-5">{entry}</p>
            })
        }



        return (
            <div className="summary-container">
                <div className=" edit-container">
                    <i className="fas fa-edit"></i>
                </div>

                {!this.state.loading && <h3 className="text-center mb-10">{this.state.drink.strDrink}</h3>}

                {!this.state.loading && <p className="text-center">
                    <img src={this.state.drink.strDrinkThumb} className="preview-image mb-10" />
                </p>}

                <h4 className="mb-10">Ingredients:</h4>
                {ingredientArray}

                {!this.state.loading && <> <div className="divider center mb-20 mt-20"></div>
                <h4 className="mt-10 mb-10">Instructions:</h4>
                <p>{this.state.drink.strInstructions}</p> </>}

                <div className="flex-center">
                    {/* <a href={this.props.drink.strSource} className="recipe-link center" target="_blank">View Recipe</a> */}
                </div>
            </div>
        )
    }
}

export default SummaryDrinkItem;