import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const ProductDesc = () => {

    const {mobileItem} = useParams();
    const navigate = useNavigate()

    const anyFunctionName = () => {
        console.log("Ruko Zara!");
        alert("We are done with the validation! Go to Any Page");
        navigate('/detailpage')
    }

    return (
        <div>
            <h1> {mobileItem} </h1>
            <h3>Quis fugiat sint esse fugiat ullamco incididunt id do labore excepteur sit eiusmod Lorem qui.</h3>
            <button
                
                onClick={
                    anyFunctionName
                }

                className='btn btn-warning'
            >
                Detail Description
                </button>

                
            {/* <Link to='/detailpage'>Detail Page</Link> */}

        </div>
    )
}

export default ProductDesc
