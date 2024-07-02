import React from 'react'
import logo from '../images/logo.png'
function Logo({width = "80px"}) {
    return (
        <div>
            <img src={logo} alt="Logo" width={width} />

        </div>
    )
}

export default Logo
