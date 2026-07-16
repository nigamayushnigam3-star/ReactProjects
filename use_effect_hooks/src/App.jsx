import { useEffect, useState } from 'react'
import './App.css'

//function App() {

  //const [count , setCount] = useState(0)  
   //const [num , setNum] = useState(10) 
  //function countUp(){
    //setCount(count + 1)
    // setNum(num + 1)
 // }  
  
  //useEffect(function(){
   // console.log('use effect is running......')
  //},[num] ) // agr hm ye chahte h ki jb jb num change ho to ye console pe chale ttoh [num] pass kr dete h .

  //return (
   // <>
     // <h1>  {count}</h1>
      //<h1> {num}</h1>
     // <button
      //onMouseEnter={() =>{
       // setCount(count+1)
      //}}
      //onMouseLeave={() =>{
       // setNum(num-1)
      //}}> 
      //Hover  </button>    
    //</>
 // )
//}




function App(){

const[a,setA] = useState(0)
const[b,setB] = useState(0) 

function changeA(){
 setA(a+1);
}
function changeB(){
  setB(b+1);
}
useEffect(()=>{
  console.log("change successfully")
},[a])

return(
<>
<h1> {a} </h1>
<h1> {b} </h1>
<button onClick={changeA}> change A </button>
<button onClick={changeB}> change B </button> 
</>
  )
}

export default App
