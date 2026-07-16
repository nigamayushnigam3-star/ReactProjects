import REACT from 'react' 
import { Routes, Route, Link } from 'react-router-dom'


function App() {


  return (
    <>
      <div className='nav' >
    <h3>AYUSH</h3>
    <div >
      {/*<a href="/">Home</a> 
      <a href="/about">About</a> 
      <a href="#">course</a> 
      <a href="/contact">Contact US </a> */}
      <Link to = '/'>Home</Link> {/* This Link tag prevent from reloading and ensure single page application */}
      <Link to = '/about' >About</Link>
      <Link to = '/contact' >Contact</Link>
    </div>
    </div>


     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<about />} />
        <Route path='/contact' element={<contact/>} />

      </Routes>
    </>
  )
}

export default App
