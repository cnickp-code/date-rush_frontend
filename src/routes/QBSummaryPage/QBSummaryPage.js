import React from 'react';
import { useContext } from 'react';
import DRContext from '../../context/DRContext';
import { Redirect, Link } from 'react-router-dom';
import SummaryActivityItem from '../../components/SummaryItem/SummaryActivityItem';
import SummaryDrinkItem from '../../components/SummaryItem/SummaryDrinkItem';
import SummaryMealItem from '../../components/SummaryItem/SummaryMealItem';
import SummaryMovieItem from '../../components/SummaryItem/SummaryMovieItem';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';

const QBSummaryPage = () => {

    const { summaryDate } = useContext(DRContext);

    if (summaryDate === null) {
        return <Redirect to='/profile'></Redirect>
    }

    return (
        <main >
            <Header />
            <Nav />
            <section>

                <h2 className="text-center mb-10 mt-10 summary-title center">{summaryDate.name}</h2>

                <div className="add-button-container mt-20 mb-20">
                    <Link to="/profile">
                        <button className="add-button pad-5 center item-btn">Go Back</button>
                    </Link>

                </div>

                <SummaryActivityItem />
                <SummaryMealItem />
                <SummaryDrinkItem />
                <SummaryMovieItem />

                <div className="add-button-container mt-20 mb-20">
                    <Link to="/profile">
                        <button className="add-button pad-5 center item-btn">Go Back</button>
                    </Link>
                </div>

                {/* <QuickBuildTracker /> */}
            </section>
        </main>
    )

}

export default QBSummaryPage;