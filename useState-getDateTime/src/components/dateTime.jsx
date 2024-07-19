import { useState } from 'react'
import '../App.css'

function Time(){
    const [time,setTime] = useState();
    function getTime(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(getTime,1000)
    return(
        <>
            <h1>{time}</h1>
            <button>Get Time</button>
        </>
    )

}

export default Time