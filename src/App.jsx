import { useState } from 'react'




function App() {
const [color, setcolor] = useState('rgb(51 65 85)')
  return (
    <>
    <div className='w-full h-screen duration-1000' style={{backgroundColor: color}}>
      <div className='flex flex-col w-full h-screen justify-center items-center'>
    <h1 className='text-3xl text-center text-white'>React Background Changer</h1>
    <div className='mt-40 bg-white text-white rounded-3xl flex justify-center gap-2 flex-wrap p-2'>
    <button className= ' text-2xl bg-red-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('red')}>Red</button>
    <button className= ' text-2xl bg-pink-500 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor(' rgb(236 72 153)')}>Pink</button>
    <button className= ' text-2xl bg-green-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('green')}>Green</button>
    <button className= ' text-2xl bg-orange-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('rgb(194 65 12)')}>Orange</button>
    <button className= ' text-2xl bg-teal-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('teal')}>Teal</button>
    <button className= ' text-2xl bg-blue-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('blue')}>Blue</button>
    <button className= ' text-2xl bg-purple-700 py-1 px-4 rounded-full outline-none ' onClick={()=>setcolor('purple')}>Purple</button>
    </div>
    </div>
    </div>


    </>
  )
}

export default App
