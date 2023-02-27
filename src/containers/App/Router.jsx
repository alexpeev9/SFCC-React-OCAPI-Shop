import { Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage'
import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'
import DetailsPage from '../DetailsPage'
import OrderPage from '../OrderPage'
import NotFoundPage from '../NotFoundPage'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/product/:productID' element={<DetailsPage />} />
      <Route path='/order/:orderID' element={<OrderPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router
