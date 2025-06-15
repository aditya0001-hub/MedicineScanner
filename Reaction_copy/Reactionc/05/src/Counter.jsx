import {useState} from 'react'
function Counter(){
    const [count,setCount]=useState(15)
    const addCount=()=>{
        if(count<20){

            setCount(count+1)
        }
    }
     const remCount=()=>{
        if(count>0){

            setCount(count-1)
        }
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={remCount}>Remove</button>
        </div>
    )
}
export default Counter