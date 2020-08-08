import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
            {...props}
            render={renderProps => (
                TokenService.hasAuthToken()
                    ? <Component {...renderProps} />
                    : <Redirect
                        to={{
                            pathName: '/',
                            state: { from: renderProps.location }
                        }} />
            )}
        />
    )
}