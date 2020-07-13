import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Card(props)
{
    
    let [view, setView] = useState('close');    
    let card = 'card'

    if(props.status === 'open')
    {
        card = 'card is-flipped'
    }
    
    let count  = 0;
    let myCss = {
        dodgerRed:
        {
            backgroundColor:'#ff1e1e'
        },
        dodgerGreen:
        {
            backgroundColor: '#1effcb'
        },
    }



    function checkView()
    {
        if(props.status === 'close')
        {
            props.onOpen(props.id)
        }
    }


    

    

    

    
    
    
    return (
        <div className="scene">
            <div className={card}
                onClick={checkView}
            >
                <div className="card-face card-face-front">
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="card-face card-face-back">{props.val}</div>
            </div>
        </div>
        
       
        
        
        )
    }
    
    
    export default Card
    