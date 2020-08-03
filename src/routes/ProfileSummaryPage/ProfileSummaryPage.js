import React from 'react';
import SummaryActivityItem from '../../components/SummaryItem/SummaryActivityItem';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';

class ProfileSummaryPage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">Date Name</h2>
                    <SummaryActivityItem />
                    <SummaryActivityItem />
                    <SummaryActivityItem />
                    <SummaryActivityItem />

                    <div className="add-button-container mt-20 mb-20">
                        <button className="add-button pad-5 center">Go Back</button>
                    </div>

                    <QuickBuildTracker />
                </section>
            </main>
        )
    }
}

export default ProfileSummaryPage;