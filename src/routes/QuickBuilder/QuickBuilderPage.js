import React from 'react';
import ActivityPage from '../ActivityPage/ActivityPage';
import MealPage from '../MealPage/MealPage';
import DrinksPage from '../DrinksPage/DrinksPage';
import MoviesPage from '../MoviesPage/MoviesPage';
import DRContext from '../../context/DRContext';
import SetNameOverlay from '../../components/SetNameOverlay/SetNameOverlay';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import { Redirect } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class QuickBuilderPage extends React.Component {
    static contextType = DRContext;

    constructor(props) {
        super(props);
        this.state = {
            forward: false,
            activity: false,
            meal: false,
            drink: false,
            movie: false
        }
    }

    handleForward = () => {
        this.setState({
            forward: true
        })
    }

    render() {

        if (this.state.forward) {
            return <Redirect to='/profile'></Redirect>
        }

        let pageType;

        if (this.context.step === 'Activity') {
            pageType = (
                <Spring
                    from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    // config={{ duration: 1000 }}
                >
                    {props => (
                        <div style={props}>
                            <ActivityPage />
                        </div>
                        
                    )}
                    
                </Spring>

            )
        } else if (this.context.step === 'Meal') {
            pageType = (

                <MealPage />
            )
        } else if (this.context.step === 'Drink') {
            pageType = (

                <DrinksPage />

            )
        } else if (this.context.step === 'Movie') {
            pageType = (

                <MoviesPage handleForward={this.handleForward} />

            )
        }

        return (
            <main>
                {this.context.nameOverlayShow && <SetNameOverlay handleForward={this.handleForward} />}
                <Header />
                {/* <Nav /> */}
                {pageType}
            </main>
        )
    }
}

export default QuickBuilderPage;