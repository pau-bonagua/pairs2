import React, { useState } from 'react'
import CardContainer from './CardContainer'
import TriesCounter from './TriesCounter'
import HighScores from './HighScores'
import data from './data/data.json'

import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';



function Board(){
    
    let [pairsCount, setPairsCount] = useState(3);


    function handleSetPairsCount(val)
    {
        alert('asd');
        setPairsCount(pairsCount = val);
    }

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
            flexGrow:3,
            border: '1px solid white'
        },
        flexContainerColumnRight:
        {
            padding: '2em',
            background: '#dbdfe5',
            flex: 1,
            border:'1px solid white',
            
            
        },
        hScore:
        {
            fontSize:'1.8em',
            color:'#0072DD'
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
        <center>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>handleSetPairsCount(3)}>
        Easy
        </button>&nbsp;
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleSetPairsCount(9)}>
        Medium
        </button>&nbsp;
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleSetPairsCount(12)}>
        Hard
        </button>
        </center>
        <br></br>
        <div style={style.flexContainer}>
        
        <div style={style.flexContainerColumnLeft}>
        <CardContainer onChild={fromCC} pairsCount={pairsCount}/>
        
        <TriesCounter triesCounter={triesCounter}/>
        </div>
        
        <div style={style.flexContainerColumnRight}>
        <span style={style.hScore}><u>&nbsp;&nbsp;HighScores&nbsp;&nbsp;</u></span>
        {scores}
        </div>
        
        </div>
        
        </div>
        
        
        
        )
    }
    
    
    export default Board;