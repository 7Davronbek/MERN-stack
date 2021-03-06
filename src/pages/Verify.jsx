import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

const Verify = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const history = useHistory()

    const verify = e => {
        e.preventDefault()
        axios.post(API_PATH + '/verify', { code, email })
            .then((res) => {
                console.log(res);
                history.push("/login")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="verify">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center mt-5">Verify your email</h1>
                            <form onSubmit={verify} className='w-50 rounded px-3 py-5 mx-auto my-5 border'>
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
                                    name="code"
                                    placeholder='Code*'
                                    required
                                    className='form-control mb-4'
                                    value={code}
                                    onChange={e => setCode(e.target.value)}
                                />
                                <button type='submit' className='btn btn-outline-dark d-block ml-auto mt-5'>Verify</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify