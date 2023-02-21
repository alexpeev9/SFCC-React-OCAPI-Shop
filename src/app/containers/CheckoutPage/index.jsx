import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { CartCountContext } from '../../utils/Context'
import Payment from './Payment'
import Preview from './Preview'
import Shipment from './Shipment'
import Success from './Success'

const CheckoutPage = () => {
  const cart = useContext(CartCountContext)[0]
  const [step, setStep] = useState(1)

  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    city: '',
    countryCode: '',
    address: '',
    shippingMethod: ''
  })

  return cart ? (
    <main className='container py-2'>
      <h1>Checkout</h1>
      {step === 1 ? (
        <Shipment
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
          setStep={setStep}
        />
      ) : step === 2 ? (
        <Preview setStep={setStep} />
      ) : step === 3 ? (
        <Payment setStep={setStep} />
      ) : (
        <Success setStep={setStep} />
      )}
    </main>
  ) : (
    <Navigate to='/' />
  )
}

export default CheckoutPage
