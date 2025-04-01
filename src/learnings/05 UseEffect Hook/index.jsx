// whenever we update the state variable, the component will re render
// But it leads to infinite loop
// To avoid the situation, we have to use useEffect hook.

import { useEffect, useState } from "react";

export function IncrementByOne() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                console.log(prevCount + 1);
                return prevCount + 1;
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup function to avoid memory leaks
    }, []);

    return <h1>Count: {count}</h1>;
}

