import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindlcsslogo from './assets/tailwindcss.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const[count , setCount] = useState(0)

  const addvalue = ()=> {

    if(counter>=20){
      return
    }
    else{
      setCounter(counter+1)
      console.log("clicked" , counter)
    }
  }

  const removevalue = ()=> {

    if(counter<=0){
      return
    }
    else{
      setCounter(counter -1)
      console.log("clicked" , counter)
    }

  }

  const Addvalue_By_3 = () => {

    if(count>=21){
      return
    }
    else{
      /*setCount(count => count+1)
      setCount(count => count+1)
      setCount(count => count+1)
      */
     setCount(count+3)
      console.log(count)
    }
  }

  const Removevalue_By_3 = () => {

    if(count<=0){
      return
    }
    else{
      setCount(count=>count-1)
      setCount(count=>count-1)
      setCount(count => count-1)
      // setCount(count-3)
    }
  }



  return (
    <>
    <div className='flex justify-center items-center space-x-4'>

      <a href="https://vite.dev" target="_blank">
      <img src = {viteLogo} className='logo ' alt = "vite_logo"/>
      </a>

      <a href='https://react.dev' target='_blank'>
      <img src= {reactLogo} className='logo react' alt='react_logo'/>
      </a>

      <a href = "https://v3.tailwindcss.com/" target = '_blank'>
      <img src = {tailwindlcsslogo} className = 'logo tailwindcss ' alt='tailwindcss_logo' />
      </a>
      
    </div>

    <h1 
    className='bg-white text-black p-2 rounded-2xl m-4 font-serif drop-shadow'> 
    React + Counter  </h1>
    
    <button 
    className='bg-sky-500 hover:bg-sky-700 text-black p-2 rounded-xl m-4 font-mono '
    onClick={addvalue}
    >addvalue : {counter}</button>

    <br/>

    <button 
    className='bg-sky-400 hover:bg-sky-600 text-black p-2 rounded-xl  m-4 font-mono'
    onClick={removevalue}
    >removevalue : {counter}</button>

    <br/>
 
    <button 
    className='bg-sky-300 hover:bg-sky-500 text-black p-2 rounded-1xl m-4 font-mono'
    onClick = {Addvalue_By_3}
    >Addvalue_By_3 : {count}</button>

    <br/>

    <button 
    className='bg-sky-200 hover:bg-sky-400 text-black p-2 rounded-1xl  m-4 font-mono' 
    onClick = {Removevalue_By_3}
    >Removevalue_By_3 : {count}</button>

    </>
  )
}

export default App
