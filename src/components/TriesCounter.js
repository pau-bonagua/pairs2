import React, { useState } from 'react';

function TriesCounter(props){
   
    let style =
    {
        flexRow:
        {
            margin: '0 auto',
            display: 'flex'
        },
        flexColumn:
        {
            padding: '1em',
            flex: 1
        },
    }
    
    return(
    
        <div style={{ bottom: 5, position: 'absolute', right: 10 }}>
            <span className="text-2xl text-blue-500 font-bold rounded">MOVES: </span>
            <span className="text-4xl text-blue-700 font-bold rounded"><u>&nbsp;{props.triesCounter}&nbsp;</u></span>
        </div>
    )
    
    
}



export default TriesCounter
