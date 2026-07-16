import './App.css'

function App() {
 
//function btnClick(){
//console.log("button was clicked");
 // }

 //function inputChange(){
  //console.log("user is typing");
  
  return (
    <>
  <input onchange ={function(elem){
    console.log(elem.target.value)
    
  }}
    </>
  )

}
export default App 
