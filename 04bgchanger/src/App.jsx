import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>

    <div className="relative w-full h-screen duration-200"
    style= {{ backgroundColor: color }}>
    
     <div className="absolute flex flex-wrap justify-center bottom-10 inset-x-0 px-2"></div>

     <div className='flex flex-wrap justify-center shadow-xl bg-slate-500 bottom-10 gap-3 px-3 py-2 rounded-2xl'>
       <button 
       onClick={() => setColor('red')}  
       className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'red' }}
       >Red</button>

       <button 
       onClick={() => setColor('blue')} 
       className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'blue' }}
       >blue</button>

      <button 
      onClick={() => setColor('green')}
      className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'Yellow' }}
       >Yellow</button>

      <button 
      onClick={() => setColor('orange')}
      className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'Purple' }}
       >Purple</button>

      <button 
      onClick={() => setColor('olive')}
      className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'Grey' }}
       >Grey</button>

      <button 
      onClick={() => setColor('black')}
      className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'Black' }}
       >Black</button>

      <button 
      onClick={() => setColor('pink')}
      className='Outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{ backgroundColor: 'Pink' }}
       >Pink</button>

     </div>
    </div>
    
    </>
  )
}

export default App
