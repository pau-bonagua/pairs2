import React, { useState } from 'react';


function HighScores(props)
{
    let style =
    {
        flexRow:
        {
            
            margin: '0 auto',
            display: 'flex',
            padding:'.1em'
        },
        flexColumn:
        {
            marginLeft:'.5em',
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingBottom:'.1em',
            paddingTop: '0em',
            flex: 1,
       
        },
        span:
        {
            color:'#F9F871',
            float:'right',
            fontSize:'1.2em',
            fontWeight:1000

        }
    }
    
    
    
    return (
        
        <div style={style.flexRow}>
            <div style={style.flexColumn}>
                <i>{props.item.name}</i>
                <span style={style.span}>{props.item.moves}</span>
            </div>
            
        </div>
        )
    }
    
    
    export default HighScores;