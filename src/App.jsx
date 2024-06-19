import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementa=()=>{
    if(count<=9){

      setCount(count+1)
    }
   
      }
      
      const disminuir=()=>{
        setCount(count-1)
      }
      
   
  

  return (
    <>
     <h1>Contador:{count} </h1>
     <button onClick={incrementa}>Aumentar Valor</button>
     <button onClick={disminuir}>Aumentar Valor</button>
    </>
  )
}

export default App
