import React from 'react'
import backImg from '../images/web-developer-background.jpg'

const Header = props => (
    <div className="intro intro-single route bg-image" style={{ backgroundImage: `url(${backImg})` }}>
        <div className="overlay-mf"></div>
        <div className="intro-content display-table">
            <div className="table-cell">
                <div className="container">
                    <h2 className="intro-title mb-4">{props.title}</h2>
                </div>
            </div>
        </div>
    </div>
)

export default Header;