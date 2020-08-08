import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function PublicRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
            {...props}
            render={renderProps => (
                TokenService.hasAuthToken()
                    ? <Redirect to={'/'} />
                    : <Component {...renderProps} />
            )}
        />
    )
}