import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ActivityItem from '../../components/ActivityItem/ActivityItem';
import QuickBuildTracker from '../../components/QuickBuildTracker/QuickBuildTracker';
import { Redirect } from 'react-router-dom';
import DRContext from '../../context/DRContext';
import { Spring } from 'react-spring/renderprops'

class ActivityPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            forward: false,
            loading: true,
            activity: null,
            show: true
        }
    }

    handleRandomActivity = () => {
        const randIndex = Math.floor(Math.random() * Math.floor(this.context.places.length - 1));

        const activity = this.context.places[randIndex];

        this.setState({
            show: true,
            loading: false,
            activity
        })
    }

    handleAddActivity = () => {
        this.context.handleSetDateActivity(this.state.activity.id);
        this.context.handleSetDateStep('Meal');
        // this.setState({
        //     forward: true
        // })
    }

    handleToggleShow = () => {
        this.setState({
            show: false
        })
    }

    componentDidMount() {
        const randIndex = Math.floor(Math.random() * Math.floor(this.context.places.length - 1));

        const activity = this.context.places[randIndex];

        this.setState({
            loading: false,
            activity
        })
    }

    render() {
        if (this.context.places.length < 1 || this.context.location === null || this.context.latLong === null) {
            return <Redirect to='/home'></Redirect>
        }
        // if(this.state.forward) {
        //     return <Redirect to='/qb-meals'></Redirect>
        // }
        console.log(this.context.places);
        console.log(this.state.activity);

        return (
            // <main>
            //     <Header />
            //     <Nav />
            <>
                <section>
                    <h2 className="summary-title center text-center mb-10 mt-10">STEP 1 / What to do?</h2>

                    <div className="page-location-container center">
                        <p className="text-center"><i class="fas fa-map-marked-alt"></i> {' '} {this.context.location}</p>
                    </div>
                    <div className="button-container">
                        <button
                            className="prev-next-button pad-5 item-btn"
                            onClick={this.handleToggleShow}
                        ><i class="fas fa-dice "></i></button>
                    </div>
                </section>

                <section>
                    {!this.state.loading && this.state.show &&
                        <Spring
                            from={{ transform: 'translate3d(-100%, 0, 0)' }}
                            to={{ transform: 'translate3d(0%, 0, 0)' }}
                            config={{ duration: 300 }}
                        >
                            {props => (
                                <div style={props}>
                                    <ActivityItem activity={this.state.activity} />
                                </div>


                            )}
                        </Spring>
                    }

                    {!this.state.loading && !this.state.show &&
                        <Spring
                            from={{ transform: 'translate3d(0%, 0, 0)' }}
                            to={{ transform: 'translate3d(100%, 0, 0)' }}
                            config={{ duration: 300 }}
                            onRest={this.handleRandomActivity}
                        >
                            {props => (
                                <div style={props}>
                                    <ActivityItem activity={this.state.activity} />
                                </div>


                            )}
                        </Spring>

                    }

                    <div className="add-button-container mt-20 mb-20">
                        <button
                            className="add-button pad-5 center item-btn"
                            onClick={this.handleAddActivity}
                        >Add To Date</button>
                    </div>

                    {/* <QuickBuildTracker /> */}
                </section>
            </>
            // </main>
        )
    }
}

export default ActivityPage;