import React from 'react'

const App = () => {
  return (
    <>
      <div style={{height: '75vh'}} className="app d-flex align-items-center justify-content-center ">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto text-center">
              <h1 className='mb-5 pb-5'>MERN NOTES APP</h1>
              <button className="btn btn-dark ">Log in</button>
              <button className="btn btn-outline-dark mx-3">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App