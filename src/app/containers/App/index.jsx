import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartCountContext } from '../../utils/Context'
import { getCartLength } from '../../services/cartService'

import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'
import DetailsPage from '../DetailsPage'
import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'
import ThankYouPage from '../ThankYouPage'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const getItemsCount = async () => {
      const length = await getCartLength()
      setCartCount(length)
    }
    getItemsCount()
  }, [])

  return (
    <CartCountContext.Provider value={[cartCount, setCartCount]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
          <Route path='/product/:productID' element={<DetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartCountContext.Provider>
  )
}

export default App
