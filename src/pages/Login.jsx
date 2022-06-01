import axios from 'axios'
import React, { useState } from 'react'
import { API_PATH } from '../tools/constants'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()

        axios.post(API_PATH + '/login', { email, password })
            .then((res) => {
                console.log(res);
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
                            <form onSubmit={login}>
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
                                    type="text"
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