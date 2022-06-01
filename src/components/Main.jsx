import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Main = () => {
    return (
        <>

            <div
                style={{ height: "35vh" }}
                className="app d-flex align-items-center justify-content-center "
            >
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto text-center">
                            <h1 className="mb-5 pb-5">MERN NOTES APP</h1>
                            <button className="btn btn-dark ">Log in</button>
                            <Link to='/register' className="btn btn-outline-dark mx-3">Register</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Header />

        </>
    )
}

export default Main