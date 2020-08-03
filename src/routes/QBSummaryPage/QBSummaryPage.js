import React from 'react';
import SummaryActivityItem from '../../components/SummaryItem/SummaryActivityItem';
import SummaryDrinkItem from '../../components/SummaryItem/SummaryDrinkItem';
import SummaryMealItem from '../../components/SummaryItem/SummaryMealItem';
import SummaryMovieItem from '../../components/SummaryItem/SummaryMovieItem';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';

const QBSummaryPage = () => {

    return (
        <main >
            <Header />
            <Nav />
            <section>
                <h2 className="text-center mb-10 mt-10">Summary</h2>
                <SummaryActivityItem />
                <SummaryMealItem />
                <SummaryDrinkItem />
                <SummaryMovieItem />

                <div className="add-button-container mt-20 mb-20">
                    <button className="add-button pad-5 center">Save Date</button>
                </div>

                <QuickBuildTracker />
            </section>
        </main>
    )

}

export default QBSummaryPage;