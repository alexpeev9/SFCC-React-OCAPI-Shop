import React from 'react'

const Success = ({ setStep }) => {
  return (
    <>
      <h2>Success</h2>
      <div className='container bg-success rounded text-white my-1 py-4 px-5'>
        <button className='btn btn-light' onClick={() => setStep(2)}>
          Back
        </button>
      </div>
    </>
  )
}

export default Success
