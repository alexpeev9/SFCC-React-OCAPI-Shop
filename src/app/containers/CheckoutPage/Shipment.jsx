import {
  addBillingAddress,
  addEmail,
  addShipmentAddressInfo,
  addShipmentMethod,
  getShippingMethods
} from '../../services/shipmentService'

import InputField from '../../components/InputField'
import Dropdown from '../../components/Dropdown'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Shipment = ({ shippingInfo, setShippingInfo, setStep }) => {
  const [options, setOptions] = useState(null)

  useEffect(() => {
    const getCart = async () => {
      const response = await getShippingMethods()
      setOptions(response)
    }
    getCart()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    setShippingInfo(data) // in case user goes one step back
    await addEmail(data.email)
    await addShipmentMethod(data.shippingMethod)
    await addShipmentAddressInfo(data)
    await addBillingAddress(data)
    setStep(2)
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
  }

  return (
    <>
      <h2>Shipping Info</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <form
          className='row d-flex justify-content-center'
          onSubmit={handleSubmit}
        >
          <InputField
            name={'email'}
            label={'Email'}
            type={'text'}
            value={shippingInfo.email}
            action={onInputChange}
          />
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
          <Dropdown
            name={'shippingMethod'}
            label={'Shipping Method'}
            action={onInputChange}
            body={
              options ? (
                options.map((option, key) => (
                  <option value={option.id} key={key}>
                    {option.name} - {option.price} USD
                  </option>
                ))
              ) : (
                <option value='error'>Currently, no shipping methods</option>
              )
            }
          />
          <div className='col-12 d-flex justify-content-center'>
            <button className='btn btn-light px-4 my-0 mt-2 mb-1' type='submit'>
              <i className='bi bi-map'></i> Add Address
            </button>
          </div>
        </form>
        <Link className='btn btn-light me-2' to='/cart'>
          Back
        </Link>
      </div>
    </>
  )
}

export default Shipment
