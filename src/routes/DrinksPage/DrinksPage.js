import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import DrinkItem from '../../components/DrinkItem/DrinkItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import ExtApiService from '../../services/external-api-service';
import DRContext from '../../context/DRContext';
import { Spring } from 'react-spring/renderprops';

class DrinksPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            forward: false,
            loading: true,
            alcDrinks: [],
            nonAlcDrinks: [],
            drink: null,
            category: null,
            showBool: true,
        }
    }

    handleSetCategory = (category) => {
        if (category === 'Alcoholic') {
            // let alcDrinks = this.state.alcDrinks;
            // let randIndex = Math.floor(Math.random() * Math.floor(alcDrinks.length-1));
            // let drink = alcDrinks[randIndex];

            // ExtApiService.getDrinkById(drink.idDrink)
            //     .then(drinks => {
            //         let drink = drinks.drinks[0];
            //         console.log(drinks)
            //         this.setState({
            //             drink,
            //             category
            //         })
            //     })

            ExtApiService.getAlcDrinks()
                .then(drinks => {
                    this.setState({
                        drink: drinks.drinks[0],
                        category
                    })
                })
        } else {
            let nonAlcDrinks = this.state.nonAlcDrinks;
            let randIndex = Math.floor(Math.random() * Math.floor(nonAlcDrinks.length - 1));
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

    handleToggleShow = () => {
        this.setState({
            showBool: false,
        })
    }

    handleRandomDrink = () => {
        console.log('handleRandomDrink reached');

        ExtApiService.getAlcDrinks()
            .then(drinks => {
                console.log(drinks);
                this.setState({
                    showBool: true,
                    drink: drinks.drinks[0]
                })
            })

        // if(this.state.category === 'Alcoholic') {
        // let alcDrinks = this.state.alcDrinks;
        // let randIndex = Math.floor(Math.random() * Math.floor(alcDrinks.length-1));
        // let drink = alcDrinks[randIndex];
        // console.log(randIndex);

        // ExtApiService.getDrinkById(drink.idDrink)
        //     .then(drinks => {
        //         let drink = drinks.drinks[0];
        //         console.log(drinks)
        //         this.setState({
        //             drink
        //         })
        //     })
        //     ExtApiService.getAlcDrinks()
        //     .then(drinks => {
        //         this.setState({
        //             drink: drinks.drinks[0]
        //         })
        //     })
        // } else {
        //     let nonAlcDrinks = this.state.nonAlcDrinks;
        //     let randIndex = Math.floor(Math.random() * Math.floor(nonAlcDrinks.length-1));
        //     let drink = nonAlcDrinks[randIndex];
        //     console.log(randIndex);

        //     ExtApiService.getDrinkById(drink.idDrink)
        //         .then(drinks => {
        //             let drink = drinks.drinks[0]
        //             this.setState({
        //                 drink
        //             })
        //         })
        // }
    }

    handleAddDrink = () => {
        this.context.handleSetDateDrink(this.state.drink.idDrink);
        this.context.handleSetDateStep('Movie');
        // this.setState({
        //     forward: true
        // })
    }

    componentDidMount() {
        ExtApiService.getAlcDrinks()
            .then(drinks => {
                console.log(drinks);
                this.setState({
                    loading: false,
                    drink: drinks.drinks[0]
                })
            })

        // ExtApiService.getNonAlcDrinks()
        //     .then(drinks => {
        //         this.setState({
        //             loading: false,
        //             nonAlcDrinks: drinks.drinks
        //         })
        //     })
    }

    render() {
        // let categoryArray = ['Alcoholic', 'Non-Alcoholic'];
        console.log(this.state.alcDrinks);
        console.log(this.state.nonAlcDrinks);
        console.log(this.state.drink);

        let { showBool } = this.state;

        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/home'></Redirect>
        }
        if (this.state.forward) {
            return <Redirect to='/qb-movies'></Redirect>
        }

        return (
            <>
                <section>
                    <h2 className="summary-title center text-center mb-10 mt-10">STEP 3 / What to Drink?</h2>

                    <div className="page-location-container center">
                        <p className="text-center"><i class="fas fa-map-marked-alt"></i> {' '} {this.context.location}</p>
                    </div>

                    {/* <CategorySelect onCategorySelect={this.handleSetCategory} categories={categoryArray}/> */}

                    {!this.state.loading && <div className="button-container">
                        {/* <button className="prev-next-button pad-5"> {"<<"} Prev</button>
                        <button className="prev-next-button pad-5">Next {">>"}</button> */}
                        <button
                            className="prev-next-button pad-5 item-btn"
                            onClick={this.handleToggleShow}
                        ><i class="fas fa-dice "></i></button>
                    </div>}
                </section>

                <section>
                    {!this.state.loading && showBool &&
                        <Spring
                            from={{ transform: 'translate3d(-100%, 0, 0)' }}
                            to={{ transform: 'translate3d(0%, 0, 0)' }}
                            config={{ duration: 300 }}
                        >
                            {props => (
                                <div style={props}>
                                    <DrinkItem drink={this.state.drink} />
                                </div>

                            )}
                        </Spring>

                    }

                    {!this.state.loading && !showBool &&
                        <Spring
                            from={{ transform: 'translate3d(0%, 0, 0)' }}
                            to={{ transform: 'translate3d(100%, 0, 0)' }}
                            config={{ duration: 300 }}
                            onRest={this.handleRandomDrink}
                        >
                            {props => (
                                <div style={props}>
                                    <DrinkItem drink={this.state.drink} />
                                </div>

                            )}
                        </Spring>

                    }

                    {!this.state.loading && <div className="add-button-container mt-20 mb-20">
                        <button
                            className="add-button pad-5 center item-btn"
                            onClick={this.handleAddDrink}
                        >Add To Date</button>
                    </div>}

                    {/* <QuickBuildTracker /> */}
                </section>
            </>
        )
    }
}

export default DrinksPage;