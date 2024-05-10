import React, { useEffect, useState } from 'react';
import '../styles/devices.css'
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EditDevice from '../components/EditDevice';
import AddDevice from '../components/AddDevice';
import DeleteDevice from '../components/DeleteDevice';


function Devices() {

    const [devices, setDevices] = useState([])
    const [editDevice, setEditDevice] = useState(false)
    const [addDevice, setAddDevice] = useState(false)
    const [deleteDevice, setDeleteDevice] = useState(false)
    const [deviceInfo, setDeviceInfo] = useState([])

    useEffect(() => {
        axios.get('http://95.46.96.110:8000/api/v1/getdevice/1', {
            headers: {
                'Authorization': 'Token eb577759f4ca0dde05b02ea699892ee560920594'
            }
        })
            .then(data => { console.log(data); setDevices(data.data) })
            .catch(err => { console.log(err); })
    }, [])

    const editHandle = (item) => {
        setEditDevice(true)
        setDeviceInfo(item)
    }
    const deleteHandle = (item) => {
        setDeleteDevice(true)
        setDeviceInfo(item)
    }

    return (
        <>
            {editDevice ? <EditDevice setEditDevice={setEditDevice} info={deviceInfo} /> : ''}
            {addDevice ? <AddDevice setAddDevice={setAddDevice} /> : ''}
            {deleteDevice ? <DeleteDevice setDeleteDevice={setDeleteDevice} info={deviceInfo} /> : ''}
            <div className='main d-flex w-100'>
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <Navbar />
                    <div className="devices p-5">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button onClick={() => setAddDevice(true)} className="btn btn-primary ps-3 pe-3 pt-1 pb-1 rounded-0 d-flex align-items-center gap-2">
                                    <i className="fa-solid fa-plus"></i>
                                    <p className="m-0">Qurilma qo'shish</p>
                                </button>
                            </div>
                        </div>
                        <div className="devices-table pt-3">
                            <div className="devices-table-head bg-primary text-white d-grid pt-1 pb-1 rounded-1">
                                <p className="head-item m-0 text-center">Id</p>
                                <p className="head-item m-0 text-center">Seria</p>
                                <p className="head-item m-0 text-center">Kod</p>
                                <p className="head-item m-0 text-center">Oxirgi davomad</p>
                                <p className="head-item m-0 text-center">Oxirgi o'quvchi</p>
                                <p className="head-item m-0 text-center">Maktab</p>
                                <p className="head-item m-0 text-center">Tahrirlash</p>
                            </div>
                            <div className="device-table-body d-flex flex-column gap-1 pt-1">
                                {devices.map((item) => {
                                    return (
                                        <div className="device-table-body-row d-grid border pt-2 pb-2">
                                            <p className="row-item m-0 text-center">{item.id}</p>
                                            <p className="row-item m-0 text-center">{item.serial}</p>
                                            <p className="row-item m-0 text-center">{item.kod}</p>
                                            <p className="row-item m-0 text-center">{item.lastdavomad}</p>
                                            <p className="row-item m-0 text-center">{item.lastpupil}</p>
                                            <p className="row-item m-0 text-center">{item.school}</p>
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

export default Devices;