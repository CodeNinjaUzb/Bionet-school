import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Attendance from './pages/Attendance'
import Mainpage from './pages/Mainpage'
import DashboardPage from './pages/Dashboard'
import Pupils from './pages/Pupils'
import Devices from './pages/Devices'
import Classes from './pages/Classes'
import Schools from './pages/Schools'

function App() {
  

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Mainpage />} />
          <Route path='/attendance' element={<Attendance />}/>
          <Route path='/dashboard' element={<DashboardPage />}/>
          <Route path='/pupils' element={<Pupils />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/schools' element={<Schools />} />
          <Route path='/classes' element={<Classes />} />
        </Routes>
    </div>
  )
}

export default App
