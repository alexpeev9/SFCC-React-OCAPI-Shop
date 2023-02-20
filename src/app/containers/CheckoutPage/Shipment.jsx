import { useState } from 'react'

import InputField from '../../components/InputField'
import Dropdown from '../../components/Dropdown'
import { addPaymentMethod, addShipment } from '../../services/checkoutService'

import shippingMethods from './assets/shippingMethods.json'

const Shipment = () => {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    city: '',
    countryCode: '',
    shippingMethod: ''
  })

  const onInputChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    await addShipment(data)
    const order = await addPaymentMethod()
    console.log(order)
  }

  return (
    <form className='row d-flex justify-content-center' onSubmit={handleSubmit}>
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
        name={'city'}
        label={'City'}
        type={'text'}
        value={shippingInfo.city}
        action={onInputChange}
      />
      <InputField
        name={'countryCode'}
        label={'Country Code'}
        type={'text'}
        value={shippingInfo.countryCode}
        action={onInputChange}
      />
      <Dropdown
        name={'shippingMethod'}
        label={'Shipping Method'}
        options={shippingMethods}
        action={onInputChange}
      />
      <div className='col-12 d-flex justify-content-center'>
        <button className='btn btn-light px-4 my-0 mt-2 mb-1' type='submit'>
          <i className='bi bi-map'></i> Add Address
        </button>
      </div>
    </form>
  )
}

export default Shipment
