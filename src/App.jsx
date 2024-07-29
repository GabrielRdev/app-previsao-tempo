import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef() 

  function searchCity(){
    const city = inputRef.current.value
    const key = "07289acbc979d17e39370dc6bb1300c8"
  }


  return (
    <>
      <div>
        <h1>DevClub - Previsão do Tempo</h1>
        <input  ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
      </div>
    </>
  )
}



export default App
