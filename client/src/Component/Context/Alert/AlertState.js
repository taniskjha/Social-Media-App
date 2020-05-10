import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import { v1 as uuidv1 } from 'uuid';

import {
    SET_ALERT,
    REMOVE_ALERT,
} from './types'

const AlertState = (props) => {
    const initialState = [];
    const [state, dispatch] = useReducer(alertReducer, initialState)

    // set Alert Starts here
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuidv1();
        console.log(id)
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}

        </AlertContext.Provider>
    )
}

export default AlertState