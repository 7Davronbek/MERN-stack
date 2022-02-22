import React from 'react'
import { Link } from 'react-router-dom'
import notes from '../data/notes'

const MyNotes = () => {
    const deleteHandler = e => {
        console.log(e);
        window.confirm('Are you sure to delete?')
    }
  return (
    <div className='myNotes'>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Link to='/create-note' className="btn btn-outline-success">Create Note</Link>
          </div>
        </div>
        <div className="row my-5">
          {notes.map((note, index) => (
            <div key={note._id} className="col-lg-10 mx-auto mb-5">
              <div className="card">
                  
                <div className="card-header d-flex align-items-center">
                  <h6>{note.title}</h6>
                  <Link to={`/note/${note._id}`} className="btn ml-auto btn-primary">Edit note</Link>
                  <button onClick={() => deleteHandler(note._id)} className="btn ml-3 btn-outline-danger">Delete note</button>
                </div>

                <div className="card-body">
                    <div className="badge badge-success">
                        <h6>Category - {note.category}</h6>
                    </div>
                    <h5>
                        {note.title}
                    </h5>
                    <p>
                        {note.content}
                    </p>
                    <span className='text-secondary mt-3 blockquote-footer d-flex'>Created on - date</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyNotes