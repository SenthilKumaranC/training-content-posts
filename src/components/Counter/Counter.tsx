
import React, { useCallback, useState } from 'react'
import './Counter.css'

const Counter = () => {

    console.log("Rendering Counter");

    const [counterValue,setCounterValue] = useState<number>(2345);

    const increment = useCallback(
        ()=>{
            setCounterValue(counterValue+1);
        },
        [counterValue]
    );

    const decrement = useCallback(
        ()=>{
            setCounterValue(counterValue-1);
        },
        [counterValue]
    );

    return (<div className="CounterWrapper">
        <span>{counterValue}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>);

}

export default Counter;

//---> Command : Create COMPONENT_NAME component

//Create Parent folder "components"
//Create Component Folder (first letter should be CAPS)
//Create Two files - one for tsx and one for css(first letter should be CAPS)
//Load React Framework
//Create Component Arrow Function
//Return Some Empty Element
//Export the Component
//Immport CSS file

//---> Command Create a state variable
// We have to use useState Hook
// const [variable,setVariable] = useState<TYPE_OF_THE_VARIABLE>(initialValue);
//Examples
    //const [name,setName] = useState<string>("Gopal");
    //const [age,setAge] = useState<number>(39);


