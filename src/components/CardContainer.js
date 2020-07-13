import React, {useState, useEffect } from 'react'
import Card from './Card'


function CardContainer()
{
    let [cardsOpened, setCardsOpened] = useState(0);
    let [number1, setNumber1] = useState({ id:null, value: null });
    let [number2, setNumber2] = useState({ id: null, value: null });
    let [cardNums, setCardNums] = useState([
        {
            id: 1,
            value: 1,
            status: 'close'
        },
        {
            id: 2,
            value: 2,
            status: 'close'
        },
        {
            id: 3,
            value: 2,
            status: 'close'
        },
        {
            id: 4,
            value: 1,
            status: 'close'
        }
    ]);
    
    
    function handleActiveCard(item)
    {
        let newItem =
        {
            id: item.id,
            value: item.value
        }
        
        if(number1.id === null)
        {
            setNumber1(number1 = newItem);
        }
        else if(number2.id === null)
        {
            setNumber2(number2 = newItem);
            
            if(number1.value === number2.value)
            {
                // alert('ok')
            }
            else
            {
                // alert('not ok');
                let newNums = [];
                cardNums.forEach((item) => {
                    
                    
                    item.status = 'close';
                    
                    
                    newNums.push(item);
                });
                
                setCardNums(cardNums = newNums);
            }
            
        }
        else
        {
            
            setNumber1(number1 = { id: null, value: null });
            setNumber2(number2 = { id: null, value: null });
            
            
        }
    }
    
    function renderCard(item,key)
    {
        return <Card 
        key={key}
        val={item.value}
        status={item.status}
        id={item.id}
        openCard={openCard}
        onOpen={handleOpen}
        />
    }
    function openCard()
    {
        setCardsOpened(cardsOpened = cardsOpened + 1)
    }    
    
    function handleOpen(cardId) 
    {
        let newNums = [];
        cardNums.forEach((item)=>{
            
            if(item.id === cardId)
            {
                item.status = 'open';
                handleActiveCard(item)
            }
            
            newNums.push(item);
        });
        
        setCardNums(cardNums = newNums);
        console.log(number1,number2);
        
        
    }
    
    
    let cards = cardNums.map((item, key) =>
    renderCard(item,key)
    )
    
    return(
        
        <div>
        {cards}
        </div>
        
        )
        
    }
    
    export default CardContainer