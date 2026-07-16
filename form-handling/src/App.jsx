import { useState } from 'react'
import './App.css'

function App() {

  const submitHandler = (e) => {
   e.preventDefault() // to prevent from reload of the websites during performing input tasks.
   console.log("form submitted");
  }
 

  return (
    <>
      <div>

       <form onSubmit={(e) => {submitHandler(e)}}>
        <input type="text" placeholder='enter name'/>
        <button>Sumit</button>
       </form>

      </div>
    </>
  )
}

export default App
