import React, { useState } from 'react';


function HighScores(props)
{
    let style =
    {
        flexRow:
        {

            margin: '0 auto',
            display: 'flex',
            padding:'.1em'
        },
        flexColumn:
        {
            margin:'.3em',
            border:'1px solid black',
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingBottom:'.5em',
            flex: 1
        },
    }

  

  return (
      
      <div style={style.flexRow}>
          <div style={style.flexColumn}>{props.item.name}</div>
          <div style={style.flexColumn}>{props.item.moves}</div>
      </div>
  )
}


export default HighScores;