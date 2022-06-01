import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className='w-50 rounded px-3 py-5 mx-auto my-5 border'>
                <input type="text" name="user" placeholder='Username*' required className='form-control mb-4' />
                <input type="text" name="title" placeholder='title*' required className='form-control mb-4' />
                <input type="text" name="price" placeholder='price*' required className='form-control mb-4' />
                <input type="text" name="weight" placeholder='weight*' required className='form-control mb-4' />
                <input type="text" name="from_address" placeholder='from_address*' required className='form-control mb-4' />
                <input type="text" name="from_floor" placeholder='from_floor*' required className='form-control mb-4' />
                <input type="text" name="from_kv" placeholder='from_kv*' required className='form-control mb-4' />
                <input type="text" name="from_persons" placeholder='from_persons*' required className='form-control mb-4' />
                <input type="text" name="to_address" placeholder='to_address*' required className='form-control mb-4' />
                <input type="text" name="to_floor" placeholder='to_floor*' required className='form-control mb-4' />
                <input type="text" name="to_kv" placeholder='to_kv*' required className='form-control mb-4' />
                <input type="text" name="to_persons" placeholder='to_persons*' required className='form-control mb-4' />
                <input type="data" name="when" placeholder='when*' required className='form-control mb-4' />
                <input type="text" name="description" placeholder='description*' required className='form-control mb-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header