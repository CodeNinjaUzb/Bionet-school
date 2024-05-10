import React, { useEffect } from 'react';
import '../styles/attendance.css'
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Attendance() {

      let data = {
            "sinf_id" : 1,
            "sana" : "2024-05-08"
      }
      //'http://95.46.96.110:8000/api/v1/getattendance/'

      const getAttendance = () => {
            axios.get('http://95.46.96.110:8000/api/v1/getattendance/', {
                    headers: {
                        "Authorization" : 'Token eb577759f4ca0dde05b02ea699892ee560920594'
                    }
                } , data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
      }

      useEffect(() => {
            getAttendance()
        }, []);

      


  return (
      <div className='main d-flex w-100'>
            <div className="left">
                  <Sidebar />
            </div>
            <div className="right">
                  <Navbar />
                  <div className='attendance p-5'>
                              <div className="attendance-table">
                                    <div className="attendance-table-head bg-primary">
                                          <div className="head-item text-center">
                                                <p className='text-white m-0'>Sana</p>
                                          </div>
                                          <div className="head-item text-center">
                                                <p className='text-white m-0'>Vaqt</p>
                                          </div>
                                          <div className="head-item text-center">
                                                <p className='text-white m-0'>O'quvchi</p>
                                          </div>
                                    </div>
                                    <div className="attendance-table-body">
                                          <div className="body-item text-center">
                                                <p className='m-0'>01.01.1988</p>
                                          </div>
                                          <div className="body-item text-center">
                                                <p className='m-0'>00:00</p>
                                          </div>
                                          <div className="body-item text-center">
                                                <p className='m-0'>Raimjonov Abubakir</p>
                                          </div>
                                    </div>
                              </div>
                  </div>
            </div>
    </div>
  );
}

export default Attendance;