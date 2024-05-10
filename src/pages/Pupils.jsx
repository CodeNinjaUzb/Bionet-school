import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/pupils.css'
import axios from 'axios';
import EditPupil from '../components/EditPupil';
import AddPupil from '../components/AddPupil';
import DeletePupil from '../components/DeletePupil';
import AddPupilList from '../components/AddPupilList';
import AddPupilImage from '../components/AddPupilImage';

function Pupils() {

      const [pupil, setPupil] = useState([])
      const [editPupil, setEditPupil] = useState(false)
      const [addPupil, setAddPupil] = useState(false)
      const [addPupilList, setAddPupilList] = useState(false)
      const [addPupilImage, setAddPupilImage] = useState(false)
      const [deletePupil, setDeletePupil] = useState(false)
      const [pupilInfo, setPupilInfo] = useState([])

      useEffect(() => {
            axios.get('http://95.46.96.110:8000/api/v1/getpupil/1', {
                  headers: {
                        'Authorization': 'Token eb577759f4ca0dde05b02ea699892ee560920594'
                  }
            })
                  .then(data => { console.log(data); setPupil(data.data) })
                  .catch(err => { console.log(err); })
      }, [])

      const editHandle = (item) => {
            setEditPupil(true)
            setPupilInfo(item)
      }
      const deleteHandle = (item) => {
            setDeletePupil(true)
            setPupilInfo(item)
      }
      const addImage = (item) => {
            setAddPupilImage(true)
            setPupilInfo(item)
      }



      return (
            <>
                  {editPupil ? <EditPupil setEditPupil={setEditPupil} info={pupilInfo} /> : ''}
                  {addPupil ? <AddPupil setAddPupil={setAddPupil} /> : ''}
                  {addPupilList ? <AddPupilList setAddPupilList={setAddPupilList} /> : ''}
                  {addPupilImage ? <AddPupilImage setAddPupilImage={setAddPupilImage} info={pupilInfo} /> : ''}
                  {deletePupil ? <DeletePupil setDeletePupil={setDeletePupil} info={pupilInfo} /> : ''}
                  <div className='main d-flex w-100'>
                        <div className="left">
                              <Sidebar />
                        </div>
                        <div className="right">
                              <Navbar />
                              <div className="pupils p-5">
                                    <div className="row">
                                          <div className="col-4">
                                                <button onClick={() => setAddPupilList(true)} className="btn btn-primary ps-3 pe-3 pt-1 pb-1 rounded-0 d-flex align-items-center gap-2">
                                                      <i className="fa-solid fa-plus"></i>
                                                      <p className="m-0">O'quvchilar roýxatini qo'shish</p>
                                                </button>
                                          </div>
                                          <div className="col-4"></div>
                                          <div className="col-4 d-flex justify-content-end">
                                                <button onClick={() => setAddPupil(true)} className="btn btn-primary ps-3 pe-3 pt-1 pb-1 rounded-0 d-flex align-items-center gap-2">
                                                      <i className="fa-solid fa-plus"></i>
                                                      <p className="m-0">O'quvchi qo'shish</p>
                                                </button>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <div className="col-12">
                                                <div className="pupil-table pt-4">
                                                      <div className="pupil-table-head d-grid bg-primary pt-1 pb-1 text-white">
                                                            <div className="head-item m-0 fw-bold text-center">Rasm</div>
                                                            <p className="head-item m-0 fw-bold text-center">Id</p>
                                                            <p className="head-item m-0 fw-bold text-center">Ism-Familiya</p>
                                                            <p className="head-item m-0 fw-bold text-center">Tugilgan sana</p>
                                                            <p className="head-item m-0 fw-bold text-center">Telefon raqami</p>
                                                            <p className="head-item m-0 fw-bold text-center">Manzil</p>
                                                            <p className="head-item m-0 fw-bold text-center">Tahrirlash</p>
                                                      </div>
                                                      <div className="pupil-table-body">
                                                            {pupil.map((item) => {
                                                                  return (
                                                                        <div className="pupil-table-body-row d-grid border pt-2 pb-2 ">
                                                                              <div className="row-item d-flex align-items-center justify-content-center">
                                                                                    <img className="pupil-img m-0" src={item.image} alt="" />
                                                                              </div>
                                                                              <p className="row-item m-0 fw-bold text-center">{item.id}</p>
                                                                              <p className="row-item m-0 fw-bold text-center">{item.name}</p>
                                                                              <p className="row-item m-0 fw-bold text-center">{item.tug_sana}</p>
                                                                              <p className="row-item m-0 fw-bold text-center">{item.phone}</p>
                                                                              <p className="row-item m-0 fw-bold text-center">{item.address}</p>
                                                                              <div className="row-item m-0 fw-bold text-center d-flex align-items-center gap-3 justify-content-center">
                                                                                    <i onClick={() => { editHandle(item) }} className="fa-solid fa-pen-to-square text-warning"></i>
                                                                                    <i onClick={() => deleteHandle(item)} className="fa-solid fa-trash text-danger"></i>
                                                                                    <i onClick={()=> addImage(item)} className="fa-solid fa-image text-primary"></i>
                                                                              </div>
                                                                        </div>
                                                                  )
                                                            })}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Pupils;