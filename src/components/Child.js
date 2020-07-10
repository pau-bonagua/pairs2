import React, { useState, useEffect } from 'react'

function Child(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }

    return (
    <input value={props.value} onChange={handleChange} type="text"/>
    )
}

export default Child