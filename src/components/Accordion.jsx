import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Accordion({name , id}) {

      const navigate = useNavigate()

      const [data , setData] = useState({
            'username' : '',
            'password' : ''
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      } 

      function login () {
            if(data.username === 'user@API' && data.password === 'APIUser@API'){
                  toast.success('Tizimga muvaffaqiyatli kirildi !')
                  navigate('/admin')
            }else{
                  toast.error('Login yoki parol notogri !')
                  navigate('/login')
            }
      }


      return (
            <div className="accordion-item">
                  <h2 className="accordion-header">
                        <button className="accordion-button ps-3 w-100 pt-2 pb-2 border" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                              <p className='m-0 text-primary fw-bold text-center'>{name}</p>
                        </button>
                  </h2>
                  <div id={id} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                              <form className='p-3 d-flex flex-column gap-3'>
                                    <div className="username">
                                          <label htmlFor="email" className='fw-bold'>Loginni kiriting</label>
                                          <Input
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
                                          <label htmlFor="password" className='fw-bold'>Parolni kiriting</label>
                                          <Input.Password onChange={(e)=>handle(e)} id='password' placeholder="Password" />
                                    </div>
                                    <button onClick={()=>login()} className="btn btn-success ps-3 pe-3 pt-1 pb-1 rounded-1 w-100">Kirish</button>
                              </form>
                        </div>
                  </div>
            </div>
      );
}

export default Accordion;