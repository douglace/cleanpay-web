import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className={"bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"}>CleanPay Web</h2>
    </>
  )
}

export default App
