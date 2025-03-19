import { useState, lazy, Suspense } from 'react'
import './App.css'
import Test from './pages/Test'
import BannerGrid from './pages/BannerGrid'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const MyHarvest = lazy(() => import('./pages/MyHarvest'));
const MyInvestment = lazy(() => import('./pages/MyInvestment'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MyFarms = lazy(() => import('./pages/MyFarms'));

const Loader = () => (
  <div style={{ textAlign: 'center' }}>
    <div className="spinner"></div>
  </div>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" h-screen" >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MyFarms />} />
          <Route path="/home" element={<Home />} />
          <Route path="/farms" element={<MyFarms />} />
          <Route path="/harvest" element={<MyHarvest />} />
          <Route path="/investment/:vaultId" element={<MyInvestment />} />
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* <Home /> */}
      {/* <BannerGrid /> */}
    </div>
  )
}

export default App
