import { BrowserRouter } from 'react-router-dom'

import { TokenProvider } from '../../contexts/TokenContext'
import { CartProvider } from '../../contexts/CartContext'

import Router from './Router'
import Footer from './Footer'
import Header from './Header'

import './assets/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <CartProvider>
          <Header />
          <Router />
          <Footer />
        </CartProvider>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App
