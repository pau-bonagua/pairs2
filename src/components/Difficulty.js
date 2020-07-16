import React, { useState, useEffect} from 'react';


let Difficulty = (props) =>
{
    function setPairsCount(val,timer)
    {
        props.onClick(val,timer)
    }

    return(
        <center>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() =>setPairsCount(3,60)}>
                Easy
        </button>&nbsp;
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => setPairsCount(9,120)}>
                Medium
        </button>&nbsp;
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => setPairsCount(12,150)}>
                Hard
        </button>
        </center>
    )
}




export default Difficulty