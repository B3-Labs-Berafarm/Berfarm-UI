import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'
import MyFarms from './pages/MyFarms'
import BannerGrid from './pages/BannerGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-image-gradient h-screen" >

      {/* <MyFarms /> */}

      {/* <Test /> */}
      <Home />
      {/* <BannerGrid /> */}
    </div>
  )
}

export default App
