import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { updateState } from '../redux/actions/loginAction'
import { API_PATH } from '../tools/constants'

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const registerUser = (e) => {
    e.preventDefault()
    axios.post(API_PATH + '/register/', { username, email, password })
      .then((res) => {
        console.log(res);
        history.push("/verify")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro tempora eveniet soluta asperiores repudiandae, pariatur architecto illum, commodi laudantium expedita ad voluptatum, laborum nesciunt optio fuga totam cupiditate sapiente nulla.
            </div>
            {props.isLoading ? <h4 className='mt-4 text-center mx-auto'>Is Loading True</h4> : <h4 className='mt-4 text-center mx-auto'>Is Loading False</h4>}
          </div>

          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-5">Register</h1>
              <form onSubmit={registerUser} className='w-50 rounded px-3 py-5 mx-auto my-5 border'>
                <input
                  type="text"
                  name="username"
                  placeholder='Username*'
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className='form-control mb-4'
                />
                <input
                  type="email"
                  name="email"
                  placeholder='Email*'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='form-control mb-4'
                />
                <input
                  type="password"
                  name="password"
                  placeholder='Password*'
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='form-control mb-4'
                />
                <button type='submit' className='btn btn-outline-dark d-block ml-auto mt-5'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.login.isLoading
  }
}

export default connect(mapStateToProps, { updateState })(Register)