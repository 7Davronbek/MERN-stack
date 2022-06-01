import React from 'react'

const Verify = () => {
    return (
        <>
            <div className="verify">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email*'
                                    required
                                    className='form-control mb-4'
                                />
                                <input
                                    type="text"
                                    name="code"
                                    placeholder='Code*'
                                    required
                                    className='form-control mb-4'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify