import React, { useState } from 'react'
import CardContainer from './CardContainer'
import TriesCounter from './TriesCounter'
import HighScores from './HighScores'
import data from './data/data.json'

import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';



function Board(){
    let style=
    {
        flexContainer:
        {
            width:'40%',
            minHeight: '300px',
            margin: '0 auto',
            display: 'flex'
        },
        flexContainerColumnLeft:
        {
            padding:'2em',
            background:'#dbdfe5',
            flex:1,
            
            width:'70%',
            flexGrow:3
        },
        flexContainerColumnRight:
        {
            padding: '2em',
            background: '#dbdfe5',
            flex: 1,
            
        }
    }
    
    let [triesCounter, SetTriesCounter] = useState(0);
    
    function sample()
    {
        alert('sample')
    }
    
    
    function fromCC()
    {
        SetTriesCounter(triesCounter = triesCounter + 1)
        console.log(triesCounter)
    }
    
    function renderScore(item,key)
    {
        return <HighScores item={item} key={key}/>
    }
    
    let scores = data.map((item, key) =>
    renderScore(item, key)
    )
    
    
    return(
        
        <div>
        <div style={style.flexContainer}>
        
        <div style={style.flexContainerColumnLeft}>
        <CardContainer onChild={fromCC}/>
        </div>
        
        <div style={style.flexContainerColumnRight}>
        <TriesCounter triesCounter={triesCounter}/>
        {scores}
        </div>
        
        </div>
        
        </div>
        
        
        
        )
    }
    
    
    export default Board;