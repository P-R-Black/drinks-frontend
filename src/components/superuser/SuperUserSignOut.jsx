import React, { useEffect } from 'react'
import axiosInstance from '../../api/drinksapi/DrinksAPI'
import { useNavigate } from 'react-router-dom'

export const SuperUserSignOut = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const response = axiosInstance.post('account/logout/blacklist/', {
            refresh_token: localStorage.getItem('.refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/keep-user-admin')
    })
  return (
    <div>Logout</div>
  )
}
