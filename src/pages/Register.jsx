import React from 'react'
import { connect } from 'react-redux'
import {updateState} from '../redux/actions/loginAction'

const Register = (props) => {
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

export default connect(mapStateToProps, {updateState})(Register)