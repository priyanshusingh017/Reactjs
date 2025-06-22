import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

/*const ReactElement = {
    type: 'a',
    props :{
        href : 'https://google.com',
        target : '_blank'
    },
    Children : 'click me to visit google'
}
    */

const anotherElement = (
  <a href = "https://google.com"  target='_blank'>visit google</a>
)
const anotheruser = "hello "
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target : '_blank' },
  'click me to visit google' , 
  anotheruser // variable insection // bible karta bg kaam 
)


createRoot(document.getElementById('root')).render(

  reactElement

)
