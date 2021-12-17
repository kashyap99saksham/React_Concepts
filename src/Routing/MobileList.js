import React from 'react'
import { Link } from 'react-router-dom'

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
            {/* <div className="card" style={{width: '18rem'}}>
                <div className="list card-body">
                    <h5 className="card-title">iPhone</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Samsung,Vivo</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div> */}
        </div>
    )
}

export default MobileList


