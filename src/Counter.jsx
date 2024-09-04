import { useState ,useEffect} from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    
    const handleCounter = ()=>{
        setCount(c => c + 1)
    }
    useEffect( function myeffect(){
        console.log("Changed the Counter");
    })
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleCounter}>+1</button>
        </div>
    )
}