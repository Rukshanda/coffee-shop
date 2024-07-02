import React from 'react'
import footerlogo from "../images/footer-logo.png"
function FooterLogo({width = "80px"}) {
    return (
        <div>
            <img src={footerlogo} alt="Footer Logo"  width={width}/>
        </div>
    )
}

export default FooterLogo
