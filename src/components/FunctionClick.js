import React from 'react'

function FunctionClick() {
    function handleClick(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={handleClick}>Click me! (Function Component)</button>
        </div>
    )
}

export default FunctionClick
