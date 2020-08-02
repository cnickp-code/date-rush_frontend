import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import LocationForm from '../../components/LocationForm/LocationForm';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import DRContext from '../../context/DRContext';

class HomePage extends React.Component {
    static contextType = DRContext;

    render() {
        return (
            <main>
                {this.context.loading && <LoadingOverlay />}
                <Header />
                <Nav />
                <section>
                    <h2 className="text-center mb-10 mt-10">Welcome!</h2>
                    <div className="home-container">
                        <h3 className="text-center mb-10">Build a date in 4 easy steps!</h3>
                        <h4 className="mb-10">Step 1: What to do?</h4>
                        <h4 className="mb-10">Step 2: What to eat?</h4>
                        <h4 className="mb-10">Step 3: What to drink?</h4>
                        <h4 className="mb-10">Step 4: What to watch?</h4>

                        <LocationForm />

                    </div>

                </section>
            </main>
        )
    }
}

export default HomePage;