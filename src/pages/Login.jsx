import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '../redux/types/authTypes'
import { API_PATH } from '../tools/constants'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const login = e => {
        e.preventDefault()

        axios.post(API_PATH + '/login', { email, password })
            .then((res) => {
                console.log(res);
                localStorage.setItem(LOGIN, res.data.token)
                history.push("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center mt-5">Login</h1>
                            <form onSubmit={login} className='w-50 rounded px-3 py-5 mx-auto my-5 border'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email*'
                                    required
                                    className='form-control mb-4'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password*'
                                    required
                                    className='form-control mb-4'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <button type='submit' className='btn btn-outline-primary d-block ml-auto mt-5'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login