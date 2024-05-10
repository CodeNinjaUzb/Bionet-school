import axios from 'axios';
import React from 'react';

function AddSchoolToDevice() {

      let data = {
            'school_id' : 1
      }

      const AddSchoolToDevice = () => {
            axios.post('http://95.46.96.110:8000/api/v1/addschooltodevice/' , {data} , {
                  headers : {
                        "Authorization" : 'Token eb577759f4ca0dde05b02ea699892ee560920594'
                  }
            }).then(data => {console.log(data);}).catch(err => {console.log(err);})
      }


      return (
            <div className='add-to-device'>
                  <button onClick={()=>AddSchoolToDevice()} className="btn btn-primary pt-1 pb-1 ps-3 pe-3 d-flex align-items-center gap-2 rounded-1">
                        <i className="fa-solid fa-plus"></i>
                        <p className="m-0">Maktab qo'shish</p>
                  </button>
            </div>
      );
}

export default AddSchoolToDevice;