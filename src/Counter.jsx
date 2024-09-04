import { useState ,useEffect} from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    
    const handleCounter = ()=>{
        setCount(c => c + 1)
    }
    const handleName = (evt)=>{
        setName(evt.target.value)
    }
    useEffect( function myeffect(){
        console.log("Changed the Counter");
    },[])
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleCounter}>+1</button>
            <p>{name}</p>
            <input type="text" name="name" placeholder="Enter Name" value={name} onChange={handleName} />
        </div>
    )
}