import { useState } from 'react'
import './App.css'
import Header from './components/Common/Header/Header'
import Footer from './components/Common/Footer/Footer'
import MainComponent from './components/LandingPage/MainComponent/MainComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Coin from './components/Coin/Coin'
import DashboardPage from './components/Dasboard/DashboardPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-black text-white '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<Coin/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>

    
  )
}

export default App
