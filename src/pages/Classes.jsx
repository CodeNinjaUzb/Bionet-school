import React, { useEffect, useState } from 'react';
import '../styles/classes.css'
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AddClass from '../components/AddClass';
import EditClass from '../components/EditClass';
import DeleteClass from '../components/DeleteClass';


function Classes() {

      const [classes, setClasses] = useState([])
      const [editClass, setEditClass] = useState(false)
      const [addClass, setAddClass] = useState(false)
      const [deleteClass, setDeleteClass] = useState(false)
      const [classInfo, setClassInfo] = useState([])

      useEffect(() => {
            axios.get('http://95.46.96.110:8000/api/v1/getsinf/1', {
                  headers: {
                        'Authorization': 'Basic dXNlckBBUEk6QVBJVXNlckBBUEk='
                  }
            })
                  .then(data => { console.log(data); setClasses(data.data) })
                  .catch(err => { console.log(err); })
      }, [])

      const editHandle = (item) => {
            setEditClass(true)
            setClassInfo(item)
      }
      const deleteHandle = (item) => {
            setDeleteClass(true)
            setClassInfo(item)
      }

      return (
            <>
                  {editClass ? <EditClass setEditClass={setEditClass} info={classInfo} /> : ''}
                  {addClass ? <AddClass setAddClass={setAddClass} /> : ''}
                  {deleteClass ? <DeleteClass setDeleteClass={setDeleteClass} info={classInfo} /> : ''}
                  <div className='main d-flex w-100'>
                        <div className="left">
                              <Sidebar />
                        </div>
                        <div className="right">
                              <Navbar />
                              <div className="classes p-5">
                                    <div className="row">
                                          <div className="col-12 d-flex justify-content-end">
                                                <button onClick={() => setAddClass(true)} className="btn btn-primary ps-3 pe-3 pt-1 pb-1 rounded-0 d-flex align-items-center gap-2">
                                                      <i className="fa-solid fa-plus"></i>
                                                      <p className="m-0">Sinf qo'shish</p>
                                                </button>
                                          </div>
                                    </div>
                                    <div className="classes-table pt-3">
                                          <div className="classes-table-head bg-primary text-white d-grid pt-1 pb-1 rounded-1">
                                                <p className="head-item m-0 text-center">Id</p>
                                                <p className="head-item m-0 text-center">Sinf nomi</p>
                                                <p className="head-item m-0 text-center">Dars boshlanish vaqti</p>
                                                <p className="head-item m-0 text-center">Maktab</p>
                                                <p className="head-item m-0 text-center">Sinf rahbari</p>
                                                <p className="head-item m-0 text-center">Tahrirlash</p>
                                          </div>
                                          <div className="classes-table-body d-flex flex-column gap-1 pt-1">
                                                {classes.map((item) => {
                                                      return (
                                                            <div className="classes-table-body-row d-grid border pt-2 pb-2">
                                                                  <p className="row-item m-0 text-center">{item.id}</p>
                                                                  <p className="row-item m-0 text-center">{item.name}</p>
                                                                  <p className="row-item m-0 text-center">{item.startoflesson}</p>
                                                                  <p className="row-item m-0 text-center">{item.school}</p>
                                                                  <p className="row-item m-0 text-center">{item.rahbar}</p>
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

export default Classes;