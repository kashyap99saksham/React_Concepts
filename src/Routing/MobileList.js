import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MobileList = () => {
    return (

        <div className='d-flex'>
            <div className="card" style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to='/products/mobile/iphone' className='btn btn-primary'>iPhone</Link> 
                    </li>
                    <li className="list-group-item">
                        <Link to='/products/mobile/vivo' className='btn btn-primary'>Vivo</Link> 
                    </li>
                    <li className="list-group-item">
                        <Link to='/products/mobile/samsung' className='btn btn-primary'>Samsung</Link> 
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export default MobileList


