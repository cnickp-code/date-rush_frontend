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
                    
                    <div className="home-container">
                        <h2 className="text-center mb-10 mt-10">Welcome!</h2>
                        <h3 className="text-center mb-10">Build a date in 4 easy steps!</h3>
                    </div>

                    <div class="step-card-container">
                            <div className="home-step-card">
                                <h4 className="mb-10">What to do?</h4>
                                <p><i className="fas fa-tree home-step-icon"></i></p>
                            </div>
                            <div className="home-step-card">
                                <h4 className="mb-10">What to eat?</h4>
                                <p><i className="fas fa-hamburger home-step-icon"></i></p>
                            </div>
                            <div className="home-step-card">
                                <h4 className="mb-10">What to drink?</h4>
                                <p><i className="fas fa-cocktail home-step-icon"></i></p>
                            </div>
                            <div className="home-step-card">
                                <h4 className="mb-10">What to watch?</h4>
                                <p><i className="fas fa-tv home-step-icon"></i></p>
                            </div>
                        </div>

                    <div className="home-container">
                        <LocationForm />
                    </div>

                </section>
            </main>
        )
    }
}

export default HomePage;