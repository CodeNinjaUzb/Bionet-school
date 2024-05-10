import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import '../styles/editPupil.css'
import axios from 'axios';

function EditPupil({ info, setEditPupil }) {

      const [value, setValue] = useState("");
      const [data, setData] = useState({
            'id': info.id,
            'name': '',
            'jinsi': '',
            "tug_sana": "",
            "address": "",
            "phone": "",
            "image": null,
            "person_id": null,
            "qarindoshi": "",
            "qarindoshi_phone": null,
            "sinf": '1'
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      }

      const onChange = (e) => {
            console.log('radio checked', e.target.value);
            setValue(e.target.value);
      };



      const Pupil = () => {
            axios.put('http://95.46.96.110:8000/api/v1/editpupil/', {data}, {
                  headers: {
                        "Authorization" : 'Token eb577759f4ca0dde05b02ea699892ee560920594'
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
                                    <i onClick={() => setEditPupil(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="name">Ism va Familiya :</label>
                                          <Input id='name' onChange={(e)=>handle(e)} placeholder="" required defaultValue={info.name} />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="birthday">Tug'ilgan sana :</label>
                                          <input onChange={(e)=>handle(e)} defaultValue={info.tug_sana} className='border rounded-2 pt-1 pb-1 ps-3 pe-3' type="date" name="birthday" id="tug_sana" />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="sex">Jinsi :</label>
                                          <Radio.Group id='jinsi' defaultValue={info.jinsi} onChange={(e)=>handle(e)} value={value}>
                                                <Radio value={"Erkak"}>Erkak</Radio>
                                                <Radio value={"Ayol"}>Ayol</Radio>
                                          </Radio.Group>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="address">Manzil :</label>
                                          <Input id='address' onChange={(e)=>handle(e)} defaultValue={info.address} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="sex">Telefon raqami :</label>
                                          <Input id='phone' onChange={(e)=>handle(e)} defaultValue={info.phone} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="address">Qarindoshi :</label>
                                          <Input id='qarindoshi' onChange={(e)=>handle(e)} defaultValue={info.qarindoshi} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-1">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="sex">Qarindoshining raqami :</label>
                                          <Input id='qarindoshi_phone' onChange={(e)=>handle(e)} defaultValue={info.qarindoshi_phone} placeholder="" required />
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <label htmlFor="address">Sinf :</label>
                                          <Input id='sinf' onChange={(e)=>handle(e)} defaultValue={info.sinf} placeholder="" required />
                                    </div>
                              </div>
                              <div className="row pt-4">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={() => setEditPupil(false)} className="btn btn-danger rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={()=>Pupil()} className="btn btn-primary rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default EditPupil;