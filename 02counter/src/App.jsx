import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(1)
  // let Counter = 10

  const addValue = () => {
    // Counter = Counter + 1
    setCounter(Counter + 1)
  }

  const removeValue = () => {
    setCounter(Counter -1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (Counter > 20) {
         setCounter(prevCounter => prevCounter - 1)
      } else { 
        clearInterval(interval)
      }
    })
    return () => {
      clearInterval(interval)
    }
  }, [Counter])
  useEffect(() => {
    const interval = setInterval(() => {
      if (Counter < 1) {
         setCounter(prevCounter => prevCounter + 1)
      } else { 
        clearInterval(interval)
      }
    })
    return () => {
      clearInterval(interval)
    }
  }, [Counter])

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value: {Counter}</h2>

     <button onClick={addValue}>
      Add Value {Counter}</button>
     <br/>
     <br/>
     <button onClick={removeValue}>Decrease Value {Counter}</button>
     <p>Footer: {Counter}</p>
      
    </>
  )
}

export default App
