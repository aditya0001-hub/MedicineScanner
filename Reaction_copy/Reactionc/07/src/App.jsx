import { useState } from 'react'
import "tailwindcss";

function App({username="emptye here"}) {
  const [color,setColor]=useState("white")
  const event1=()=>{
    document.body.style.backgroundColor="black"
  }
    const event2=()=>{
    document.body.style.backgroundColor="green"
  }
  return (
  <div>
    <button onClick={event1} >black</button>
    <button onClick={event2} >green</button>
  </div>
  )
}

export default App
