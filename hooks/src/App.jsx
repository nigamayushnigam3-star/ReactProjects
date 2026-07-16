import './App.css'
import React , {useState} from 'react' 
const App=()=>{
 // let a=10;
  //function changeA(){
   // a++;
    //console.log(a)

  //const [a,setA] = useState(10) // here a=10 we see
  //const [user,setUser] = useState("golu")
  //const[users,setUsers] = useState([10,20,30,40]) //if we passing an array 
  const [num,setNum] = useState(0)
  
  //function changeA(){
    //setA(50)
    //setUser("Ayush")
    //setUsers([90,80,70,60])
  //}
  function increaseNum(){
      setNum(num+1)
  }

  function decreaseNum(){
    setNum(num-1)
  }
    function ResetNum(){
    setNum(0)
  }


  return(
    <>
   {/* <h2> i have {a} rupees  <br/> my name new name is {user} <br/> </h2>
    <button onClick={changeA}> click here ! </button> */}
    
    <h1>{num}</h1>
    <button onClick={increaseNum}> Increase </button>
    <button onClick={decreaseNum}> Decrease</button>
    <button onClick={ResetNum}> Reset </button>



    </>
  )
}

export default App
