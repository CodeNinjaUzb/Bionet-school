import React from 'react';
import '../styles/login.css'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

function Login() {
      return (
            <div className='login w-100 bg-primary d-flex align-items-center justify-content-center'>
                  <div className="form rounded-2 pt-3 pb-3">
                        <div className="login-title text-center">
                              <h3>Tizimga kirish</h3>
                        </div>
                        <form className='ps-5 pe-5 pt-4 d-flex flex-column gap-3'>
                              <div className="username">
                                    <Input
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
                                    <Input.Password placeholder="Password" />
                              </div>
                              <button className="btn btn-primary w-100">Kirish</button>
                        </form>
                        <p className='text-center mt-4'>Ro'yxatdan o'tmaganmisiz ? <Link to='/signup' className='text-decoration-none'>Ro'yxatdan o'tish</Link></p>
                  </div>
            </div>
      );
}

export default Login;