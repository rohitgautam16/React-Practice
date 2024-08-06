import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setNumbers] = useState(false) 
  const [characters, setcharacters] = useState(false)
  const [password, setpassword] = useState('')

  // useRef Hook

  const passwordRef = useRef(null)

  const GeneratePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*()_+"
   
    for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random()* str.length + 1)
        pass += str.charAt(char)
      
    }


    setpassword(pass)


  }, [length, numbers, characters, setpassword]) 

  const copypasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,33)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    GeneratePassword()
  },[length, numbers, characters, GeneratePassword]) 

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-lg text-center text-white my-4'>Password Generator</h1>
      <div className='flex shadow-lg rounded-xl overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='w-full outline-none py-1 px-3 '
          placeholder='Password'
          readOnly
          ref={passwordRef}
        >
        </input>
        <button 
        onClick={copypasswordtoClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy</button>

      </div>

      <div className='flex text-sm gap-x-2 py-4'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={8}
            max={32}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)}
          ></input>
          <label className='text-white'> Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={numbers}
            id='numberinput'
            onChange={(e) => setNumbers((prev) => !prev)}
          />
          <label className='text-white'> Numbers{numbers}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={characters}
            id='characterinput'
            onChange={(e) => setcharacters((prev) => !prev)}
          />
          <label className='text-white'> characters {characters}</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
