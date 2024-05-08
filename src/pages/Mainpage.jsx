import React from 'react';
import '../styles/mainpage.css'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


function Mainpage() {
  return (
    <div className='main d-flex w-100'>
            <div className="left">
                  <Sidebar />
            </div>
            <div className="right">
                  <Navbar />
                  <Outlet />
            </div>
    </div>
  );
}

export default Mainpage;