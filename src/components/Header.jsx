import axios from 'axios'
import React, { useState } from 'react'
import { API_PATH, CONFIG } from '../tools/constants'

const Header = () => {

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')

  const getImage = () => {

    axios.get(API_PATH + '/testing')
      .then((res2) => {
        console.log(res2);
      })

  }

  const saveImage = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)

    axios.post(API_PATH + '/testing', formData, CONFIG)
      .then((res) => {
        console.log(res);
        getImage()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const [user, setUser] = useState("")
  // const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [weight, setWeight] = useState("")
  const [from_address, setFrom_address] = useState("")
  const [from_floor, setFrom_floor] = useState("")
  const [from_kv, setFrom_kv] = useState("")
  const [from_persons, setFrom_persons] = useState("")
  const [to_address, setTo_address] = useState("")
  const [to_floor, setTo_floor] = useState("")
  const [to_kv, setTo_kv] = useState("")
  const [to_persons, setTo_persons] = useState("")
  const [when, setWhen] = useState("")
  const [description, setDescrioption] = useState("")

  // const postCargo = e => {
  //   e.preventDefault()

  //   axios.post(API_PATH + '/cargo', { user, title, price, weight, from_address, from_floor, from_kv, from_persons, to_address, to_floor, to_kv, to_persons, when, description }, CONFIG)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })

  // }

  return (
    <>
      {/* <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center mt-5">CARGO POST</h3>
              <form onSubmit={postCargo} className='w-50 rounded px-3 py-5 mx-auto my-5 border'>
                <input value={user} onChange={e => setUser(e.target.value)} type="text" name="user" placeholder='Username*' required className='form-control mb-4' />
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="title" placeholder='title*' required className='form-control mb-4' />
                <input value={price} onChange={e => setPrice(e.target.value)} type="text" name="price" placeholder='price*' required className='form-control mb-4' />
                <input value={weight} onChange={e => setWeight(e.target.value)} type="text" name="weight" placeholder='weight*' required className='form-control mb-4' />
                <input value={from_address} onChange={e => setFrom_address(e.target.value)} type="text" name="from_address" placeholder='from_address*' required className='form-control mb-4' />
                <input value={from_floor} onChange={e => setFrom_floor(e.target.value)} type="text" name="from_floor" placeholder='from_floor*' required className='form-control mb-4' />
                <input value={from_kv} onChange={e => setFrom_kv(e.target.value)} type="text" name="from_kv" placeholder='from_kv*' required className='form-control mb-4' />
                <input value={from_persons} onChange={e => setFrom_persons(e.target.value)} type="text" name="from_persons" placeholder='from_persons*' required className='form-control mb-4' />
                <input value={to_address} onChange={e => setTo_address(e.target.value)} type="text" name="to_address" placeholder='to_address*' required className='form-control mb-4' />
                <input value={to_floor} onChange={e => setTo_floor(e.target.value)} type="text" name="to_floor" placeholder='to_floor*' required className='form-control mb-4' />
                <input value={to_kv} onChange={e => setTo_kv(e.target.value)} type="text" name="to_kv" placeholder='to_kv*' required className='form-control mb-4' />
                <input value={to_persons} onChange={e => setTo_persons(e.target.value)} type="text" name="to_persons" placeholder='to_persons*' required className='form-control mb-4' />
                <input value={when} onChange={e => setWhen(e.target.value)} type="date" name="when" required className='form-control mb-4' />
                <input value={description} onChange={e => setDescrioption(e.target.value)} type="text" name="description" placeholder='description*' required className='form-control mb-4' />
                <button type='submit' className='btn btn-outline-dark d-block ml-auto mt-5'>Create Cargo</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="imageUpload">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={saveImage}>
                <input onChange={e => setImage(e.target.files[0])} type="file" name='image' />
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" name='title' />
                <button type='submit'>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header