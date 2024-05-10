import React from 'react';
import logo from '../assets/bionet-logo.png'
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className='side-bar d-flex flex-column align-items-center justify-content-around p-3'>
            <div className="logo w-50">
                  <Link to='/'>
                        <img src={logo} alt="" />
                  </Link>
            </div>
            <div className="menu d-flex flex-column gap-3">
                  {/* <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-chart-line"></i>
                        <Link to="/dashboard" className='text-decoration-none text-light'>Dashboard</Link>
                  </button> */}
                  <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-mobile"></i>
                        <Link to="/devices" className='text-decoration-none text-light'>Qurilmalar</Link>
                  </button>
                  <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-school"></i>
                        <Link to="/schools" className='text-decoration-none text-light'>Maktablar</Link>
                  </button>
                  <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-list"></i>
                        <Link to="/classes" className='text-decoration-none text-light'>Sinflar</Link>
                  </button>
                  <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-user-group"></i>
                        <Link to="/pupils" className='text-decoration-none text-light'>O'quvchilar</Link>
                  </button>
                  <button className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-chart-simple"></i>
                        <Link to="/attendance" className='text-decoration-none text-light'>Davomad</Link>
                  </button>
            </div>
            <div className="logout">
                  <button className="btn btn-primary pt-1 pb-1 ps-5 pe-5 d-flex align-items-center justify-content-center gap-3">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <Link to="/login" className='text-decoration-none text-light'>Chiqish</Link>
                  </button>
            </div>
    </div>
  );
}

export default Sidebar;