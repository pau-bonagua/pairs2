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
        <div className=" bottom-0 w-full border-t" style={style.flexRow}>
            <div style={style.flexColumn}>MOVES</div>
            <div style={style.flexColumn}>{props.triesCounter}</div>
        </div>
    )
    
    
}



export default TriesCounter
