import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MealItem from '../../components/MealItem/MealItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import ExtApiService from '../../services/external-api-service';
import DRContext from '../../context/DRContext';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';

class MealPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            meal: null,
            category: null,
            restaurants: null,
        }
    }

    handleSetCategory = (category) => {
        this.setState({
            category
        })
    }

    handleRandomMeal = () => {
        ExtApiService.getMeal()
            .then(meal => {
                this.setState({
                    loading: false,
                    meal
                })
            })
    }

    handleAddMeal = () => {
        this.context.handleSetDateMeal(this.state.meal.meals[0].idMeal);  
    }

    componentDidMount() {
        ExtApiService.getMeal()
            .then(meal => {
                this.setState({
                    loading: false,
                    meal
                })
            })

        // ExtApiService.getPlacesByLocation(this.context.latLong, 'restaurant')
        //     .then(restaurants => {
        //         console.log(restaurants);
        //     })
    }

    render() {
        let categoryArray = ['In', 'Out']

        console.log(this.state.meal);

        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">STEP 2 / What to Eat?</h2>

                    <CategorySelect onCategorySelect={this.handleSetCategory} categories={categoryArray} />

                    <div className="button-container">
                        {/* <button 
                        className="prev-next-button pad-5 item-btn"
                        onClick={this.handlePrev}> {"<<"} Prev</button>

                        <button 
                        className="prev-next-button pad-5 item-btn" 
                        onClick={this.handleNext}>Next {">>"}</button> */}

                        <button
                        className="prev-next-button pad-5 item-btn"
                        onClick={this.handleRandomMeal}
                        >Next Meal</button>
                    </div>
                </section>

                <section>
                    {!this.state.loading && <MealItem meal={this.state.meal.meals[0]} />}

                    <div className="add-button-container mt-20 mb-20">
                        <button 
                        className="add-button pad-5 center item-btn"
                        onClick={this.handleAddMeal}
                        >Add To Date</button>
                    </div>

                    <QuickBuildTracker />
                </section>

                <RestaurantItem />
            </main>
        )
    }
}

export default MealPage;