
import First from "./First"

function App() {

  const username ="hello"
  return (
    <>
     <h1>hello , what is you name ? {username}</h1>
     <First/>
     <p>test para</p>
    </> // -> fragment
    
  )
}

export default App


// {username} -> evaluation experssion js ka final output likhte hai .