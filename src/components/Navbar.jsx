import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navBar py-5">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to='/'><h2>LOGO</h2></Link>
                    </div>
                    <div className="col-6 ml-auto">
                        <ul className='d-flex align-items-center justify-content-end'>
                            <li className='mr-5'><Link to='/'>Home</Link></li>
                            <li><Link to='/my-notes'>MyNotes</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar