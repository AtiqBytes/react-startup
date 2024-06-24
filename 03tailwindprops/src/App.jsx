import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:'atiq',
    age:22,
    address:{
      city:'islamabad',
      state:'khan',
      country:'pakistan'
    }
  }

  let newArr=[1,2,3,4,5,6,7,8,9]

  return (
    <>
     <h1 className="text-3xl bg-green-500 p-3 rounded-md">vite with tailwind</h1>
     <Card username="atiq" myArr={newArr}/>
     <Card username="osman" post="staff engineer"/>
    </>
  )
}

export default App
