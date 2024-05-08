import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Attendance from './pages/Attendance'
import Mainpage from './pages/Mainpage'

function App() {
  

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Mainpage />} />
          <Route path='/attendance' element={<Attendance />}/>
        </Routes>
    </div>
  )
}

export default App
