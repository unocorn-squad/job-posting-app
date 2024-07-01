import { useState } from 'react'
import './App.css'
import { Checkbox } from './components/Checkbox/Checkbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Checkbox />
    </>
  )
}

export default App
