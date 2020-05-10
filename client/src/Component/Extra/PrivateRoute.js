import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../Context/Authorization/authContext'

function PrivateRoute({ component: Component, ...rest }) {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])

    const { isAuthenticated } = authContext
    return (
        <Route {...rest} render={props => !isAuthenticated ? (
            <Redirect to='/login' />
        ) : (
                <Component {...props} />
            )} />
    )
}

export default PrivateRoute

