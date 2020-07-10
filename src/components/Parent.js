import React, { useState, useEffect } from 'react'
import Child from './Child'


function Parent() {
    const [value, setValue] = React.useState("");
    
    function handleChange(newValue) {
        setValue(newValue);
    }
    
    // We pass a callback to Child
    return (
        <h1></h1>
    <Child value={value} onChange={handleChange}/>
    )
}

export default Parent