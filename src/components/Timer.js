import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import useInterval from './UseInterval';


function Timer(props) {
    const [counter, setCounter] = React.useState(props.countdown);
    
    useEffect(() => {
  
        setCounter(props.countdown)

    }, [props.countdown])

    // Third Attempts
    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    function resetCounter()
    {
        clearInterval()
        setCounter(5);
    }
    
    // <button onClick={() => resetCounter()}>click</button>    
    return (
        <>

            <div style={{bottom:5,position:'absolute',left:10}}>
                <span className="text-2xl text-blue-500 font-bold rounded">TIMER: </span>
                <span className="text-4xl text-blue-700 font-bold rounded"><u>&nbsp;{counter}&nbsp;</u></span>
            </div>
            
        </>
        )
        
        
    }
    
    
    
    export default Timer
    