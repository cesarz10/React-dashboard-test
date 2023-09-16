import React, { useState } from 'react'

let counter = 1;

const MainCounter = () => {
    
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1);
        // console.log("increment");
        console.log(counter);
    }
    
    const handleDecrease = () => {
        setCounter(counter - 1);
        // console.log("decrease");
        console.log(counter);
    }

    return (
        <div>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={handleIncrement} >increment +</button>
            <button onClick={handleDecrease}>decrease -</button>
        </div>

    )
}

export default MainCounter
