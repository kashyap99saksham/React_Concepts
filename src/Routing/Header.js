import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/home' className="navbar-brand" >Shoppy</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/home' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
