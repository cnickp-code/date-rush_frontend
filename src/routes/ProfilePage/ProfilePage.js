import React from 'react';
import ProfileDateSummary from '../../components/ProfileDateSummary/ProfileDateSummary';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';

class ProfilePage extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">My Dates</h2>
                    <ProfileDateSummary />
                    <ProfileDateSummary />
                    <ProfileDateSummary />

                </section>

            </main>
        )
    }
}

export default ProfilePage;