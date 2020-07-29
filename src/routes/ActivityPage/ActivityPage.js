import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ActivityItem from '../../components/ActivityItem/ActivityItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';

class ActivityPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">STEP 1 / What to do?</h2>

                    <div className="button-container">
                        <button className="prev-next-button pad-5"> &lt&lt Prev</button>
                        <button className="prev-next-button pad-5">Next &gt&gt</button>
                    </div>
                </section>

                <section>
                    <ActivityItem />

                    <div className="add-button-container mt-20 mb-20">
                        <button className="add-button pad-5 center">Add To Date</button>
                    </div>

                    <QuickBuildTracker />
                </section>
            </main>
        )
    }
}

export default ActivityPage;