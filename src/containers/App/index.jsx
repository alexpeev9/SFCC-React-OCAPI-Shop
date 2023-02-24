import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from '../../contexts/TokenContext'
import Router from './Router'
import Footer from './Footer'

import './assets/style.css'
import { CartProvider } from '../../contexts/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <CartProvider>
          <Router />
          <Footer />
        </CartProvider>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App
