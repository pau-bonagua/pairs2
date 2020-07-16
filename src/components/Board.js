import React, { useState } from 'react'
import CardContainer from './CardContainer'
import TriesCounter from './TriesCounter'
import HighScores from './HighScores'
import Difficulty from './Difficulty'
import Timer from './Timer'
import data from './data/data.json'

import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';



function Board(){
    
    let [pairsCount, setPairsCount] = useState(3);
    let [countdown, setCountdown] = useState(60);
    let [runTimer, setRunTimer] = useState(true);
    
    
    function handleSetPairsCount(val, timer)
    {
        setPairsCount(pairsCount = val);
        setCountdown(countdown=timer);
        SetTriesCounter(0)
    }


    function setTimer()
    {

    }
    
    let style=
    {
        lagayan:
        {
            minHeight: '300px',
            margin: '0 auto',
            display: 'flex'
        },
        flexContainer:
        {
            width:'40%',
            minHeight: '300px',
            margin: '0 auto',
            display: 'flex',
            borderColor:'#013663',
            background:'#4299e1'
        },
        flexContainerColumnLeft:
        {
            padding:'2em',
            background:'#bed9ff',
            flex:1,
            width:'70%',
            flexGrow:3,
            border: '1px solid white',
            position:'relative'
        },
        flexContainerColumnRight:
        {
            padding: '2em',
            background: '#63a0f5',
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

    function timerStatus()
    {
        console.log('boom');
        setRunTimer(runTimer=false)
        console.log(runTimer);
        console.log('boom');
    }
    
    
    return(
        
        <div >

        <Difficulty onClick={handleSetPairsCount}/>
        <br></br>
            <div style={style.flexContainer} className=" text-white font-bold py-4 px-4 border-b-4 rounded">
        
        <div style={style.flexContainerColumnLeft}>
        <CardContainer onChild={fromCC} pairsCount={pairsCount} runTimerFalse={timerStatus}/>
        
        {/* <TriesCounter triesCounter={triesCounter}/> */}
                    
                    
                        <div style={{padding:'1em'}}>
                        <Timer countdown={countdown} />
                        <TriesCounter triesCounter={triesCounter} />
                        </div>
                    
        </div>
        
        <div style={style.flexContainerColumnRight}>
                    <h1 className="text-2xl text-blue-800 font-bold"><center>HighScores</center></h1>     
        {scores}


        </div>
        
        </div>
        
        </div>
        
        
        
        )
    }
    
    
    export default Board;