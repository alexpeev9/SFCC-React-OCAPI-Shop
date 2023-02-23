import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage'
import { AuthProvider } from '../../contexts/AutContext'

const App = () => {
  return (
    <AuthProvider>
      {/* <CartCountContext.Provider value={[cartCount, setCartCount]}> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
          <Route path='/product/:productID' element={<DetailsPage />} /> */}
          <Route path='/' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* </CartCountContext.Provider> */}
    </AuthProvider>
  )
}

export default App
