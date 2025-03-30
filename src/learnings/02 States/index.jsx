// states usually represent a state of a variable. React only keep track of these state variables to re-render them automatically.
// to create state variable, we need use useState() hook.

import { useState } from "react";

export function Incrementer() {
    let [count, setCount] = useState(0);

    setTimeout(()=>{
        setCount(count => count + 1)
        console.log(count)
    }, 1000)

    return <h1>Count: {count}</h1>
}

// We need update the state in a certain way else it will cause an infinite loop of updating. For that, we have to use useEffect() hook.
// we'll go through it afterwards

