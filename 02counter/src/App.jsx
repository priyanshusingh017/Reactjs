import { useState } from 'react'

import './App.css'

function App() {

  const [counter , setCounter] = useState(5)

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
      /*setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      */ // -> use to change the value in banch format when setcounter use its chnage it the value in bamch -> 5 to next 8 .

      setCounter(counter+1)
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
