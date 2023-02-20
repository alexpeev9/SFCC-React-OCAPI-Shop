import React from 'react'

const Payment = ({ setStep }) => {
  return (
    <>
      <h2>Payment Info</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <button className='btn btn-light me-2' onClick={() => setStep(1)}>
          Back
        </button>
        <button className='btn btn-light' onClick={() => setStep(3)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Payment
