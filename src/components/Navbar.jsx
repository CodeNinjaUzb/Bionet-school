import React from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';


const items = [
      {
        label: <Link className='text-decoration-none' to="/profile">Profil</Link>,
        key: '0',
      },
      {
        label: <Link className='text-decoration-none' to="/settings">Sozlamalar</Link>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <Link className='text-decoration-none' to="/login">Hisobni almashtirish</Link>,
        key: '3',
      },
    ];

function Navbar() {
      return (
            <div className='navbar d-flex align-items-center justify-content-around pt-2 pb-2 ps-4 pe-4 w-100'>
                  <div className="school-name">
                        <h2 className='school-name'>Biometrik Elektron Davomad tizimi</h2>
                  </div>
                  <div className="profile d-flex align-items-center justify-content-center gap-3">
                        <div className="profile-img d-flex align-items-center justify-content-center p-4">
                              <i className="fa-solid fa-user fs-2 text-primary"></i>
                        </div>
                        <div className="profile-info">
                              <Dropdown
                                    className='text-black'
                                    menu={{
                                          items,
                                    }}
                                    trigger={['click']}
                              >
                                    <a className='name text-bold' onClick={(e) => e.preventDefault()}>
                                          <Space>
                                                Admin
                                                <i className="fa-solid fa-caret-down"></i>
                                          </Space>
                                    </a>
                              </Dropdown>
                        </div>
                  </div>
            </div>
      );
}

export default Navbar;