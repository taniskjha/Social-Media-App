import React, { useContext } from 'react'
import AlertContext from '../Context/Alert/alertContext'
const shortid = require('shortid');

function Alerts() {
    const alertContext = useContext(AlertContext)
    return (
        <>
            {alertContext && alertContext.alerts.length > 0 &&
                alertContext.alerts.map(alert =>
                    <center>
                        <div key={shortid.generate()} className={`alert col-md-4 col-md-offset-4 bg-${alert.type} text-white `} >
                            <i class="fas fa-skull-crossbones"></i>
                            {alert.msg}
                        </div>
                    </center>
                )}
        </>
    )
}

export default Alerts
