import React, { Component } from 'react';
import { useState } from 'react';

function TestFuncComponent() {

    const [count, setCount] = useState(8);
    function incrementHandle()
    {
        setCount(lastCount => lastCount + 1);
        setCount(lastCount => lastCount + 1);
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={incrementHandle}>+</button>
        </>
     );
   
}
export default TestFuncComponent;