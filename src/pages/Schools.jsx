import React, { useEffect, useState } from 'react';
import '../styles/school.css'
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AddSchool from '../components/AddSchool';
import EditSchool from '../components/EditSchool';
import DeleteSchool from '../components/DeleteSchool';


function Schools() {

      const [schools, setSchools] = useState([])
      const [editSchool, setEditSchool] = useState(false)
      const [addSchool, setAddSchool] = useState(false)
      const [deleteSchool, setDeleteSchool] = useState(false)
      const [schoolInfo, setSchoolInfo] = useState([])

      useEffect(() => {
            axios.get('http://95.46.96.110:8000/api/v1/getschools/2', {
                  headers: {
                        'Authorization': 'Basic dXNlckBBUEk6QVBJVXNlckBBUEk='
                  }
            })
                  .then(data => { console.log(data); setSchools(data.data) })
                  .catch(err => { console.log(err); })
      }, [])

      const editHandle = (item) => {
            setEditSchool(true)
            setSchoolInfo(item)
      }
      const deleteHandle = (item) => {
            setDeleteSchool(true)
            setSchoolInfo(item)
      }

      return (
            <>
                  {editSchool ? <EditSchool setEditSchool={setEditSchool} info={schoolInfo} /> : ''}
                  {addSchool ? <AddSchool setAddSchool={setAddSchool} /> : ''}
                  {deleteSchool ? <DeleteSchool setDeleteSchool={setDeleteSchool} info={schoolInfo} /> : ''}
                  <div className='main d-flex w-100'>
                        <div className="left">
                              <Sidebar />
                        </div>
                        <div className="right">
                              <Navbar />
                              <div className="schools p-5">
                                    <div className="row">
                                          <div className="col-12 d-flex justify-content-end">
                                                <button onClick={() => setAddSchool(true)} className="btn btn-primary ps-3 pe-3 pt-1 pb-1 rounded-0 d-flex align-items-center gap-2">
                                                      <i className="fa-solid fa-plus"></i>
                                                      <p className="m-0">Maktab qo'shish</p>
                                                </button>
                                          </div>
                                    </div>
                                    <div className="schools-table pt-3">
                                          <div className="schools-table-head bg-primary text-white d-grid pt-1 pb-1 rounded-1">
                                                <p className="head-item m-0 text-center">Id</p>
                                                <p className="head-item m-0 text-center">Sinf nomi</p>
                                                <p className="head-item m-0 text-center">Manzil</p>
                                                <p className="head-item m-0 text-center">Shaxar</p>
                                                <p className="head-item m-0 text-center">Viloyat</p>
                                                <p className="head-item m-0 text-center">Direktor</p>
                                                <p className="head-item m-0 text-center">Aloqa</p>
                                                <p className="head-item m-0 text-center">Tahrirlash</p>
                                          </div>
                                          <div className="schools-table-body d-flex flex-column gap-1 pt-1">
                                                {schools.map((item) => {
                                                      return (
                                                            <div className="schools-table-body-row d-grid border pt-2 pb-2">
                                                                  <p className="row-item m-0 text-center">{item.id}</p>
                                                                  <p className="row-item m-0 text-center">{item.name}</p>
                                                                  <p className="row-item m-0 text-center">{item.address}</p>
                                                                  <p className="row-item m-0 text-center">{item.city}</p>
                                                                  <p className="row-item m-0 text-center">{item.viloyat}</p>
                                                                  <p className="row-item m-0 text-center">{item.director}</p>
                                                                  <p className="row-item m-0 text-center">{item.phone}</p>
                                                                  <div className="row-item m-0 fw-bold text-center d-flex align-items-center gap-3 justify-content-center">
                                                                        <i onClick={() => { editHandle(item) }} className="fa-solid fa-pen-to-square text-warning"></i>
                                                                        <i onClick={() => deleteHandle(item)} className="fa-solid fa-trash text-danger"></i>
                                                                  </div>
                                                            </div>
                                                      )
                                                })}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      );
}

export default Schools;