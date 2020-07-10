import React, {useState, useEffect } from 'react'
import Card from './Card'


function CardContainer()
{
    let [count, setCount]   = useState(0)
    let [num1, setNum1]     = useState(null);
    let [num2, setNum2]     = useState(null);

    
    function handleCount(val)
    {
        
        if(count === 0)
        {
            setNum1(num1 = val);
            setNum2(num2 = null);
        }
        if(count === 1)
        {
            setNum2(num2 = val);
        }

        console.log(num1,num2);
        setCount(count+1)
        if(count == 1)
        {
            setCount(count=0)
        }

        if(num1 === num2)
        {
            alert('Pair of '+ val)
        }

        if(num1 !== num2 && num1 !== null && num2 !== null)
        {
            alert('wrong')
        }
        

    }
    let cardView = [1,1,1,1,1,1,1,1];
    let cardNums = [1,2,3,4,1,4,2,3];


    let cards = cardNums.map((item,key) =>
        <Card key={key}
        onClick={handleCount}
        val={item} view={cardView[key]}
        />
    )

    return(

        <div>
            {cards}
        </div>

    )

}

export default CardContainer