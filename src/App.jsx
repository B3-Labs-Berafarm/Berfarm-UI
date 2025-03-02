import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'
import MyFarms from './pages/MyFarms'
import BannerGrid from './pages/BannerGrid'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyHarvest from './pages/MyHarvest'
import MyInvestment from './pages/MyInvestment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" h-screen" >
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<MyFarms />} />
        <Route path="/home" element={<Home />} />
        <Route path="/farms" element={<MyFarms />} />
        <Route path="/harvest" element={<MyHarvest />} />
        <Route path="/investment" element={<MyInvestment />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      {/* </Router> */}


      {/* <Test /> */}
      {/* <Home /> */}
      {/* <BannerGrid /> */}
    </div>
  )
}

export default App
