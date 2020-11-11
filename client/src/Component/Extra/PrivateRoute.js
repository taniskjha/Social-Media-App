import React, { useContext, useEffect } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
// import AuthContext from '../Context/Authorization/authContext'

function PrivateRoute({ component: Component, ...rest }) {
    // const authContext = useContext(AuthContext)
    // useEffect(() => {
    //     authContext.loadUser();
    //     //eslint-disable-next-line
    // }, [])

    const isAuthenticated = localStorage.token
    const history = useHistory()
    return (
        <Route {...rest} render={props => !isAuthenticated ? (
            <Redirect to='/login' />
        ) : (
                <Component {...props} />
            )} />
    )
}

export default PrivateRoute

