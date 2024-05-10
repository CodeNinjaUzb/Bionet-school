import React, { useState } from 'react';
import '../styles/login.css'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {

      const navigate = useNavigate()

      const [data , setData] = useState({
            'username' : '',
            'password' : ''
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
            console.log(data);
      } 

      function login () {
            axios.post('http://95.46.96.110:8000/api/v1/api-token-auth/' , {data}) 
            .then(data => {console.log(data);})
            .catch(err => {console.log(err);})
      }

      return (
            <div className='login w-100 bg-primary d-flex align-items-center justify-content-center'>
                  <div className="form rounded-2 pt-3 pb-3">
                        <div className="login-title text-center">
                              <h3>Tizimga kirish</h3>
                        </div>
                        <form className='ps-5 pe-5 pt-4 d-flex flex-column gap-3'>
                              <div className="username">
                                    <Input
                                          required
                                          onChange={(e)=>handle(e)}
                                          id='username'
                                          placeholder="Username"
                                          prefix={
                                                <UserOutlined
                                                      style={{
                                                            color: '#000',
                                                      }}
                                                />
                                          }
                                    />
                              </div>
                              <div className="password">
                                    <Input.Password required onChange={(e)=>handle(e)} id='password' placeholder="Password" />
                              </div>
                              <button onClick={()=>login()} className="btn btn-primary w-100">Kirish</button>
                        </form>
                        <p className='text-center mt-4'>Ro'yxatdan o'tmaganmisiz ? <Link to='/signup' className='text-decoration-none'>Ro'yxatdan o'tish</Link></p>
                  </div>
            </div>
      );
}

export default Login;