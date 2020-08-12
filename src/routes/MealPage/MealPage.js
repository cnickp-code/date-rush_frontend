import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MealItem from '../../components/MealItem/MealItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import ExtApiService from '../../services/external-api-service';
import DRContext from '../../context/DRContext';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import { Spring } from 'react-spring/renderprops';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

class MealPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            forward: false,
            loading: true,
            catPicked: false,
            selectedCategory: null,
            meal: null,
            in: false,
            out: false,
            restaurants: [],
            restaurant: {},
        }
    }

    handleSetCategory = (category) => {
        console.log(category)
        if (category === 'In') {
            this.setState({
                in: true,
                out: false,
                catPicked: true,
                selectedCategory: category
            })
        } else {
            const randIndex = Math.floor(Math.random() * Math.floor(this.state.restaurants.length - 1));
            const restaurant = this.state.restaurants[randIndex].restaurant;

            this.setState({
                restaurant,
                in: false,
                out: true,
                catPicked: true,
                selectedCategory: category
            })
        }
    }

    handleRandomMeal = () => {
        if (this.state.in) {
            ExtApiService.getMeal()
                .then(meal => {
                    this.setState({
                        loading: false,
                        meal
                    })
                })
        } else {
            const randIndex = Math.floor(Math.random() * Math.floor(this.state.restaurants.length - 1));
            const restaurant = this.state.restaurants[randIndex].restaurant;

            this.setState({
                restaurant,
            })
        }

    }

    handleAddMeal = () => {
        let mealObj;
        if (this.state.in) {
            mealObj = {
                id: this.state.meal.meals[0].idMeal,
                type: 'In',
            }
            this.context.handleSetDateMeal(mealObj);
        } else {
            mealObj = {
                id: this.state.restaurant.id,
                type: 'Out',
            }
            this.context.handleSetDateMeal(mealObj);
        }

        this.context.handleSetDateStep('Drink');

        // this.setState({
        //     forward: true
        // })

    }



    componentDidMount() {

        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/home'></Redirect>
        }

        ExtApiService.getMeal()
            .then(meal => {
                this.setState({
                    loading: false,
                    meal
                })
            })

        let i = 0;
        while (i <= 5) {
            ExtApiService.getRestaurantsByLocation(this.context.latLong.lat, this.context.latLong.lng, i, 2000)
                .then(results => {
                    if (this.state.restaurants.length > 0) {
                        this.setState({
                            restaurants: [...this.state.restaurants, ...results.restaurants]
                        })
                    } else {
                        this.setState({
                            restaurants: results.restaurants
                        })
                    }

                })
            i++;
        }

    }

    render() {

        let categoryArray = ['In', 'Out']

        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/'></Redirect>
        }

        if (this.state.forward) {
            return <Redirect to='/qb-drinks'></Redirect>
        }

        console.log(this.state.meal);
        console.log(this.state.restaurants);


        return (
            <>
                <section>
                    <h2 className="summary-title center text-center mb-10 mt-10">STEP 2 / What to Eat?</h2>

                    <div className="page-location-container center">
                        <p className="text-center"><i class="fas fa-map-marked-alt"></i> {' '} {this.context.location}</p>
                    </div>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ delay: 500, duration: 700 }}
                    >
                        {props => (
                            <div style={props}>
                                <CategorySelect selectedCategory={this.state.selectedCategory} onCategorySelect={this.handleSetCategory} categories={categoryArray} />
                            </div>
                        )}
                    </Spring>

                    {this.state.catPicked && <div className="button-container">
                        {/* <button 
                        className="prev-next-button pad-5 item-btn"
                        onClick={this.handlePrev}> {"<<"} Prev</button>

                        <button 
                        className="prev-next-button pad-5 item-btn" 
                        onClick={this.handleNext}>Next {">>"}</button> */}

                        <button
                            className="prev-next-button pad-5 item-btn"
                            onClick={this.handleRandomMeal}
                        ><i class="fas fa-dice "></i></button>
                    </div>}
                </section>

                <section>
                    {!this.state.loading && this.state.in &&
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ delay: 500 }}
                        >
                            {props => (
                                <div style={props}>
                                    <MealItem meal={this.state.meal.meals[0]} />
                                </div>
                            )}
                        </Spring>

                    }

                    {!this.state.loading && this.state.out &&
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ delay: 500 }}
                        >
                            {props => (
                                <div style={props}>
                                    <RestaurantItem restaurant={this.state.restaurant} />

                                </div>
                            )}
                        </Spring>
                    }

                    {this.state.catPicked && <div className="add-button-container mt-20 mb-20">
                        <button
                            className="add-button pad-5 center item-btn"
                            onClick={this.handleAddMeal}
                        >Add To Date</button>
                    </div>}

                    {/* <QuickBuildTracker /> */}
                </section>


            </>
        )
    }
}

export default MealPage;