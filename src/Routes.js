import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/routes/HomePage/HomePage';
import ActivityPage from '../src/routes/ActivityPage/ActivityPage';
import MealPage from '../src/routes/MealPage/MealPage';
import DrinksPage from '../src/routes/DrinksPage/DrinksPage';
import MoviesPage from '../src/routes/MoviesPage/MoviesPage';
import ProfilePage from '../src/routes/ProfilePage/ProfilePage';
import QBSummaryPage from '../src/routes/QBSummaryPage/QBSummaryPage';
import NotFoundPage from '../src/routes/NotFoundPage/NotFoundPage';
import ProfileSummaryPage from '../src/routes/ProfileSummaryPage/ProfileSummaryPage';
import LoginPage from '../src/routes/LoginPage/LoginPage';
import SignupPage from '../src/routes/SignupPage/SignupPage';
import LandingPage from '../src/routes/LandingPage/LandingPage';
import PublicRoute from '../src/components/Utils/PublicRoute';
import PrivateRoute from '../src/components/Utils/PrivateRoute';
import ProfileDateSummary from '../src/components/ProfileDateSummary/ProfileDateSummary';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path='/'
                    component={LandingPage}
                />
                <PrivateRoute
                    exact path='/home'
                    component={HomePage}
                />
                <PrivateRoute
                    exact path='/qb-activity'
                    component={ActivityPage}
                />
                <PrivateRoute
                    exact path='/qb-meals'
                    component={MealPage}
                />
                <PrivateRoute
                    exact path='/qb-drinks'
                    component={DrinksPage}
                />
                <PrivateRoute
                    exact path='/qb-movies'
                    component={MoviesPage}
                />
                <PrivateRoute
                    exact path='/profile'
                    component={ProfilePage}
                />
                <PrivateRoute
                    exact path='/profile-summary'
                    component={ProfileSummaryPage}
                />
                <PrivateRoute
                    exact path='/qb-summary'
                    component={QBSummaryPage}
                />
                <PrivateRoute
                    exact path='/date-summary'
                    component={ProfileDateSummary}
                />
                {/* <Route
                    path='*'
                    component={NotFoundPage}
                /> */}
            </Switch>
        )
    }
}

export default Routes;