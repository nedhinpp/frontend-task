import React from 'react'

function Footer() {
    return (
        <div id="footer">
            <div className="social-icons">
                <button type="button"><i className="fa fa-google"></i></button>
                <button type="button"><i className="fa fa-facebook"></i></button>
                <button type="button"><i className="fa fa-linkedin"></i></button>
                <button type="button"><i className="fa fa-twitter"></i></button>
            </div>
            <div><strong>Example@email.com</strong></div>
            <div><strong>Copyrigt 2020 Name. All rights reserved.</strong></div>
        </div>
    )
}

export default Footer