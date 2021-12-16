import React from 'react'

const FunctionalClick = () => {
    
    function clickHandler() {
        console.log("User clicked");
    }

    return (
        <div>
            <button onClick={ clickHandler }>Click</button>
        </div>
    )
}
export default FunctionalClick


