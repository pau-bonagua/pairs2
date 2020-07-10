import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Card(props)
{
    
    const [boom, setBoom] = useState();


    let [view, setView] = useState(false);

    let card = 'card'

    if(view)
    {
        card = 'card is-flipped'
    }

    function handleCount() {
        setView(view=true)
        props.onClick(props.val)
    }

    const [showCard, setShowCard] = useState(false);
    let count  = 0;

    

    
    
    
    return (
        <div className="scene">
            <div className={card}
            onClick={handleCount}
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
    