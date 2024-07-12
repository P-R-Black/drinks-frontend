import React, { useState } from 'react'
import axiosInstance from '../../api/jwtokenapi/jwtokenApi'
import { useNavigate } from 'react-router-dom';
import './superuser.css'

export const SuperUserSignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const disabledButton = !email || password.len < 8 || loading;


    const adminSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            await axiosInstance.post('token/', { email: email, password: password })
                .then((res) => {
                    localStorage.setItem('access_token', res.data.access);
                    localStorage.setItem('refresh_token', res.data.refresh);
                    axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
                    setLoading(false)
                    navigate('/dashboard')

                })
        } catch (error) {
            setError("Invalid Email or Password")
            setLoading(false)

        }
        setEmail("")
        setPassword("")

    }

    return (
        <section className="signInSection">
            <div className="container">
                <div className="SigInContainer">
                    <div className="singInBox">
                        <h1>Sign In</h1>
                        <form onSubmit={adminSignIn}>
                            <input id={"email"} type={"email"} value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value)} />
                            <input id={"password"} type={"password"} value={password} placeholder={"password"} onChange={(e) => setPassword(e.target.value)} />
                            <div className="errorMessage">{error}</div>
                            <button className={`${!disabledButton ? "" : "disabled"} `} disabled={disabledButton}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
