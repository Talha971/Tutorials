import { useEffect, useLayoutEffect } from "react"

function Counter({ count }) {

    // useEffect user ui dekhle phir chalta hai 
    useEffect(() => {
        console.log("Counter Test");
        return () => {
            console.log("Counter Mar gaya ");
        }
    }, [])

    // useLayoutEffect user ui dekhne se pehle chalta hai     
    useLayoutEffect(() => {

    }, [])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default Counter