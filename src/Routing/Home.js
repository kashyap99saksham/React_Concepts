import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title"> Welcome to Shoppy || Home Page</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link  to='/products' className="btn btn-primary">Go To Products Page</Link>
            </div>
            </div>
        </div>
    )
}

export default Home
