import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // count - variable 
  // depend upon the assign variable -> setcounter function to modify value 

  const addvalue = () => {

    if(count>=20){
      return;
    }
    // value reach to 20 then stop increment 
    else{
      setCount(prevcount => prevcount+1);
    }
  }

  const removevalue = () => {

    if(count<=0){
      return;
    }
    // value reach to 0 then stop decrement 
    else{
      setCount(prevcount=>prevcount-1);
    }
  }


  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value : {count}</h2>
      <p>
        { count===0 ? 'Click the add value to start !! 😊' : 'Keep Going !! 😉' }
      </p>
      {/*add buttom to add value */}
      <button
      onClick={addvalue}
      >Add value : {count}</button><br/>
      <p>
        {count>10 ? ' you click a lot !! 👏🏼' : 'Keep Going !! 😉'}
      </p>
      {/* remove buttom to remove value */}
      <button
      onClick={removevalue}>Remove value : {count}</button><br/>
      <p>
        {count===20 ? 'Click the remove value to remove !! 😊' : 'Keep Going !! 😉'}
      </p>
    </>
  )
}

export default App
