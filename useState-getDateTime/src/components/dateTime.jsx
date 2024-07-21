import { useState } from 'react'
import '../App.css'

function Time(){
    const [autoTime,autoSetTime] = useState();
    const [time,setTime] = useState();

    function getTimeAuto(){
        autoSetTime(new Date().toLocaleTimeString())
    }
    function getTime(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(getTimeAuto,1000)
    return(
        <>
            <div className='without'>
                <h2>Showing Time Without Pressing the Button</h2>
                <h1 className='autoTime'>{autoTime}</h1>
            </div>
            <div>
                <h2>Showing Time When Pressing the Button</h2>
                <h1 className='autoTime'>{time}</h1>
                <button onClick={getTime}>Get Time</button>
            </div>
        </>
    )

}

export default Time