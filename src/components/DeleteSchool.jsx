import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import '../styles/editPupil.css'
import axios from 'axios';

function DeleteSchool({ setDeleteSchool , info }) {



      const removeSchool = () => {
            axios.delete(`http://95.46.96.110:8000/api/v1/deleteschool/${info.id}/`, {
                  headers: {
                        'username': 'user@API',
                        'password': 'APIUser@API'
                  }
            }).then(data => {
                  console.log(
                        data
                  );
            })
                  .catch(err => { console.log(err); })
      }

      return (
            <div className='edit-pupil position-absolute d-flex align-items-center justify-content-center'>
                  <div className="edit-modal bg-white p-3 rounded-1">
                        <div className="edit-modal-header d-flex justify-content-between align-items-center">
                              <div className="edit-pupil-title">
                                    <h3 className=''>O'chirish</h3>
                              </div>
                              <div className="close">
                                    <i onClick={() => setDeleteSchool(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-12 text-center">
                                          <p className="m-0 fw-bold">
                                                <span className="text-danger">{info.name}</span>ni rostan ham o'chirasizmi ?
                                          </p>
                                    </div>
                              </div>
                              <div className="row pt-3">
                                    <div className="col-6">
                                          <button onClick={() => setDeleteSchool(false)} className="btn btn-danger w-100 rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6">
                                          <button onClick={() => removeSchool()} className="btn btn-primary w-100 rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default DeleteSchool;