import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import LocationForm from '../../components/LocationForm/LocationForm';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import DRContext from '../../context/DRContext';
import SetNameOverlay from '../../components/SetNameOverlay/SetNameOverlay';
import { Spring, Keyframes, config } from 'react-spring/renderprops';
import ConfirmationOverlay from '../../components/ConfirmationOverlay/ConfirmationOverlay';

// const Content = Keyframes.Spring(async next => {
//     let i = 0;
//     while(i < 2) {
//         await next({
//             from: { opacity: 0, transform: 'translate3d(0, -40%, 0)' },
//             opacity: 1,
//             transform: 'translate3d(0, 0%, 0)',
//             config: config.wobbly
//         })

//         i++;
//     }
// })

class HomePage extends React.Component {
    static contextType = DRContext;

    // handleAddShow = () => {
    //     this.context.handleShowNameOverlay();
    // }

    render() {
        return (
            <main>
                {/* <ConfirmationOverlay /> */}
                {this.context.loading && <LoadingOverlay />}
                {this.context.nameOverlayShow && <SetNameOverlay />}
                <Header />
                {/* <Nav /> */}

                <div className="home-top-wrapper">
                    <div className="home-container">
                        <h2 className="mb-10 mt-10">Welcome</h2>
                        <h3 className="mb-10">Build a date in 4 easy steps!</h3>
                    </div>

                    <Spring
                        from={{ opacity: 0, }}
                        to={{ opacity: 1,  }}
                        config={{ delay: 1500, duration: 1000 }}
                    >
                        {props => (

                            <div style={props} className="location-container">
                                <LocationForm />
                            </div>

                        )}
                    </Spring>
                </div>

                <section>

                    <div className="home-mid-wrapper">
                        <div class="step-card-container">
                            <Spring
                                from={{ opacity: 0, transform: 'translate3d(0, -40%, 0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0, 0%, 0)' }}
                                config={{ delay: 500, duration: 500 }}
                            >
                                {props => (
                                    <div style={props} className="home-step-card">
                                        <h4 className="mb-10">What to do?</h4>
                                        <p><i className="fas fa-tree home-step-icon"></i></p>
                                    </div>
                                )}
                            </Spring>

                            <Spring
                                from={{ opacity: 0, transform: 'translate3d(0, -40%, 0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0, 0%, 0)' }}
                                config={{ delay: 750, duration: 500 }}
                            >
                                {props => (
                                    <div style={props} className="home-step-card">
                                        <h4 className="mb-10">What to eat?</h4>
                                        <p><i className="fas fa-hamburger home-step-icon"></i></p>
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ opacity: 0, transform: 'translate3d(0, -40%, 0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0, 0%, 0)' }}
                                config={{ delay: 1000, duration: 500 }}
                            >
                                {props => (
                                    <div style={props} className="home-step-card">
                                        <h4 className="mb-10">What to drink?</h4>
                                        <p><i className="fas fa-cocktail home-step-icon"></i></p>
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ opacity: 0, transform: 'translate3d(0, -40%, 0)' }}
                                to={{ opacity: 1, transform: 'translate3d(0, 0%, 0)' }}
                                config={{ delay: 1250, duration: 500 }}
                            >
                                {props => (
                                    <div style={props} className="home-step-card">
                                        <h4 className="mb-10">What to watch?</h4>
                                        <p><i className="fas fa-tv home-step-icon"></i></p>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>



                    {/* <div className="bottom-spacer">

                    </div> */}

                </section>
            </main >
        )
    }
}

export default HomePage;