import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
 
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo= useCurrencyInfo(from)
  const options = object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://wallpapers.com/images/hd/trillion-dollar-cash-bills-8w29bmyh9o0jpv1d.jpg)`}}>
    <h1 className='bg-red-200'>Test for tailwind</h1>
   </div>
  )
}

export default App
