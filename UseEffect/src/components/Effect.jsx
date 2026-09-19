import React from 'react'
import { useState , useEffect } from 'react'
 

const useEffect = () => { 
  const[counter,setCounter] = useState(0) 

  useEffect(() => {
    console.log("Use Effect is Running !")  
    document.tittle = "AYUSH" 
  }, [counter])                   
    

  return (
    <div>
      <h1> Counter = {counter} </h1>  
      <button onClick={()=>setCounter(counter+1)}> Increase </button>  
      <button onClick={()=> setCounter(counter-1)}> Decrease </button>
    </div>
  )
} 

export default Effect       

