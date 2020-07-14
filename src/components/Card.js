import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Card(props)
{
    
    let [view, setView] = useState('close');    
    let card = 'card'
    let cardFace = 'card-face card-face-front'
    let cardBack = 'card-face card-face-back'

    if(props.status === 'open' || props.status === 'active')
    {
        card = 'card is-flipped'
    }

    if (props.color === 'green')
    {
        cardFace = 'card-face card-face-front-active'
        cardBack = 'card-face card-face-back-active'
    }

    if (props.color === 'red') {
        cardFace = 'card-face card-face-front-wrong'
        cardBack = 'card-face card-face-back-wrong'
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
                <div className={cardFace}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className={cardBack}>{props.val}</div>
            </div>
        </div>
        
       
        
        
        )
    }
    
    
    export default Card
    