import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import useGetShippingMethods from '../../hooks/useGetShippingMethods'

import Payment from './Payment'
import Preview from './Preview'
import Shipment from './Shipment'
import Success from './Success'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  const [step, setStep] = useState(1)
  const [successMessage, setSuccessMessage] = useState(null)
  const { data: methods } = useGetShippingMethods()

  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    city: '',
    countryCode: '',
    address: '',
    shippingMethod: methods ? methods[0].id : '001'
  })

  return cart ? (
    <main className='container py-2'>
      <h1>Checkout</h1>
      {step === 1 ? (
        <Shipment
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
          methods={methods}
          setStep={setStep}
        />
      ) : step === 2 ? (
        <Preview setStep={setStep} />
      ) : step === 3 ? (
        // <Payment setStep={setStep} setSuccessMessage={setSuccessMessage} />
        <Success successMessage={successMessage} />
      ) : (
        <Success successMessage={successMessage} />
      )}
    </main>
  ) : (
    <Navigate to='/' />
  )
}

export default CheckoutPage
