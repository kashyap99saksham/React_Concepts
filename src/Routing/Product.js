import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1>Products :</h1>
            <h3>Every products are Below: </h3>
            <div className='d-flex justify-content-center'>
            <NavLink
                style={ 
                    ({ isActive }) => {
                        return {
                            backgroundColor: isActive ? 'yellow' : 'black'
                        }
                    }
                } 
                to='/products/mobile' className='btn btn-warning' >Mobile</NavLink>
            <NavLink
                style={ 
                    ({ isActive }) => {
                        return {
                            backgroundColor: isActive ? 'yellow' : 'black'
                        }
                    }
                }
                to='/products/laptop' className='btn btn-danger' >Laptop</NavLink>

            </div> <br />
            {/* <Link className='btn btn-success' to='/products/mobile'>Mobile</Link>
            <Link className='btn btn-primary' to='/products/laptop'>Laptop</Link> */}
            <Outlet />
        </div>
    )
}

export default Product
