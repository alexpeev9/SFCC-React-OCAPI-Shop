import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { CartCountContext } from '../../utils/Context'
import Shipment from './Shipment'

const CheckoutPage = () => {
  const cart = useContext(CartCountContext)[0]

  return cart ? (
    <main className='container py-3'>
      <h1>Checkout</h1>
      <div className='container bg-dark rounded text-white py-3 px-5'>
        <Shipment />
      </div>
    </main>
  ) : (
    <Navigate to='/' />
  )
}

export default CheckoutPage
