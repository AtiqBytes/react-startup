import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://wallpapers.com/images/hd/trillion-dollar-cash-bills-8w29bmyh9o0jpv1d.jpg)`}}>
    <h1 className='bg-red-200'>Test for tailwind</h1>
   </div>
  )
}

export default App
