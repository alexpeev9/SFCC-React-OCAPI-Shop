import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useCartContext } from '../../contexts/CartContext'

import ShippingAddress from './ShippingAddress'
import ShippingMethod from './ShippingMethod'
import BillingAddress from './BillingAddress'
import Preview from './Preview'
import Payment from './Payment'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  const [step, setStep] = useState(1)

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    countryCode: '',
    shippingMethod: ''
  })

  return (
    <main className='container py-2'>
      <h1>Checkout - {step}/5</h1>
      {step === 1 ? (
        cart ? (
          <ShippingAddress
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            setStep={setStep}
          />
        ) : (
          <Navigate to='/' />
        )
      ) : step === 2 ? (
        <ShippingMethod
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
          setStep={setStep}
        />
      ) : step === 3 ? (
        <BillingAddress
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
          setStep={setStep}
        />
      ) : step === 4 ? (
        <Preview setStep={setStep} />
      ) : (
        <Payment setStep={setStep} />
      )}
    </main>
  )
}

export default CheckoutPage
