import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import '../styles/editPupil.css'
import axios from 'axios';

function EditSchool({ info , setEditSchool }) {

      const [data, setData] = useState({
            'id' : info.id ,
            'name': '',
            "address": "",
            "city": '',
            "viloyat": '',
            "director": '',
            "email": '',
            "phone": '',
            "primech": '',
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      }



      const School = () => {
            axios.put('http://95.46.96.110:8000/api/v1/editschool/', {data}, {
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
                                    <i onClick={() => setEditSchool(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="name">Maktab :</label>
                                          <Input defaultValue={info.name} id='name' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="address">Manzil :</label>
                                          <Input defaultValue={info.address} id='address' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="city">Shaxar :</label>
                                          <Input defaultValue={info.city} id='city' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="viloyat">Viloyat :</label>
                                          <Input defaultValue={info.viloyat} id='viloyat' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="director">Direktor :</label>
                                          <Input defaultValue={info.director} id='director' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="email">Email :</label>
                                          <Input defaultValue={info.email} type='email' id='email' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="phone">Telefon raqam :</label>
                                          <Input defaultValue={info.phone} id='phone' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="primech">Primech :</label>
                                          <Input defaultValue={info.primech} id='primech' onChange={(e)=>handle(e)} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-4">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={() => setEditSchool(false)} className="btn btn-danger rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={()=>School()} className="btn btn-primary rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default EditSchool;