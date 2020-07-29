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

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path='/'
                    component={HomePage}
                />
                <Route
                    exact path='/qb-activity'
                    component={ActivityPage}
                />
                <Route
                    exact path='/qb-meals'
                    component={MealPage}
                />
                <Route
                    exact path='/qb-drinks'
                    component={DrinksPage}
                />
                <Route
                    exact path='/qb-movies'
                    component={MoviesPage}
                />
                <Route
                    exact path='/profile'
                    component={ProfilePage}
                />
                <Route
                    exact path='/profile-summary'
                    component={ProfileSummaryPage}
                />
                <Route
                    exact path='/qb-summary'
                    component={QBSummaryPage}
                />
                <Route
                    exact path='/login'
                    component={LoginPage}
                />
                <Route
                    exact path='/signup'
                    component={SignupPage}
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