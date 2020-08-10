import React from 'react';
import { useContext, useState, useEffect } from 'react';
import ActivityItem from '../../components/ActivityItem/ActivityItem';
import MealItem from '../../components/MealItem/MealItem';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import DrinkItem from '../../components/DrinkItem/DrinkItem';
import MovieItem from '../../components/MovieItem/MovieItem';
import DRContext from '../../context/DRContext';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';


const DateSummaryPage = () => {

    const { summaryDate } = useContext(DRContext);
    const [mealBool, setMealBool] = useState(true)

    useEffect(() => {


        if(summaryDate.meal_type === 'Out') {
            setMealBool(false);
        }
    }, [])


    return (
        <main>
            <Header />
            <Nav />
            <section>
                <h2 className="text-center mb-10 mt-10">Summary</h2>
                <div className="add-button-container mt-20 mb-20">
                    <button className="add-button pad-5 center">Go Back</button>
                </div>
                <ActivityItem date={summaryDate}/>
                <MealItem date={summaryDate}/>
                <RestaurantItem date={summaryDate}/>
                <DrinkItem date={summaryDate}/>
                <MovieItem date={summaryDate}/>

                <div className="add-button-container mt-20 mb-20">
                    <button className="add-button pad-5 center">Go Back</button>
                </div>

            </section>

        </main>
    )

}

export default DateSummaryPage