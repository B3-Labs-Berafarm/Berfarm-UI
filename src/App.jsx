import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-image-gradient h-screen">

      <Home />
    </div>
    // <Test />
  )
}

export default App
