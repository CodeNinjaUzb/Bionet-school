import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AddSchoolToDevice from './toDevice/AddSchooltoDevice';

function Settings() {
      return (
            <div className='main d-flex w-100'>
                  <div className="left">
                        <Sidebar />
                  </div>
                  <div className="right">
                        <Navbar />
                        <div className="settings">
                              <div className="row">
                                    <div className="col-3">
                                          <AddSchoolToDevice />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Settings;