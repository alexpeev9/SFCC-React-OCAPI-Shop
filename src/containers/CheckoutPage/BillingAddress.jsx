import useAddBillingAddress from '../../hooks/useAddBillingAddress'

import InputField from '../../components/InputField'

const BillingAddress = ({ shippingInfo, setShippingInfo, setStep }) => {
  const { addBillingAddress } = useAddBillingAddress()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addBillingAddress(shippingInfo)
    setStep(4)
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
  }
  return (
    <>
      <h2>Billing Address</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <form
          className='row d-flex justify-content-center'
          onSubmit={handleSubmit}
        >
          <InputField
            name={'firstName'}
            label={'First Name'}
            type={'text'}
            value={shippingInfo.firstName}
            action={onInputChange}
          />
          <InputField
            name={'lastName'}
            label={'Last Name'}
            type={'text'}
            value={shippingInfo.lastName}
            action={onInputChange}
          />
          <InputField
            name={'phone'}
            label={'Phone'}
            type={'text'}
            value={shippingInfo.phone}
            action={onInputChange}
          />
          <InputField
            name={'countryCode'}
            label={'Country Code'}
            type={'text'}
            value={shippingInfo.countryCode}
            action={onInputChange}
          />
          <InputField
            name={'city'}
            label={'City'}
            type={'text'}
            value={shippingInfo.city}
            action={onInputChange}
          />
          <InputField
            name={'address'}
            label={'Address'}
            type={'text'}
            value={shippingInfo.address}
            action={onInputChange}
          />
          <div className='col-12 d-flex justify-content-center'>
            <button className='btn btn-light px-4 my-0 mt-2 mb-1' type='submit'>
              <i className='bi bi-pin-map'></i> Add Billing Address
            </button>
          </div>
        </form>
        <button className='btn btn-light me-2' onClick={() => setStep(2)}>
          Back
        </button>
      </div>
    </>
  )
}

export default BillingAddress
