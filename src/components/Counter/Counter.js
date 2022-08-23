 import { useState } from "react"

export const Counter = () => {
    const [ counter, setCounter ] = useState(0)
    
    return (
        <>
            <div>{counter}</div>
             <button onClick={() => { setCounter(counter +1)}}> Кнопка</button>
             <button onClick={() => { setCounter(counter -1)}}> Кнопка</button>
        </>

    )
}