import { useState } from 'react';
import '../App.css'


function Count(){
    const [value,setValue]=useState(0);

    function increase(){
        setValue(value + 1)
    }
    function decrease(){
        setValue(value - 1)
    }
    function clear(){
        setValue(value - value)
    }
    return (
        <>
            <div className="container">
                <h1>{value}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div> 
            <button className='button' onClick={clear}>Clear</button>     
        </>
    )
}

export default Count
