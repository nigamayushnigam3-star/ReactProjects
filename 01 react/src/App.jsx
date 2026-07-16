import './App.css'
import Navbar from './component/Navbar'
// import card from './component/Card'
import navbar from './component/Navbar'

 const App =() => {
  const name = "ayush"
  const age = 21
  
  return(
     <div>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Navbar/>
     <h1> my name is {name} and i m {age} year old</h1>  
     </div>  
  )
 }

export default App
   