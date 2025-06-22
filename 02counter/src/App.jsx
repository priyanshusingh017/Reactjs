import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5)

  // here in variable refence we use the let as varible assign not const one .
  // counter - variable 
  // depend upon you to assign the variable name -> setCounter ->function  responsible to change the variable value 
  // default value -> 15 because in usestate we assign it as 15 

  // let counter = 5

  const addvalue = () => {
    
    // counter = counter +1 -> alternative way to add value and in setcounter -> only counter 
    if(counter >= 20){
      // setCounter(counter-counter) -> after we reach the limit to 20 then its again reassign to 0 
      
      return  // -> not excced the limit 20 
    }
    else {
      setCounter(counter +1 )
      console.log("clicked" , counter);
    }
  }

  const removevalue = () => {
    if(counter <=0){
      
      return // not exceed the limit 0 or say never reach to negative value 
    }
    else{
      setCounter(counter -1 )
      console.log("clicked" , counter);
    }
  }

  return (
    <>
       <h1>React</h1>
       <h2>counter value : {counter} </h2>


       <button
       onClick = {addvalue}
       >Add value : {counter} </button>
       <br/>
       <button
       onClick = {removevalue}
       >Remove value : {counter} </button>

       <p>footer : {counter} </p>
    </>
  )
}

export default App


// bible inject in document function 
