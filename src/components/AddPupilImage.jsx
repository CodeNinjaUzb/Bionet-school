import React, { useState } from 'react';
import '../styles/editPupil.css'
import axios from 'axios';

function AddPupilImage({setAddPupilImage , info}) {

      const [file , setFile] = useState([])

      function handle(e) {
            let uploadedFile = e.target.files[0]
            setFile(uploadedFile)
            console.log(file);
      }



      const addPupilImage = () => {

            let formdata = new FormData()

            formdata.append('id' , info.id)
            formdata.append('image' , file)

            axios.post('http://95.46.96.110:8000/api/v1/addpupilimage/', {formdata}, {
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
                                    <h5 className=''>O'quvchi rasmini qo'shish</h5>
                              </div>
                              <div className="close">
                                    <i onClick={() => setAddPupilImage(false)} className="fa-solid fa-rectangle-xmark text-danger"></i>
                              </div>
                        </div>
                        <div className="edit-pupil-body">
                              <div className="row">
                                    <div className="col-6">
                                          <input onChange={(e)=>handle(e)} type="file" name="" id="" />
                                    </div>
                                    <div className="col-6"></div>
                              </div>
                              <div className="row pt-4">
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={() => setAddPupilImage(false)} className="btn btn-danger rounded-1 pt-1 pb-1 ps-3 pe-3">Bekor qilish</button>
                                    </div>
                                    <div className="col-6 d-flex flex-column gap-1">
                                          <button onClick={()=>addPupilImage()} className="btn btn-primary rounded-1 pt-1 pb-1 ps-3 pe-3">Saqlash</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default AddPupilImage;