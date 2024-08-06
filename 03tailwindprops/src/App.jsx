import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "rohit",
    age: 25,
  }

  let NewArray = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 , rounded-xl mb-4'>Tailwind test</h1>

      <Card username = "Elena" btnText= "Elena's Profile"/> 
       <Card username = "Abella" btnText= "Abella's Profile"/>
     
    </>
  )
}

export default App
