import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import LocationForm from '../../components/LocationForm/LocationForm';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import DRContext from '../../context/DRContext';
import SetNameOverlay from '../../components/SetNameOverlay/SetNameOverlay';

class HomePage extends React.Component {
    static contextType = DRContext;

    // handleAddShow = () => {
    //     this.context.handleShowNameOverlay();
    // }

    render() {
        return (
            <main>
                {this.context.loading && <LoadingOverlay />}
                {this.context.nameOverlayShow && <SetNameOverlay />}
                <Header />
                <Nav />
                <section>

                    <div className="home-top-wrapper">
                        <div className="home-container">
                            <h2 className="text-center mb-10 mt-10">Welcome!</h2>
                            <h3 className="text-center mb-10">Build a date in 4 easy steps!</h3>
                        </div>
                    </div>


                    <div className="home-mid-wrapper">
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
                    </div>


                    <div className="home-container">
                        <LocationForm />
                    </div>

                    <div className="bottom-spacer">

                    </div>

                </section>
            </main>
        )
    }
}

export default HomePage;