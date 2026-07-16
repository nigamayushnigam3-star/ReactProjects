import { useState } from 'react'
import './App.css'
import axios from 'axios'


const App = () =>{

  const [data , setData] = useState([])

    const getData = async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   
    setData(Response.data)

    }    
 
  return (
    <div> 

     <button onClick={getData}> Get Data </button>
     <div>
       {data.map(function(elem,idx)
       {
        return <h3> Hello, {elem.author} {idx} </h3>
       })}


     </div>
    
    </div>
  )
}

export default App
