import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from '../CartPage'
import CheckoutPage from '../CheckoutPage'

import DetailsPage from '../DetailsPage'
import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'
import ThankYouPage from '../ThankYouPage'
import Header from './Header'

const App = () => {
  return (
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
    </BrowserRouter>
  )
}

export default App
