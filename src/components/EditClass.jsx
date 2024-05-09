import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import '../styles/editPupil.css'
import axios from 'axios';

function EditClass({ info, setEditClass }) {

      const [data, setData] = useState({
            'id': info.id,
            'name': '',
            "startoflesson": "",
            "school": '',
            "rahbar": '',
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      }



      const Class = () => {
            axios.put('http://95.46.96.110:8000/api/v1/editclass/', {data}, {
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
                                    <h3 className=''>Tahrirlash</h3>
                              </div>
                              <div className="close">
                                    <i onClick={() => setEditClass(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="name">Sinf nomi :</label>
                                          <Input id='name' onChange={(e)=>handle(e)} placeholder="" required defaultValue={info.name} />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="startoflesson">Dasr boshlanish vaqti :</label>
                                          <Input id='startoflesson' onChange={(e)=>handle(e)} defaultValue={info.startoflesson} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="school">Maktab :</label>
                                          <Input id='school' onChange={(e)=>handle(e)} defaultValue={info.school} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="rahbar">Sinf rahbari :</label>
                                          <Input id='rahbar' onChange={(e)=>handle(e)} defaultValue={info.rahbar} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-4">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={() => setEditClass(false)} className="btn btn-danger rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={()=>Class()} className="btn btn-primary rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default EditClass;