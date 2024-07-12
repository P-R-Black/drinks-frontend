import React from 'react'
import axiosInstance from '../../api/jwtokenapi/jwtokenApi'
import { useNavigate } from 'react-router-dom'

import './dashboard.css'


export const Dashboard = () => {
  const navigate = useNavigate()
  // let error = "There's an Error Here"


  const LogOut = () => {
    axiosInstance.post('user/logout/blacklist/', {
      refresh_token: localStorage.getItem('.refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    navigate('/keep-user-admin')

  }

  return (
    <section className='dashboardSection' style={{ backgroundColor: 'black' }}>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={LogOut}>Logout</button>
    </section>
  )
}
