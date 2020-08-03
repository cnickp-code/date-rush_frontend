import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import DrinkItem from '../../components/DrinkItem/DrinkItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import ExtApiService from '../../services/external-api-service';
import DRContext from '../../context/DRContext';

class DrinksPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            alcDrinks: [],
            nonAlcDrinks: [],
            drink: null,
            category: null
        }
    }

    handleSetCategory = (category) => {
        if(category === 'Alcoholic') {
            let alcDrinks = this.state.alcDrinks;
            let randIndex = Math.floor(Math.random() * Math.floor(alcDrinks.length-1));
            let drink = alcDrinks[randIndex];

            ExtApiService.getDrinkById(drink.idDrink)
                .then(drinks => {
                    let drink = drinks.drinks[0];
                    console.log(drinks)
                    this.setState({
                        drink,
                        category
                    })
                })
        } else {
            let nonAlcDrinks = this.state.nonAlcDrinks;
            let randIndex = Math.floor(Math.random() * Math.floor(nonAlcDrinks.length-1));
            let drink = nonAlcDrinks[randIndex];

            ExtApiService.getDrinkById(drink.idDrink)
                .then(drinks => {
                    let drink = drinks.drinks[0]
                    this.setState({
                        drink,
                        category
                    })
                })
        }
    }

    handleRandomDrink = () => {
        console.log('handleRandomDrink reached');

        if(this.state.category === 'Alcoholic') {
            let alcDrinks = this.state.alcDrinks;
            let randIndex = Math.floor(Math.random() * Math.floor(alcDrinks.length-1));
            let drink = alcDrinks[randIndex];

            ExtApiService.getDrinkById(drink.idDrink)
                .then(drinks => {
                    let drink = drinks.drinks[0];
                    console.log(drinks)
                    this.setState({
                        drink
                    })
                })
        } else {
            let nonAlcDrinks = this.state.nonAlcDrinks;
            let randIndex = Math.floor(Math.random() * Math.floor(nonAlcDrinks.length-1));
            let drink = nonAlcDrinks[randIndex];

            ExtApiService.getDrinkById(drink.idDrink)
                .then(drinks => {
                    let drink = drinks.drinks[0]
                    this.setState({
                        drink
                    })
                })
        }
    }

    handleAddDrink = () => {
        this.context.handleSetDateDrink(this.state.drink.idDrink);
    }

    componentDidMount() {
        ExtApiService.getAlcDrinks()
            .then(drinks => {
                this.setState({
                    loading: false,
                    alcDrinks: drinks.drinks
                })
            })
        
        ExtApiService.getNonAlcDrinks()
            .then(drinks => {
                this.setState({
                    loading: false,
                    nonAlcDrinks: drinks.drinks
                })
            })
    }

    render() {
        let categoryArray = ['Alcoholic', 'Non-Alcoholic'];

        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/'></Redirect>
        }

        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">STEP 3 / What to Drink?</h2>

                    <CategorySelect onCategorySelect={this.handleSetCategory} categories={categoryArray}/>

                    {this.state.category && <div className="button-container">
                        {/* <button className="prev-next-button pad-5"> {"<<"} Prev</button>
                        <button className="prev-next-button pad-5">Next {">>"}</button> */}
                        <button
                        className="prev-next-button pad-5 item-btn"
                        onClick={this.handleRandomDrink}
                        >Next Drink</button>
                    </div>}
                </section>

                <section>
                    {this.state.category && <DrinkItem drink={this.state.drink} />}

                    {this.state.category && <div className="add-button-container mt-20 mb-20">
                        <button 
                        className="add-button pad-5 center item-btn"
                        onClick={this.handleAddDrink}
                        >Add To Date</button>
                    </div>}

                    <QuickBuildTracker />
                </section>
            </main>
        )
    }
}

export default DrinksPage;