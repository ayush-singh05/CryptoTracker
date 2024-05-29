import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Coin from './components/Coin/Coin'
import DashboardPage from './components/Dasboard/DashboardPage'
import Compare from './pages/Compare'
import Watchlist from './pages/Watchlist'
import { ToastContainer } from 'react-toastify';
function App() {
  

  return (
    
    <div className='bg-black text-white '>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<Coin/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>

        </Routes>
      </BrowserRouter>
    </div>

    
  )
}

export default App
