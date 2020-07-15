import React, {useState, useEffect } from 'react'
import Card from './Card'


function CardContainer(props)
{
    let style = {
        cardContainer:
        {
            
        }
    }
    let [pairsCount, setPairsCount] = useState();
    let [number1, setNumber1] = useState(null);
    let [number2, setNumber2] = useState(null);
    let [cardNums, setCardNums] = useState(boom());
    // let [cardNums, setCardNums] = useState([
    //     { id: 1, value: 1, status: 'close', color: 'blue' },
    //     { id: 2, value: 2, status: 'close', color: 'blue' },
    //     { id: 3, value: 3, status: 'close', color: 'blue' },
    //     { id: 4, value: 1, status: 'close', color: 'blue' },
    //     { id: 5, value: 7, status: 'close', color: 'blue' },
    //     { id: 6, value: 4, status: 'close', color: 'blue' },
    //     { id: 7, value: 5, status: 'close', color: 'blue' },
    //     { id: 8, value: 6, status: 'close', color: 'blue' },
    
    //     { id: 9, value: 4, status: 'close', color: 'blue' },
    //     { id: 10, value: 6, status: 'close', color: 'blue' },
    //     { id: 11, value: 3, status: 'close', color: 'blue' },
    //     { id: 12, value: 2, status: 'close', color: 'blue' },
    //     { id: 13, value: 7, status: 'close', color: 'blue' },
    //     { id: 14, value: 8, status: 'close', color: 'blue' },
    //     { id: 15, value: 8, status: 'close', color: 'blue' },
    //     { id: 16, value: 5, status: 'close', color: 'blue' },
    //     { id: 17, value: 9, status: 'close', color: 'blue' },
    //     { id: 18, value: 9, status: 'close', color: 'blue' },
    // ]);
    // let [cardNums, setCardNums] = useState([
    //     { id: 1, value: 1, status: 'close', color: 'blue' },
    //     { id: 2, value: 2, status: 'close', color: 'blue' },
    //     { id: 3, value: 2, status: 'close', color: 'blue' },
    //     { id: 4, value: 1, status: 'close', color: 'blue' },
    
    // ]);
    
    function checkDups(arr, value)
    {
        let counter = 0;
        arr.forEach((num)=>{
            if(value === num)
            {
                counter=counter+1;
            }
        });
        
        return counter;
    }
    
    function boom()
    {
        let pairs = props.pairsCount;
        let dups = [];
        let cards = [];
        let ctr = 0;
        for(let i=1; i<=pairs;i++)
        {
            dups.push(i);
            dups.push(i);
        }
        
        while(cards.length != pairs*2)
        {
            let rand = Math.floor(Math.random() * dups.length);
            let val = dups.splice(rand,1)[0];
            ctr = ctr+1;
            
            
            let row = {
                id: ctr,
                value: val,
                status: 'close',
                color:'blue'
            }
            
            cards.push(row);
            
        }
        
        return cards;
    }
    
    
    function completed()
    {
        let yes = [];
        let no = [];
        let active = 0;
        cardNums.map((row) =>{
            if(row.status === 'active')
            {
                active = active +  1;
            }
            
            
        });
        
        if(active === cardNums.length)
        {
            cardNums.map((row) => {
                row.status = 'close'; 
            });
        }
    }
    
    
    function callbackParent()
    {
        props.onChild()
    }
    
    function renderCard(item,key)
    {
        return <Card 
        key={key}
        val={item.value}
        status={item.status}
        id={item.id}
        color = {item.color}
        openCard={openCard}
        onOpen={handleOpen}
        />
    }
    
    function closeCards() {
        let newNums = [];
        cardNums.forEach((row) => {
            
            if(row.status !== 'active')
            {
                row.status = 'close';
                row.color = 'blue';
            }
            newNums.push(row)
        });
        setCardNums(cardNums = newNums);
    }
    
    
    function openCard(cardId)
    {
        let newNums = [];
        cardNums.forEach((row) => {
            
            if (row.id === cardId) {
                row.status = 'open';
            }
            newNums.push(row)
        });
        setCardNums(cardNums = newNums);
    }
    
    function checkPair()
    {
        callbackParent()
        let value1 = cardNums.filter(num => num.id == number1)[0];
        let value2 = cardNums.filter(num => num.id == number2)[0];
        
        if(value1.value === value2.value)
        {
            let newNums = [];
            cardNums.map((row) =>{
                
                if(row.id === number1 || row.id === number2)
                {
                    row.status = 'active'
                    row.color = 'green'
                }
                newNums.push(row)
            });
            setCardNums(cardNums = newNums) 
        }
        else
        {
            let newNums = [];
            cardNums.map((row) => {
                
                if (row.id === number1 || row.id === number2) {
                    row.color = 'red'
                }
                newNums.push(row)
            });
            setCardNums(cardNums = newNums)
        }
        
        completed();
    }
    
    function handleOpen(cardId) 
    {   
        if (number1 === null) 
        {
            
            setNumber1(number1 = cardId)
            openCard(cardId)
        }
        else if (number2 === null && number1 !== null)
        {
            
            setNumber2(number2 = cardId)
            openCard(cardId)
            checkPair()
        }
        else
        {
            setNumber2(number1 = null)
            setNumber2(number2 = null)
            
            closeCards()
            openCard(cardId)
            setNumber1(number1 = cardId)
        }
    }
    
    let cards = cardNums.map((item, key) =>
    renderCard(item,key)
    )
    return(
        
        <div style={style.cardContainer}>
        {cards}
        </div>
        
        )
        
    }
    
    export default CardContainer