import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import '../styles/editPupil.css'
import axios from 'axios';

function AddDevice({ info, setAddDevice }) {

      const [data, setData] = useState({
            'serial': '',
            "kod": "",
            "lastdavomat": null,
            "lastpupil": null,
            "school": ''
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      }



      const Device = () => {
            axios.post('http://95.46.96.110:8000/api/v1/adddevice/', {data}, {
                  headers: {
                        'username': 'user@API',
                        'password': 'APIUser@API'
                  }
            }).then(data => {console.log(
                  data
            );})
            .catch(err => {console.log(err);})
      }

      return (
            <div className='edit-pupil position-absolute d-flex align-items-center justify-content-center'>
                  <div className="edit-modal bg-white p-3 rounded-1">
                        <div className="edit-modal-header d-flex justify-content-between align-items-center">
                              <div className="edit-pupil-title">
                                    <h3 className=''>Qurilma qo'shish</h3>
                              </div>
                              <div className="close">
                                    <i onClick={() => setAddDevice(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="name">Seriya :</label>
                                          <Input id='serial' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="birthday">Kod :</label>
                                          <Input id='kod' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="school">Maktab :</label>
                                          <Input id='school' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-4">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={() => setAddDevice(false)} className="btn btn-danger rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={()=>Device()} className="btn btn-primary rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default AddDevice;