import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { guestAuth } from '../../services/authService'

import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'
import DetailsPage from '../DetailsPage'
import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'
import ThankYouPage from '../ThankYouPage'
import Footer from './Footer'
import Header from './Header'

const App = () => {
  const [id, setId] = useState(null)
  useEffect(() => {
    const getId = async () => {
      const response = await guestAuth()
      setId(response.customer_id)
    }
    getId()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage id={id} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/thank-you' element={<ThankYouPage />} />
        <Route path='/product/:productID' element={<DetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
