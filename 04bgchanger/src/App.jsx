import { useState } from "react"


function App() {
  const [color , setColor] = useState("white")

  return (
    <div className=" w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed bottom-12 left-1/3 transform -translate-x-1/3 flex justify-center  items-centre px-0 border border-black rounded-3xl" >
        <div className=" flex flex-wrap justify-centre 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => {setColor("red")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "red"}}>Red
          </button>

          <button
          onClick={() => {setColor("orange")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "orange"}}>orange
          </button>

          <button
          onClick={() => {setColor("yellow")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg text-white-600"
          style={{backgroundColor : "yellow"}}>yellow
          </button>

          <button
          onClick={() => {setColor("green")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "green"}}>Green
          </button>

          <button
          onClick={() => {setColor("blue")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "blue"}}>blue
          </button>

          <button
          onClick={() => {setColor("indigo")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "indigo"}}>indigo
          </button>

          <button
          onClick={() => {setColor("violet")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "violet"}}>violet
          </button>

          <button
          onClick={() => {setColor("Olive")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "Olive"}}>Olive
          </button>

          <button
          onClick={() => {setColor("lavender")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "lavender"}}>lavender
          </button>

          <button
          onClick={() => {setColor("gold")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "gold"}}>gold
          </button>

          <button
          onClick={() => {setColor("black")}}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor : "black"}}>black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
