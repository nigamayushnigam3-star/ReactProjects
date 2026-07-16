import react , { useState } from 'react'

import './App.css'

const  App = () =>{
const [num , setNum] = useState([10,20,30,40]),

const btnClicked = ()=>{
  //destructuring process 
  const newNum = [...num];
  newNum.push(99)
  setNum(newNum)
}
return(
  <div>
   <h1>{num}</h1>
   <button onClick={btnClicked}>click me</button>

  </div>
)
}

export default App 