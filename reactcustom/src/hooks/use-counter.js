import React, { useEffect, useState } from 'react'

function useCounter(forwards = true) {
    //by default hatayneha true 
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("hi");

            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        // console.log("cle");
        return () => clearInterval(interval);

    }, [forwards]);


    //   Technically,
    // not adding forwards as a dependency
    // won't cause a fatal error. 
    // In this situation, forwards as a dependency
    // is to prevent the React console warning.
    // - - - - - - - - - - - - - -
    //   React doesn't know if the coder's dependency
    // code will cause an issue or not.
    //     So, it's good practice to always include dependence.



    return counter
}

export default useCounter