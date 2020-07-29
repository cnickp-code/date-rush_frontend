import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MealItem from '../../components/MealItem/MealItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import CategorySelect from '../../components/CategorySelect/CategorySelect';

class MealPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">STEP 2A / What to Eat?</h2>

                    <CategorySelect />

                    <div className="button-container">
                        <button className="prev-next-button pad-5"> {"<<"} Prev</button>
                        <button className="prev-next-button pad-5">Next {">>"}</button>
                    </div>
                </section>

                <section>
                    <MealItem />

                    <div className="add-button-container mt-20 mb-20">
                        <button className="add-button pad-5 center">Add To Date</button>
                    </div>

                    <QuickBuildTracker />
                </section>
            </main>
        )
    }
}

export default MealPage;